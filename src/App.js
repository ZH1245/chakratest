import { Switch, Route } from "react-router-dom";
import About from "./components/About";
import Cart from "./components/Cart";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import Products from "./components/Product";
import ProductDetails from "./components/ProductDetails";
import Signup from "./components/Signup";
function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/products" component={Products} />
      <Route exact path="/product/:id" component={ProductDetails} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/about" component={About} />
      <Route exact path="/cart" component={Cart} />
      {/* <Route exact path="" component={}/> */}
      {/* <Route exact path="" component={}/> */}
    </Switch>
  );
}

export default App;
