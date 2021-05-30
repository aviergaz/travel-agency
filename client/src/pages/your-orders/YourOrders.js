import { useCookies } from "react-cookie";
import instance from "../../api";
import { useEffect, useState } from "react";
import './YourOrders.css';
import Receipt from "./Receipt";

const YourOrders = () => {
  const [cookies] = useCookies();
  const [myOrders, setMyOrders] = useState([]);

  useEffect(() => {
    if (cookies.token) {
      instance.get("/orders").then((res) => {
        const myOrders = res.data.filter((order) => {
            return order.phone === cookies.token.phone;
        })

        setMyOrders(myOrders);
      });
    }
  }, [cookies]);

 
  return (
    <div>
    {myOrders.length > 0 ? myOrders.map((order) => {
        return (
          <Receipt key={order._id}
            dealName={order.dealName}
            dealPrice={order.dealPrice}
            fromDate={order.fromDate}
            toDate={order.toDate}
            status={order.status}
          >

          </Receipt>
            // <div key={order._id}>
            //   <h1>Your travel to: {order.dealName}</h1>
            //   <p>Total price: {order.dealPrice}</p>
            //   <p>from: {order.fromDate}</p>
            //   <p>to: {order.toDate}</p>
            //   <p>Status: {order.status}</p>
            // </div>
        )
    }): <h1>No orders yet</h1>}
    </div> 
      
      );
};

export default YourOrders;
