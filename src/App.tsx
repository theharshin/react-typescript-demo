import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router";
import Header from "./components/layout/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </>
  );
}

export default App;
