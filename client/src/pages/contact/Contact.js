import { useState } from "react";
import instance from "../../api";
import './Contact.css';
import { TextField, Button } from "@material-ui/core";
const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loader, setLoader] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await instance.post("/contact", {
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      message: message,
    });
    alert("Your message has been sent!");
  };
// return(

// <div>
// <h1>Contact us</h1>

// <form onSubmit={handleSubmit}>
//   <TextField
//     placeholder="Your name"
//     value={firstName}
//     onChange={(e) => {
//       setFirstName(e.target.value);
//     }}
//   />

//   <TextField
//     value={lastName}
//     onChange={(e) => {
//       setLastName(e.target.value);
//     }}
//     placeholder="Your last name"
//   />

//   <TextField
//     value={phone}
//     onChange={(e) => {
//       setPhone(e.target.value);
//     }}
//     placeholder="Your phone"
//   />

//   <TextField
//     value={message}
//     onChange={(e) => {
//       setMessage(e.target.value);
//     }}
//     placeholder="Your message"
//   />

//   <Button variant="contained" type="submit">
//     Submit
//   </Button>
// </form>

// <div>
//   <h2>Feel free to contact us at:</h2>
//   <p>
//     <strong>Email:</strong> Support@SCEtours.com
//   </p>
//   <p>
//     <strong>Phone: </strong> 053-1957843 
//     <br></br>
//     <strong>Or: </strong> 08-6853469
//   </p>
// </div>
// </div>



// );
   return (
   
<form className="form" onSubmit={handleSubmit}>
      <h1>Contact Us 🤳</h1>

      <label>Name</label>
      <input
         placeholder="Your name"
         value={firstName}
         style={{ width: '450px' }}
         onChange={(e) => {
         setFirstName(e.target.value);
        }}
      />

   <label>Last Name</label>
      <input
      value={lastName}
      style={{ width: '450px' }}

           onChange={(e) => {
             setLastName(e.target.value);
           }}
           placeholder="Your last name"
      />

<label>Phone</label>
      <input
    style={{ width: '450px' }}
     value={phone}
     onChange={(e) => {
       setPhone(e.target.value);;
     }}
     placeholder="Your phone"
      />
    
      <label>Message</label>
      <textarea
      style={{ width: '450px' }}
         value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              placeholder="Your message"
      ></textarea>

      <button
        type="submit"
        style={{ width: '150px' ,background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
      >
        Submit
      </button>
   
    </form>
  );
};

export default Contact;







