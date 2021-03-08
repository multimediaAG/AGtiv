cd ../agtiv
npm install
npm run build -- --outputPath=../docker/frontend
cd ../api
npm install
npx @zeit/ncc build src/index.ts -o ../docker/backend
cd ..
cp ./container-env.json ./docker/container-env.json
cd ./docker
PACKAGE_VERSION=$(cat ../agtiv/package.json | grep version | head -1 | awk -F: '{ print $2 }' | sed 's/[",]//g' | tr -d '[[:space:]]')
docker build -t hrueger/agtiv:v$PACKAGE_VERSION .
rm -r frontend backend