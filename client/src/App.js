import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import {observer} from "mobx-react-lite";
import {useContext, useEffect, useState} from "react";
import {Context} from "./index";
import {check} from "./http/userAPI";
import {Spinner} from "react-bootstrap";

const App = observer(() => {
    const {user} = useContext(Context);
    const [loading, setLoading] = useState(true);

    //FIXME: Проверка авторизации
    useEffect(() => {
        setTimeout(() => {
            check().then(data => {
                console.log(data)
                user.setUser(true);
                user.setIsAuth(true);
            }).finally(()=> setLoading(false))
        }, 1000)
    }, []);

    if(loading) {
        return <Spinner animation="grow" />;
    }

    return (
        <div className="App">
            <BrowserRouter>
                <NavBar/>
                <AppRouter/>
                <Footer/>
            </BrowserRouter>
        </div>
    );
});

export default App;
