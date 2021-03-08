# AGtiv
![Build](https://github.com/multimediaAG/AGtiv/workflows/Build/badge.svg)
![Lint](https://github.com/multimediaAG/AGtiv/workflows/Lint/badge.svg)
> We bike around the globe

## Development
It's an application made with Angular for the frontend and Express for the backend. It's packed into a docker container with [containerizer](https://github.com/hrueger/containerizer).

1. In the `api` folder run `npm install`.
1. Start the api from the `api` folder with `npm start`.
1. In the `AGtiv` folder run `npm install`.
1. Start the frontend with `ng serve`.

## Deploy
1. Update the `containerizer.json` file with your specific data
1. `npm install containerizer --global`
1. Run `containerizer`. You need to have docker installed.