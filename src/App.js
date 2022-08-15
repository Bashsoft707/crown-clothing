import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./routes/home/home.component";
import { Navigation } from "./routes/navigation/navigation.component";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
