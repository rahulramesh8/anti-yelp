import React, { Component } from "react";
import Header from "../../components/header/Header.component";
import Footer from "../../components/footer/Footer.component";
import Routes from "../../routes";

class App extends Component {
  render() {
    return (
      <div className="flex flex-column min-vh-100">
        <Header />
        <Routes />
        <Footer />
      </div>
    );
  }
}

export default App;
