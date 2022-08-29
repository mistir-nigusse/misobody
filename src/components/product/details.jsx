import {
  faShoppingCart,
  faHeart,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { productSlice } from "../../slices/product";
import { cartSlice } from "../../slices/cart";
import { wishlistSlice } from "../../slices/wishlist";
import { useEffect, useState } from "react";
import axios from "axios";
import { url, url2 } from "../../utils/url";
import { toast } from "react-toastify";
import { CirclePicker } from "react-color";
import Rating from "@material-ui/lab/Rating";
//import { useTranslation } from "react-i18next";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { rightDrawerSlice } from "../../slices/right_drawer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./detaile.scss";
import { useNavigate } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CForm,
  CLabel,
  CTextarea,
  CFormGroup,
} from "@coreui/react";

const searchIcon = <FontAwesomeIcon icon={faHeart} />;
const shoppingCartIcon = <FontAwesomeIcon icon={faShoppingCart} />;

// component that shows a detailed description of a product
const Details = (Product) => {
  // const { t } = useTranslation();
  const rightIcon = <FontAwesomeIcon icon={faArrowRight} size="md" />;
  const product = useSelector((state) => state.product.product);
  const dispatch = useDispatch();
  const history=useNavigate();
  const productActions = productSlice.actions;
  const cartActions = cartSlice.actions;
  const wishlistActions = wishlistSlice.actions;
  const pageClicked = useSelector((state) => state.product.pageClicked);
  const isUserLogged = useSelector((state) => state.login.isUserLogged);
  const rightDrawerActions = rightDrawerSlice.actions;
  const [success, setSuccess] = useState(false);
  const [loaddata, setloaddata] = useState("");
  const [detail, setDetail] = useState({});
  const getTotalPrice = () => {
    let total = 0;

    total += Math.round((product.Price / 55) * 100) / 100;

    return total;
  };
  const showRightDrawer = (type) => {
    dispatch(rightDrawerActions.showDrawer());
    dispatch(rightDrawerActions.setType(type));
    document.body.style.overflow = "hidden";
  };

  const sellerDetail = () => {
    const id = product.uploadedBy;
    const query = `${url2}user-view-productById/${id}`;
    const query2 = `${url2}user-view-productById/${id}`;
    axios.get(query).then((response) => {
      const result = response.data.seller;
      result.map((data) => {
        setDetail(data);
      });
    });
    axios.get(query2).then((response) => {
      console.log(response.data.result[0].fileName);
      setloaddata(response.data.result[0].fileName);
    });
  };
  console.log(Product.Product);

  const redirect = path => {
    history(path);
  };
  return (
    <div className="detail-header">
      <div className="detail-title">{Product.Product.name}</div>
      <div className="detail-price">${Product.Product.price}</div>
      <div className="productDetail">
        

        
         <div className="detail-description" style={{ whiteSpace: "pre-line" }}> {Product.Product.description}</div>
        
        
        
      </div>
      < div className="amazon-btn">
    
          <a href={Product.Product.url}>
            <button className="button" >{shoppingCartIcon} Buy on amazon</button>
            {/* <div className="product-btn-content">
            {shoppingCartIcon} Buy on Amazon
          </div> */}
          </a>
          </div>
        
          
          <div > 
          Don't have access to amazon? 
          <span><button  className="button" 
            onClick={() => {
                redirect("/contactWithUs");
              }} 
            >
                Contact us
            </button></span>  
          </div>

      {/* <button className="seller-detail mb-4" style={{borderRadius:"30px",borderColor:"yellow"}}
         onClick={()=>
         {
           setSuccess(true)
           sellerDetail()
         }}>
          View Seller</button> */}

      {/* ///////////////////////////seller detail//////////////////////////////////       */}
    </div>
  );
};

export default Details;
