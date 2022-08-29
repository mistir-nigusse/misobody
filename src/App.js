import logo from "./logo.svg";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Header from "./components/navbar/navbar";
import PrivacyPolicy from "./components/footer/privacy_policy";
import Home from "./components/home/home";
import { Routes, Route, Router } from "react-router-dom";
import Footer from "./components/footer/footer";
import ProductPage from "./components/product/product_page";
import Categorie from "./components/category/category";
import LeftDrawer from "./components/left_drawer/left_drawer";
import SearchPage from "./components/search/search_page";
import Breadcrumb from './components/utils/breadcrumb'
import Contactus from "./components/contactUS/contactUs";
import Contact from "./components/contactUS/contact";
import BottomNav from "./components/bottom_nav/bottom_nav";
import AboutPage from "./components/footer/about_page";
function App() {
    const showLeftDrawer = useSelector((state) => state.leftDrawer.isOpen);
  return (
    <div className="root">
      <Header />
      <Breadcrumb />
      {showLeftDrawer && <LeftDrawer />} 
   
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/product/:id" element={<ProductPage />} />
          <Route exact path="/categories/:name" element={<Categorie />} />
          <Route exact path="/search/:name" element={<SearchPage />} />
          <Route exact path="/contactWithUs" element={<Contactus/>} />
          <Route exact path="/privacypolicy" element={<PrivacyPolicy/>} />
          <Route exact path="/aboutus" element={<AboutPage/>} />
          <Route exact path="/contact" element={<Contact/>} />
          {/* <Route path="/privacypolicy">
              <>
                <div className="application">
                  <Helmet>
                    <meta charSet="utf-8" />
                    <title>Privacy Policy</title>
                    <meta
                      name="description"
                      content="View Miso body works' privacy policy "
                    />
                    <link rel="canonical" href="http://mysite.com/example" />
                  </Helmet>
                </div>
                <PrivacyPolicy />
              </>
            </Route>
            <Route path="/contactus">
              <>
                <div className="application">
                  <Helmet>
                    <meta charSet="utf-8" />
                    <title>Contact us</title>
                    <meta
                      name="description"
                      content="View contact information"
                    />
                    <link rel="canonical" href="http://mysite.com/example" />
                  </Helmet>
                </div>
                <ContactUs />
              </>
            </Route> */}
        </Routes>
      </main>
      <Footer />
     
    </div>
  );
}

export default App;
