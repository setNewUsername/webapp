import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <NavBar />
          <AppRouter/>
            <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
