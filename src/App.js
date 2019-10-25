import React from 'react';
import { Cart, Home } from './routes'
import { Header } from './components'
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <main>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </main>
  );
}

export default App;
