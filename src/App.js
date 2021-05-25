import './App.scss';
import NarBar from "./components/NarBar";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import PortfoliosPage from "./Pages/PortfoliosPage";
import BlogsPage from "./Pages/BlogsPage";
import ContactPage from "./Pages/ContactPage";
import {Switch, Route} from 'react-router-dom';
import {useState} from "react";

function App() {
    const [navToggle, setNavToggle] = useState(false);

    const navClick = () => {
        setNavToggle(!navToggle)
    }

  return (
    <div className="App">
        <div className={`sideBar ${navToggle ? 'nav-toggle': ''} `}>
            <NarBar/>
        </div>
        <div className="nav-btn" onClick={navClick}>
            <div className="line-1"/>
            <div className="line-2"/>
            <div className="line-3"/>

        </div>
        <div className="main-content">
            <div className="content">
                <Switch>
                    <Route path="/" exact>
                        <HomePage/>
                    </Route>
                    <Route path="/about" exact>
                        <AboutPage/>
                    </Route>
                    <Route path="/portfolios" exact>
                        <PortfoliosPage/>
                    </Route>
                    <Route path="/blog" exact>
                        <BlogsPage/>
                    </Route>
                    <Route path="/contact" exact>
                        <ContactPage/>
                    </Route>
                </Switch>
            </div>

        </div>
    </div>
  );
}


export default App;
