import WorkList from './components/works/WorkList';
import EditWork from './components/works/EditWork';
import AddWork from './components/works/AddWork';

const routes = [
    {
        path : '/',
        exact : true,
        main : () => <WorkList />
    },
    {
        path : '/add-work',
        exact : false,
        main : () => <AddWork />
    },
    {
        path : '/edit-work',
        exact : false,
        main : ({match}) => <EditWork match={match} />
    }
];

export default routes;