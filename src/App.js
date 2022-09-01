import { useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./routes/home/home.component";
import { Shop } from "./routes/shop/shop.component";
import { Navigation } from "./routes/navigation/navigation.component";
import { Authentication } from "./routes/authentication/authentication.component";
import { Checkout } from "./routes/checkout/checkout.component";
import { useDispatch } from "react-redux";
import { fetchCategoriesAsync } from "./store/category/category-action";

const App = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchCategoriesAsync());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="/auth" element={<Authentication />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
