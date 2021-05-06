import './App.css';
import Layout from '../hoc/Layouts/Layout';
import BurgerBuilder from "../container/BurgerBuilder/BurgerBuilder";
import Checkout from './Checkout/Checkout';
import {Route,Switch} from "react-router-dom"
import Orders from './Orders/Orders';
function App() {
  return (
    <div>
      <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout}/>
            <Route path="/orders" component={Orders}/>
            <Route path='/' exact component={BurgerBuilder}/>
          </Switch>
      </Layout>
    </div>
  );
}

export default App;
