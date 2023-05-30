
// Pages
import Home from '~/pages/home/Home';
import BarChart from '~/pages/Chart/BarChart';
import PieChart from '~/pages/Chart/PieChart';
import DonutChart from '~/pages/Chart/DonutChart';
import LineChart from '~/pages/Chart/LineChart';
import Login from '~/pages/Login';
import loginLayout from '~/components/loginLayout/loginLayout';

// Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/login', component: Login, layout: loginLayout},
    { path: '/barchart', component: BarChart },
    { path: '/piechart', component: PieChart},
    { path: '/donutchart', component: DonutChart},
    { path: '/linechart', component: LineChart},

];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
