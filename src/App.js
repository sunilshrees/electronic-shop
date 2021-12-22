import Navbar from './components/Navbar';
import './styles/app.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Product from '../src/pages/Product';
import Home from '../src/pages/Home';
import Item from './pages/Item';
import Cart from './pages/Cart';
import CartProvider from '../src/store/CartProvider';
import Footer from './components/Footer';
import CheckoutForm from './pages/CheckoutForm';

function App() {
    return (
        <Router>
            <CartProvider>
                <div className='App'>
                    <Navbar />
                    <Switch>
                        <Route path='/' exact component={Home} />
                        <Route path='/product' exact component={Product} />
                        <Route path='/product/:id' component={Item} />
                        <Route path='/cart' component={Cart} />
                        <Route path='/checkout' component={CheckoutForm} />
                    </Switch>
                    <Footer />
                </div>
            </CartProvider>
        </Router>
    );
}

export default App;
