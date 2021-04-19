import { Modal, Button, Select } from "antd";
import { useContext ,useState} from "react";
import { StoreContext } from "../store"
import { CartIcon } from "./Icons";
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../utils/constants";

const { Option } = Select;

 function CartModal({ isModalVisible, toggleModal }) {
   const { state: { cartItems }, dispatch } = useContext(StoreContext);
   const handleCancel = () => toggleModal(!isModalVisible);
   const addToCart = (product, qty,Size) => {
      dispatch({
         type: CART_ADD_ITEM,
         payload: {
            id: product.id,
            name: product.name,
            image: product.image,
            price: product.price,
            countInStock: product.countInStock,
            qty,
            Size,
         },
      });
   };

   const removeFromCart = (productId) => {
      dispatch({ type: CART_REMOVE_ITEM, payload: productId });
   };

   const getTotalPrice = () => {
      return (cartItems.length > 0) ?
         cartItems.reduce((sum, item) => sum + item.price * item.qty, 0)
         : 0;
   }

   return (
      //<Modal
      //   title="Shopping Bag"
      // visible={isModalVisible}
      // onCancel={handleCancel}
      // footer={null}
      //>
      <>
      <hr className="hr-line-productdetail" />
      <div className="cart-title-bg">
       <p className="cart-title">Shopping Bag</p>
      </div>
      <div className="cart-detail">
         {cartItems.length === 0 ? (
            <div>Cart is empty</div>
         ) : (
            cartItems.map(item => (
               <li key={item.id} className="cart-item">
                  <div className="cart-image">
                     <img src={item.image} alt={item.name} />
                  </div>
                  <div className="cart-item-content">
                     <div className="cart-name">{item.name}</div>
                    <div className="cart-size">{item.Size}</div>
                     <div className="cart-qty">
                        Qty: {"  "}
                        <Select
                           defaultValue={item.qty}
                           className="select-style"
                           onChange={(val) => addToCart(item, val)}
                        >
                           {[...Array(item.countInStock).keys()].map((x) => (
                              <Option key={x + 1} value={x + 1}>
                                 {x + 1}
                              </Option>
                           ))}
                        </Select>
                     </div>
                  </div>
                  <div className="cart-item-end">
                     <div className="cart-price">
                        ${item.price * item.qty}    
                     </div>
                     <div className="cart-item-delete" onClick={()=>removeFromCart(item.id)}>
                        x
                     </div>
                  </div>
               </li>
            ))
         )}
         </div>
         <hr className="hr-line-total" />
         <div className="cart-total-price-wrap">
           TOTAL：
            <div className="cart-total-price">${getTotalPrice()}</div>
         </div>
         <hr className="hr-line-total-btn" />
         <a href="https://www.ifchic.com/tw/designers/288-jo-malone">
         <Button
            className="cart-modal-btn"
            type="primary"
         >
            <span style={{ marginLeft: 12 }}>CHECK OUT</span>
         </Button>
         </a>
         </>
      //</Modal>
   );
}

export default CartModal;