import './App.css';
import Blogs from './components/Blogs/Blog';
import Brands from './components/Brands/Brands';
import Analytics from './components/DataAnalytics/Analytics';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Infrastructure from './components/InfraStructure/InfraStructure';
import Customers from './components/OurCustomer/Customer';
import Testimonials from './components/OurTestimonials/Testimonials';
import Petran from './components/Petran/Petran';
import Products from './components/Products/Products';
import ServiceProvider from './components/ServiceProvider/ServiceProvider';
import Visual from './components/VisualInspection/Visual';

function App() {
  return (
    <div className="App">
     <Header/>
      <Home/>
      <ServiceProvider/>
      <Infrastructure/>
      <Visual/>
      <Analytics/>
      <Petran/>
      <Products/>
      <Customers/>
      <Testimonials/>
      <Brands/>
      <Blogs/>
     <Footer/>
    </div>
  );
}

export default App;
