
// Pages
import Home from '~/pages/home/Home';
import BarChart from '~/pages/Chart/BarChart';
import PieChart from '~/pages/Chart/PieChart';
import DonutChart from '~/pages/Chart/DonutChart';
import LineChart from '~/pages/Chart/LineChart';
import { Bar } from 'recharts';

// Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/barchart', component: BarChart },
    { path: '/piechart', component: PieChart},
    { path: '/donutchart', component: DonutChart},
    { path: '/linechart', component: LineChart},

];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
