import { Route, Switch, Redirect } from "react-router-dom";
import Header from "../components/header";
import "./styles.css";
import Home from "../pages/home";
import Product from "../pages/product";
import ProductDetail from "../pages/product-detail";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/product" exact>
            <Product />
          </Route>
          <Route path="/product/:id">
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </>
  );
}
