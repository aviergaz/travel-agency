import { useEffect, useState } from "react";
import instance from "../../api";
import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/core/styles';

const MyButton = styled(({ color, ...other }) => <Button {...other} />)({
  background: (props) =>
    props.color === 'red'
      ? 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
      : 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: (props) =>
    props.color === 'red'
      ? '0 3px 5px 2px rgba(255, 105, 135, .3)'
      : '0 3px 5px 2px rgba(33, 203, 243, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
  margin: 8,
});

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [haveAvailableOrders, setHaveAvailableOrders] = useState(false);

  useEffect(() => {
    instance.get("/orders").then((res) => {
      if (res.status === 200 && res.data) {
        setOrders(res.data);
      }
    });
  }, []);

  useEffect(() => {
    const approvedOrders = orders.filter((order) => {
      return order.status === "Pending";
    });

    if (approvedOrders.length > 0) {
      setHaveAvailableOrders(true);
    } else {
      setHaveAvailableOrders(false);
    }
  }, [orders]);

  const handleApproveDeal = async (id, status) => {
    if (id) {
      const orderUpdateResponse = await instance.put("/order-update", {
        id: id,
        status: status,
      });

      if (orderUpdateResponse.status === 200 && status === "Approved") {
        const order = orders.find((order) => {
          return order._id === id;
        });

        let newQuantity;
        if (order.packageQuantity >= 1) {
          newQuantity = order.packageQuantity - 1;
        } else {
          newQuantity = 0;
        }

        const editPackageResponse = await instance.post("/edit-package", {
          id: order.packageId,
          newQuantity: newQuantity,
        });
      }

      window.location.reload();
    }
  };

  return (
    <div>
      <h1>Current Orders:</h1>
      {haveAvailableOrders ? (
        orders.map((order) => {
          if (order.status === "Pending") {
            return (
              <div key={order._id}>
                <p>Order id: {order._id}</p>
                <p>First name: {order.firstName}</p>
                <p>Last name: {order.lastName}</p>
                <MyButton
                  color="blue"
                  onClick={() => handleApproveDeal(order._id, "Approved")}
                >
                  Confirm
                </MyButton>
                <MyButton
                  color="red"
                  onClick={() => handleApproveDeal(order._id, "Canceled")}
                >
                  Decline
                </MyButton>
              </div>
            );
          } else {
            return null;
          }
        })
      ) : (
        <h3>No orders yet...</h3>
      )}
    </div>
  );
};

export default Orders;
