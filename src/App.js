import React from 'react';
import Layout from './layout/Layout.js'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'

function App() {
  return (
    <div className="App">
      <Layout>
        <BurgerBuilder></BurgerBuilder>
      </Layout>
    </div>
  );
}

export default App;
