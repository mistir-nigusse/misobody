import {
  faCoffee,
  faSearch,
  faUser,
  faShoppingCart,
  faHeart,
  facare
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { rightDrawerSlice } from "../../slices/right_drawer";
import { useDispatch, useSelector } from "react-redux";

const BottomNav = () => {
  const searchIcon = <FontAwesomeIcon icon={faSearch} size="lg" />;
  const cartIcon = <FontAwesomeIcon icon={faShoppingCart} size="lg" />;
  const wishlistIcon = <FontAwesomeIcon icon={faHeart} size="lg" />;
  const profileIcon = <FontAwesomeIcon icon={faUser} size="lg" />;
const isUserLogged = useSelector(state => state.login.isUserLogged)
  const actions = rightDrawerSlice.actions;
  const dispatch = useDispatch();
  const numberOfProductsInCart = useSelector(
    (state) => state.cart.cartItems.length
  );
  const numberOfProductsInWishlist = useSelector(
    (state) => state.wishlist.products.length
  );

  const showRightDrawer = (type) => {
    dispatch(actions.showDrawer());
    dispatch(actions.setType(type));
    document.body.style.overflow = "hidden";
  };

  return (
    <div className="bottom-nav">
      <div
        className="nav-item"
        onClick={() => {
          showRightDrawer("search");
        }}
      >
        <div className="icon">{searchIcon}</div>
        <div className="text">Search</div>
      </div>
      {/* <div
        className="nav-item"
        onClick={() => {
          if(isUserLogged) {
            showRightDrawer('profile')
          }
          else {
               showRightDrawer('login')
          }
        }}
      >
        {" "}
        <div className="icon">{profileIcon}</div>
        <div className="text">Profile</div>
      </div>
      <div
        className="nav-item"
        onClick={() => {
          showRightDrawer("wishlist");
        }}
      >
        {" "}
        <div className="icon">
          {wishlistIcon}
          <div className="badge">{numberOfProductsInWishlist}</div>
        </div>
        <div className="text">Wishlist</div>
      </div>
      <div
        className="nav-item"
        onClick={() => {
          showRightDrawer("cart");
        }}
      >
        {" "}
        <div className="icon">
          {cartIcon}
          <div className="badge">{numberOfProductsInCart}</div>
        </div>
        <div className="text">Cart</div>
      </div> */}
    </div>
  );
};
export default BottomNav;
