import logo from "./logo.svg";
import "./App.css";
import { useSelector } from "react-redux";
import Login from "./components/Login";
import Products from "./components/Products";
import Cart from "./components/Cart";

function App() {
  const isAuthenticated = useSelector((state) => state);
  return (
    <div className="App">
      <h1>Welcome to Redux Store</h1>
      {!isAuthenticated.auth.isAuthenticated ? <Login /> : <Products />}
      {isAuthenticated.auth.isAuthenticated && <Cart />}
    </div>
  );
}

export default App;
