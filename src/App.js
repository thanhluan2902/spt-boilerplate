import './App.css';
import NavBar from './components/navBar/NavBar';
import WorkList from './components/works/WorkList';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="themed-container wrap">
                {/* ----------- NAV BAR ---------- */}
                <NavBar />
                <WorkList />
            </div>
        </Router>
    );
}

export default App;

