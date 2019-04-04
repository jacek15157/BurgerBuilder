import React, { Component } from 'react';
import Layout from './components/Layout/Layout'
import BrugerBuilder from './components/BurgerBuilder/BurgerBuilder'
class App extends Component {
  render() {
    return (
      <div>
        <Layout>
         <BrugerBuilder></BrugerBuilder>
        </Layout>
      </div>
    );
  }
}

export default App;
