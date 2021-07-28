# Microfrontend-modules-demo

This demo takes advantage of Ecma Script Modules (ESM) to do client-side composition of microfrontends. Podium's Podlet is used for serving assets, but ideally one would have a dedicated asset server handling it (see [eik.dev](https://eik.dev/)).

## Usage

- Build each microfrontend with `npm run build`
- Start each microfrontend with `npm run podlet`
- Start the app-shell with `npm start`

The app should now be available on `http://localhost:8080`.

## Shared dependencies

Each podlet shares react dependencies through absolute ESM imports that are cached in the browser. They fetch both react and react-dom from Skypack, thus reducing the bundle size considerably.
