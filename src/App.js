import './App.css';
import NavBar from './components/navBar/NavBar';
// import WorkList from './components/works/WorkList';
// import EditWork from './components/works/EditWork';
// import AddWork from './components/works/AddWork';
import routes from './Route';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

function App({ routes }) {
    const loadRoute = () => {
        routes.map((route) => {
            <Route exact={route.exact} path={route.path}>
                { route.main }
            </Route>
        })
    }

    return (
        <Router>
            <div className="themed-container wrap">
                <NavBar />
                <Switch>
                    {/* <Route exact path="/">
                        <WorkList />
                    </Route>
                    <Route path="/edit-work">
                        <EditWork />
                    </Route>
                    <Route path="/create-work">
                        <AddWork />
                    </Route> */}
                    { loadRoute }

                </Switch>
            </div>
        </Router>
    );
}

export default App;
