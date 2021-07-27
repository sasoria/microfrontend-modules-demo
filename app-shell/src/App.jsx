import React from 'https://cdn.skypack.dev/react';
import { BrowserRouter as Router } from 'https://cdn.skypack.dev/react-router-dom';
import { Switch, Route } from 'https://cdn.skypack.dev/react-router-dom';

const FirstPage = React.lazy(() =>
  import('http://localhost:7100/build/dist/index.js'),
);

const SecondPage = React.lazy(() =>
  import('http://localhost:7200/build/dist/index.js'),
);

const ThirdPage = React.lazy(() =>
  import('http://localhost:7300/build/dist/index.js'),
);

const FourthPage = React.lazy(() =>
  import('http://localhost:7400/build/dist/index.js'),
);

const renderMicrofrontend = (Microfrontend) => {
  return (
    <React.Suspense fallback="Loading...">
      <Microfrontend />
    </React.Suspense>
  );
};

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact render={() => renderMicrofrontend(FirstPage)} />
        <Route
          path="/first"
          exact
          render={() => renderMicrofrontend(FirstPage)}
        />
        <Route
          path="/second"
          exact
          render={() => renderMicrofrontend(SecondPage)}
        />
        <Route
          path="/third"
          exact
          render={() => renderMicrofrontend(ThirdPage)}
        />
        <Route
          path="/fourth"
          exact
          render={() => renderMicrofrontend(FourthPage)}
        />
      </Switch>
    </Router>
  );
}

export default App;
