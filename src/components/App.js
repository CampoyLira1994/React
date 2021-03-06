import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Badges from '../pages/Badges';
import BadgesNew from '../pages/BadgeNew';
import Layout from './Layout';

function App(){
return (
    <BrowserRouter>
      <Layout>
        <Switch>
            <Route exact path="/badges" component={Badges} />
            <Route exact path="/badges/new" component={BadgesNew} />
        </Switch>
      </Layout>
    </BrowserRouter>
    );
}

export default App;