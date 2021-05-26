import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import ResponsiveContextProvider from "../provider/responsive-context-provider";
import Home from "../pages/home";
import Contact from "../pages/contact";
import Products from "../pages/Products";
import Header from "./header";
import Footer from "./footer";
import styles from "./app.scss";
import Product from "../pages/product";
import configureAppStore from "../store";
const store = configureAppStore();

const App = () => (
  <Provider store={store}>
    <ResponsiveContextProvider>
      <div className={styles.app}>
        <div className={styles.content}>
          <Router>
            <Header />
            <Switch>
              <Route path="/contact" component={Contact} exact />
              <Route path="/products/:productId" component={Product} />
              <Route path="/products" component={Products} />
              <Route path="/" component={Home} exact />
            </Switch>
          </Router>
        </div>
        <Footer />
      </div>
    </ResponsiveContextProvider>
  </Provider>
);

export default App;
