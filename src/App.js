import './App.scss';
import NarBar from "./components/NarBar";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import PortfoliosPage from "./Pages/PortfoliosPage";
import BlogsPage from "./Pages/BlogsPage";
import ContactPage from "./Pages/ContactPage";
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <div className="sideBar">
            <NarBar/>
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
