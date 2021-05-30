import { useState, useEffect } from "react";
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

const EditPackages = () => {
  const [deals, setDeals] = useState([]);

  useEffect(() => {
    instance.post("/packages").then((res) => {
      setDeals(res.data);
    });
  }, []);

  const hanleDecrementQuantity = (id, currentQuantity) => {
    if (currentQuantity >= 1) {
      const newQuantity = currentQuantity - 1;
      instance
        .post("/edit-package", { id: id, newQuantity: newQuantity })
        .then((res) => {
          if (res.status === 200) {
            const copyOfCurrentDeals = [...deals];
            const indexToEdit = copyOfCurrentDeals.findIndex(
              (deal) => deal._id === id
            );
            copyOfCurrentDeals[indexToEdit].quantity = newQuantity;
            setDeals(copyOfCurrentDeals);
          }
        });
    }
  };

  const handleIncrementQuantity = (id, currentQuantity) => {
    const newQuantity = currentQuantity + 1;
    instance
      .post("/edit-package", { id: id, newQuantity: newQuantity })
      .then((res) => {
        if (res.status === 200) {
          const copyOfCurrentDeals = [...deals];
          const indexToEdit = copyOfCurrentDeals.findIndex(
            (deal) => deal._id === id
          );
          copyOfCurrentDeals[indexToEdit].quantity = newQuantity;
          setDeals(copyOfCurrentDeals);
        }
      });
  };

  return (
    <div>
      {deals.map((deal) => {
        return (
          <div>
            <p>Deal ID: {deal._id}</p>
            <p>Destination: {deal.name}</p>
            <p>From: {deal.fromDate}</p>
            <p>From: {deal.toDate}</p>
            <p>Quantity: {deal.quantity}</p>
            <MyButton
              color="red"
              onClick={() => hanleDecrementQuantity(deal._id, deal.quantity)}
            >
              Decrement Quantity
            </MyButton>

            <MyButton
              color="blue"
              onClick={() => {
                handleIncrementQuantity(deal._id, deal.quantity);
              }}
            >
              Increment Quantity
            </MyButton>
          </div>
        );
      })}
    </div>
  );
};

export default EditPackages;
