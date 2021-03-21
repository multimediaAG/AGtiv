cd ../AGtiv
npm install
npm run build -- --outputPath=../docker/frontend
cd ../
cp  ./api/* ../docker/backend
cd ..
cp ./container-env.json ./docker/container-env.json
cd ./docker
PACKAGE_VERSION=$(cat ../AGtiv/package.json | grep version | head -1 | awk -F: '{ print $2 }' | sed 's/[",]//g' | tr -d '[[:space:]]')
docker build -t hrueger/agtiv:v$PACKAGE_VERSION .
rm -r frontend backend