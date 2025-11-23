import { useSearchParams, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import axios from "axios";
import { ShopContext } from "../context/ShopContext";

const Verify = () => {
  const { backendUrl, token, cartItems, products, delivery_fee, getCartAmount, setCartItems } =
    useContext(ShopContext);

  const [params] = useSearchParams();
  const success = params.get("success");
  const navigate = useNavigate();

  useEffect(() => {
    verifyPayment();
  }, []);

  const verifyPayment = async () => {
  try {
    if (!token) return;

    const savedAddress = JSON.parse(localStorage.getItem("address")) || {
      demo: "Stripe Demo Address"
    };

    let orderItems = [];
    Object.keys(cartItems).forEach(itemId => {
      Object.keys(cartItems[itemId]).forEach(size => {
        const itemInfo = products.find(p => p._id === itemId);
        if (itemInfo) {
          orderItems.push({
            _id: itemInfo._id,
            name: itemInfo.name,
            price: itemInfo.price,
            image: itemInfo.image,
            size,
            quantity: cartItems[itemId][size]
          });
        }
      });
    });

    const orderData = {
      success: success === "true",
      items: orderItems,
      amount: getCartAmount() + delivery_fee,
      address: savedAddress
    };

    const res = await axios.post(
      backendUrl + "/api/order/verifyStripe",
      orderData,
      { headers: { token } }
    );

    if (res.data.success) {
      setCartItems({});
      localStorage.removeItem("address");
      navigate("/orders");
    } else {
      navigate("/orders");
    }
  } catch (err) {
    console.error(err);
  }
};


  return (
    <h1 style={{ padding: "60px", textAlign: "center" }}>
      Verifying Payment…
    </h1>
  );
};

export default Verify;
