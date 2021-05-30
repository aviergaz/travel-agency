import { Switch, Route } from "react-router-dom";
import { lazy } from "react";
import './App.css';
import AppNavbar from './ui/navbar/AppNavbar';

const Homepage = lazy(() => import("./pages/home/Home"));
const Deals = lazy(() => import("./pages/deals/Deals"));
const About = lazy(() => import("./pages/about/About"));
const Contact = lazy(() => import("./pages/contact/Contact"));
const Login = lazy(() => import("./pages/login/Login"));
const SignUp = lazy(() => import("./pages/signup/Signup"));
const AgentDashboard = lazy(() =>
  import("./pages/agent-dashboard/AgentDashboard")
);
const Checkout = lazy(() => import("./pages/checkout/Checkout"));
const Orders = lazy(() => import("./pages/orders/Orders"));
const EditPackages = lazy(() => import("./pages/edit-packages/EditPackages"));
const YourOrders = lazy(() => import("./pages/your-orders/YourOrders"));

const routes = [
  { path: "/", component: <Homepage />},
  { path: "/deals", component: <Deals /> },
  { path: "/about", component: <About /> },
  { path: "/contact", component: <Contact /> },
  { path: "/login", component: <Login /> },
  { path: "/sign-up", component: <SignUp /> },
  { path: "/agent-dashboard", component: <AgentDashboard /> },
  { path: "/checkout/:id", component: <Checkout /> },
  { path: "/agent-dashboard/orders", component: <Orders /> },
  { path: "/agent-dashboard/edit-packages", component: <EditPackages /> },
  { path: "/your-orders", component: <YourOrders /> },
];

function App() {
  return (
    <div>
      <AppNavbar />
      <Switch>
        {routes.map((route) => {
          return (
            <Route key={route.path} exact path={route.path}>
              {route.component}
            </Route>
          );
        })}
      </Switch>
    </div>
  );
}

export default App;
