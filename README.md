# Microfrontend-modules-demo

This demo takes advantage of EcmaScript Modules (ESM) to do client-side composition of microfrontends. Express is used for serving assets, but ideally one would have a dedicated asset server handling it (see [eik.dev](https://eik.dev/)).

## Features

- Client-side composition of microfrontends
- Client-side routing that consist of one or more microfrontends

## Usage

- Build each microfrontend with `npm run build`
- Start each microfrontend with `npm run podlet`
- Start the shell with `npm start`

The app should now be available on `http://localhost:8080`.

## Shared dependencies

Each podlet shares react dependencies through absolute ESM imports that are cached in the browser. They fetch both react and react-dom from Skypack, thus reducing the bundle size considerably.
