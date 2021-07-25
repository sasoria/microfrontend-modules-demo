import React from 'https://cdn.skypack.dev/react';
import AppA from 'http://localhost:7100/build/dist/index.js';
import AppB from 'http://localhost:7200/build/dist/index.js';

function App() {
  return (
    <section>
      <AppA />
      <AppB />
    </section>
  );
}

export default App;
