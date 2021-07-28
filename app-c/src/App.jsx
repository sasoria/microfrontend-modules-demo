import React from 'https://cdn.skypack.dev/react';

const AppA = React.lazy(() =>
  import('http://localhost:7100/build/dist/index.js'),
);

const AppB = React.lazy(() =>
  import('http://localhost:7200/build/dist/index.js'),
);

function App() {
  return (
    <section>
      <React.Suspense fallback="Loading...">
        <AppA />
        <AppB />
      </React.Suspense>
    </section>
  );
}

export default App;
