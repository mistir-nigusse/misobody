import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { url, url2 } from "../../utils/url";
import axios from "axios";
import { categorySlice } from "../../slices/category";
import { Link } from "react-router-dom";
import { leftDrawerSlice } from "../../slices/left_drawer";
const DrawerContent = () => {
  const dispatch = useDispatch();
 
  const leftDrawerActions = leftDrawerSlice.actions;
  const subCategoryId="51"
const[categories,setCategories]=useState([])
  useEffect(() => {
    axios.get(`${url2}user-view-categorie`).then(
      (response) => {
        console.log(response);
        console.log("hello");
        // dispatch(productsActions.setIsLoading(false));
        // dispatch(productsActions.setProducts(response.data.product));
        setCategories(response.data.categorys);
      },
      (error) => {
        console.log(error);
      }
    );

  }, []);

  const closeLeftDrawer = () => {
    dispatch(leftDrawerActions.hideDrawer());
    document.body.style.overflow = "visible";
  };
  return (
    <div className="left-drawer-content">
        <div className="footer-links">
        <div
          className="item"
          onClick={() => {
            closeLeftDrawer();
          }}
        >
          <Link style={{ textDecoration: "none", color: "#666" }} to="/aboutus">
            About Miso body works
          </Link>
        </div>

        <div
          className="item"
          onClick={() => {
            closeLeftDrawer();
          }}
        >
          <Link
            style={{ textDecoration: "none", color: "#666" }}
            to="/contact"
          >
            Contact Us
          </Link>
        </div>

        <div
          className="item"
          onClick={() => {
            closeLeftDrawer();
          }}
        >
          <Link
            style={{ textDecoration: "none", color: "#666" }}
            to="/privacypolicy"
          >
            Privacy Policy
          </Link>
        </div>
{/* 
        <div
          className="item"
          onClick={() => {
            closeLeftDrawer();
          }}
        >
          <Link
            style={{ textDecoration: "none", color: "#666" }}
            to="/deliveryandreturn"
          >
            Delivery and Return
          </Link>
        </div>

        <div
          className="item"
          onClick={() => {
            closeLeftDrawer();
          }}
        >
          <Link
            style={{ textDecoration: "none", color: "#666" }}
            to="/termsandconditions"
          >
            Terms and Conditons
          </Link>
        </div>

        <div
          className="item"
          onClick={() => {
            closeLeftDrawer();
          }}
        >
          <Link style={{ textDecoration: "none", color: "#666" }} to="/pricing">
            Pricing
          </Link>
        </div>

        <div
          className="item"
          onClick={() => {
            closeLeftDrawer();
          }}
        >
          <Link style={{ textDecoration: "none", color: "#666" }} to="/faq">
            FAQ
          </Link>
        </div> */}
      </div>
     
    </div>
  );
};

export default DrawerContent;
