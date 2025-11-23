import { useEffect, useContext } from "react";
import axios from "axios";
import { ShopContext } from "../context/ShopContext";
import { useSearchParams, useNavigate } from "react-router-dom";

const Verify = () => {
  const { backendUrl, token, cartItems, products, setCartItems, delivery_fee, getCartAmount } =
    useContext(ShopContext);

  const [searchParams] = useSearchParams();
  const success = searchParams.get("success");
  const navigate = useNavigate();

  useEffect(() => {
    verifyPayment();
  }, []);

  const verifyPayment = async () => {
    try {
      if (!token) return;

      let orderItems = [];
      Object.keys(cartItems).forEach(itemId => {
        Object.keys(cartItems[itemId]).forEach(size => {
          let itemInfo = products.find(p => p._id === itemId);
          if (itemInfo) {
            orderItems.push({
              ...itemInfo,
              size,
              quantity: cartItems[itemId][size]
            });
          }
        });
      });

      let orderData = {
        success: success === "true",
        items: orderItems,
        amount: getCartAmount() + delivery_fee,
        address: { demo: "Stripe Demo Address" }
      };

      const response = await axios.post(
        backendUrl + "/api/order/verifyStripe",
        orderData,
        { headers: { token } }
      );

      if (response.data.success) {
        setCartItems({});
        navigate("/orders");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return <h2 style={{ padding: 40 }}>Payment Completed</h2>;
};

export default Verify;
