import './App.css';
import NavBar from './components/navBar/NavBar';
import WorkList from './components/works/WorkList';
import EditWork from './components/works/EditWork';
import AddWork from './components/works/AddWork';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

function App() {

    const routes = [
        {
            path: '/',
            exact: true,
            main: ({ match }) => <WorkList match={match} />
        },
        {
            path: '/add-work',
            exact: false,
            main: () => <AddWork />
        },
        {
            path: '/edit-work/:id',
            exact: false,
            main: ({ match }) => <EditWork match={match} />
        }
    ];

    return (
        <Router>
            <div className="themed-container wrap">
                <NavBar />
                <Switch>
                    {
                        routes.map((route, index) => {
                            return <Route
                                exact={route.exact}
                                path={route.path}
                                key={index}
                            >
                                {route.main}
                            </Route>
                        })
                    }

                </Switch>
            </div>
        </Router>
    );
}

export default App;
