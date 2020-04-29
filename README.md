# AGtiv
> We bike around the globe

## Development
It's an application made with Angular for the frontend and Express for the backend. It's packed into a docker container with [containerizer](https://github.com/hrueger/containerizer).

1. In the `api` folder run `npm install`, `npm run createFilesWithApiKeys` and insert your database credentials in the `src/config/config.ts` file.
1. Start the api from the `api` folder with `npm start`.
1. In the `AGtiv` folder run `npm install`, `npm run createFilesWithApiKeys` and insert your data in the `environment.ts` file.
1. Start the frontend with `ng serve`.

## Deploy
1. Update the `containerizer.json` file with your specific data
1. `npm install containerizer --global`
1. Run `containerizer`. You need to have docker installed.