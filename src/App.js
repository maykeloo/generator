import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import Layout from './Elements.js/Layouts/Layouty/Layout';

class App extends Component {
  render() { 
    return (
    <>
    <Router>
      <Layout>
      </Layout>
    </Router>

    </>
    );
  }
}
 
export default App;