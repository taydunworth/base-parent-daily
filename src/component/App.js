import React, { Component } from 'react';
import './App.css';
import BaseLayout from './BaseLayout'
import ParentComponent from './ParentComponent'
import Header from './Header'
import Footer from './Footer'
import ChildComponent from './ChildComponent'
import DisplayComponent from './DisplayComponent'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BaseLayout></BaseLayout>
        <Header />
        <ParentComponent />
        <Footer />
      </div>
    );
  }
}

export default App;
