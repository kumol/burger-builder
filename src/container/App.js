import './App.css';
import Layout from '../hoc/Layouts/Layout';
import BurgerBuilder from "../container/BurgerBuilder/BurgerBuilder";
function App() {
  return (
    <div>
      <Layout>
        <BurgerBuilder/>
      </Layout>
    </div>
  );
}

export default App;
