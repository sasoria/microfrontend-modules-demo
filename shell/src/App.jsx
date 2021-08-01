import React from 'https://cdn.skypack.dev/react';
import { BrowserRouter as Router } from 'https://cdn.skypack.dev/react-router-dom';
import { Switch, Route } from 'https://cdn.skypack.dev/react-router-dom';
import { renderMicrofrontend } from './utils';

const FirstPage = React.lazy(() =>
  import('http://localhost:7100/build/dist/index.js'),
);

const SecondPage = React.lazy(() =>
  import('http://localhost:7200/build/dist/index.js'),
);

const ThirdPage = React.lazy(() =>
  import('http://localhost:7300/build/dist/index.js'),
);

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact render={() => renderMicrofrontend(FirstPage)} />
        <Route path="/first" render={() => renderMicrofrontend(FirstPage)} />
        <Route path="/second" render={() => renderMicrofrontend(SecondPage)} />
        <Route path="/third" render={() => renderMicrofrontend(ThirdPage)} />
      </Switch>
    </Router>
  );
}

export default App;
