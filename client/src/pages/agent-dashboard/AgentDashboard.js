import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useHistory } from "react-router-dom";
import { Dialog, TextField } from "@material-ui/core";
import { DatePicker } from "@material-ui/pickers";
import instance from "../../api";

import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

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


const AgentDashboard = () => {
  const [userData, setUserData] = useState({});
  const [packagePopupOpen, setPackagePopupOpen] = useState(false);

  // Packages states
  const [packageName, setPackageName] = useState("");
  const [packagePrice, setPackagePrice] = useState("");
  const [selectedFromDate, setSelectedFromDate] = useState(new Date());
  const [selectedToDate, setSelectedToDate] = useState(new Date());
  const [packageQuantity, setPackageQuantity] = useState("");
  const [packageImage, setPackageImage] = useState();

  const [cookies] = useCookies();
  const history = useHistory();

  useEffect(() => {
    if (cookies.token) {
      setUserData(cookies.token);
    } else {
      // in case the user is not logged in
      history.push("/");
    }
  }, []);

  const handleAddPackage = (e) => {
    e.preventDefault();
    instance
      .post("/add-package", {
        name: packageName,
        price: packagePrice,
        fromDate: selectedFromDate,
        toDate: selectedToDate,
        quantity: packageQuantity,
        imageStr: packageImage
      })
      .then((res) => {
        setPackagePopupOpen(false);
      });
  };
  
  const checkUser = (type) => {
    if (type === "1"){
      return (
        <div>
        {userData.firstName ? <h1>Welcome {userData.firstName}</h1> : null }
        <MyButton color="red"
          onClick={() => {
            setPackagePopupOpen(!packagePopupOpen);
          }}
        >
          Add new package
        </MyButton>
  
        <MyButton
        color="red"
         onClick={() => history.push("/agent-dashboard/orders")}>
          Track orders
        </MyButton>
  
        <MyButton 
        color="red"
        onClick={() => history.push("/agent-dashboard/edit-packages")}>
          Edit packages
        </MyButton>
  
        <Dialog
          open={packagePopupOpen}
          onClose={() => {
            setPackagePopupOpen(false);
          }}
        >
          <form onSubmit={handleAddPackage}>
            <TextField
              placeholder="Package name"
              value={packageName}
              onChange={(e) => {
                setPackageName(e.target.value);
              }}
            />
  
            <TextField
              placeholder="Package price"
              value={packagePrice}
              onChange={(e) => {
                setPackagePrice(e.target.value);
              }}
            />
  
            <TextField
              placeholder="Package quantity"
              value={packageQuantity}
              onChange={(e) => {
                setPackageQuantity(e.target.value);
              }}
            />
  
            <DatePicker
              label="From date"
              value={selectedFromDate}
              onChange={setSelectedFromDate}
              animateYearScrolling
              disablePast={true}
            />
  
            <DatePicker
              label="To date"
              value={selectedToDate}
              onChange={setSelectedToDate}
              animateYearScrolling
              disablePast={true}
            />
  
            <TextField
              type="file"
              accept='*'
              onChange={
                (e) => {
                  let fr = new FileReader();
                  
                  fr.readAsDataURL(e.target.files[0]);
                  fr.onload = () => {
                    setPackageImage(`${fr.result}`);
                  }
                }
              }
            />
            
            <MyButton type="submit" variant="outlined" color="blue">
              Add package
            </MyButton>
          </form>
        </Dialog>
      </div>
      );
    }

    else if (type === "2"){
      return (<h1>You are not authorized to this page!</h1>);
    }
  }

  return (
    <div>
      {        console.log(userData)
}
      {
      checkUser(userData.userType)}</div>
    
   
  );
};

export default AgentDashboard;
