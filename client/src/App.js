import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import {observer} from "mobx-react-lite";

const App = observer(() => {
  return (
    <div className="App">
        <BrowserRouter>
            <NavBar />
          <AppRouter/>
            <Footer />
        </BrowserRouter>
    </div>
  );
});

export default App;
