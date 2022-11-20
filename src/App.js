import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MainPage from "./components/MainPage/MainPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HackerNews from "./components/NewsPage/HackerNews";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/main" element={<HackerNews />} />
        </Routes>
      </Router>

      <ToastContainer />
    </>
  );
};

export default App;
