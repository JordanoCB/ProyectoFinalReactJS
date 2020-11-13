import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Homepage from './pages/homepage/Homepage';
import PokemonContextProvider from './contexts/PokemonContexts';
import Pkm from './pages/pokemon';
import NoResults from './components/common/NoResults';
import Footer from './components/common/Footer';



const App = () =>(
  <BrowserRouter>
  <Suspense>
    <Header />
    <Switch>
      <Route exact path = "/" component = { Homepage } />

      <Route path = "/Pokemon">
        <PokemonContextProvider>
          <Pkm />
        </PokemonContextProvider>
      </Route>

      <Route component = { NoResults } />
    </Switch>
    <Footer />
    </Suspense>
  </BrowserRouter>
);

App.displayName = 'App';

export default App;