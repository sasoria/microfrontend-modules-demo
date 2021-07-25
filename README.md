# Microfrontend-modules-demo

A demo microfrontends. This demo takes advantage of Ecma Script Modules (ESM) to do client-side composition of microfrontends. Podium's Podlet is used for serving assets, but ideally one would have an asset server handling it (see [Eik.dev](https://eik.dev/)).

## Features

- ❄️ Blazing fast development with Snowpack
- 📦 Production build with ESbuild
- ☁️ Skypack imports of react and react-dom

## Run

1. Build each microfrontend with `npm run build`
1. Start each microfrontend with `npm run podlet`
1. Start the app-shell with `npm start`

## Shared dependencies

Each podlet shares react dependencies through absolute ESM imports that are cached in the browser. They fetch both react and react-dom from Skypack, thus reducing the bundle size considerably.
