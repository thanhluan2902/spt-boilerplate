import './App.css';
import NavBar from './components/navBar/NavBar';
import Header from './components/header/Header';
import WorkList from './components/works/WorkList';
import EditWork from './components/works/EditWork';
import AddWork from './components/works/AddWork';


import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="themed-container wrap">
                <NavBar />
                <div className="noPadding right_wrap">
                    <Header />

                    <Switch>
                        <Route exact path="/">
                            <WorkList />
                        </Route>
                        <Route path="/edit-work">
                            <EditWork />
                        </Route>
                        <Route path="/create-work">
                            <AddWork />
                        </Route>

                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
