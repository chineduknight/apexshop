import React from "react";
import { Global } from "@emotion/core";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import __globalCss from "styles/__global.css";
import store from "redux/store";
import Pages from "pages";
import Footer from "components/Footer";
import { Container } from "react-bootstrap";
import Header from "components/Header";

const App = () => (
  <Provider store={store}>
    <Router>
      <Global styles={__globalCss} />
      <Header />
      <main className="py-3">
        <Container>
          <Pages />
        </Container>
      </main>
      <Footer />
    </Router>
  </Provider>
);

export default App;
