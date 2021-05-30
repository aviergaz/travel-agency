import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import instance from "../../api";
import { TextField, Button } from "@material-ui/core";

const Checkout = () => {
  const [deal, setDeal] = useState({});
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expires, setExpires] = useState("");
  const [orderFinshed, setOrderFinished] = useState(false);

  const params = useParams();

  useEffect(() => {
    instance
      .post("/packages", {
        _id: params.id,
      })
      .then((res) => {
        setDeal(res.data[0]);
      });
  }, []);

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    instance
      .post("/new-order", {
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        address: address,
        creditCardNumber: cardNumber,
        creditCardExperationDate: expires,
        dealName: deal.name,
        dealPrice: deal.price,
        fromDate: deal.fromDate,
        toDate: deal.toDate,
        packageId: deal._id,
        packageQuantity: deal.quantity
      })
      .then((res) => {
        if (res.status === 200) {
          setOrderFinished(true);
        }
      });
  };

  return (
    <div>
      {orderFinshed ? (
        <h1>Thank you For Your Order !!</h1>
      ) : (
        <div>
          <h1>Checkout</h1>
          <h3>Deal information:</h3>
          <p><strong>Deal name: </strong>{deal.name}</p>
          <p><strong>Deal Price: </strong> {deal.price}$</p>
          <p><strong>From: </strong> {deal.fromDate}</p>
          <p><strong>To: </strong> {deal.toDate}</p>

          <h3>Your information:</h3>
          <form onSubmit={handleOrderSubmit}>
            <TextField
              placeholder="First name"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />

            <TextField
              placeholder="Last name"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />

            <TextField
              placeholder="Phone"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />

            <TextField
              placeholder="Address"
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />

            <TextField
              placeholder="Credit card number"
              value={cardNumber}
              onChange={(e) => {
                setCardNumber(e.target.value);
              }}
            />

            <TextField
              placeholder="Credit card expiration date"
              value={expires}
              onChange={(e) => {
                setExpires(e.target.value);
              }}
            />

            <Button type="submit" variant="contained">
              Place order
            </Button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Checkout;
