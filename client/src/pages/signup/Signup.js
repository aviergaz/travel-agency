import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@material-ui/core";
import { useState } from "react";
import instance from "../../api";
import { useHistory } from "react-router-dom";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    instance
      .post("/signup", {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        password: password,
        type: type,
      })
      .then((res) => {
        if (res.status === 200) {
          history.push("/login");
        }
      });
  };

  return (
    <div>
      <h1>Please sign up</h1>

      <form onSubmit={handleSubmit}>
        <FormControl>
          <InputLabel>User Type</InputLabel>
          <Select
            value={type}
            onChange={(e) => {
              setType(e.target.value);
            }}
          >
            <MenuItem value={1}>Agent</MenuItem>
            <MenuItem value={2}>Customer</MenuItem>
          </Select>
        </FormControl>

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
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
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
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <Button variant="contained" type="submit">
          Sign up
        </Button>
      </form>
    </div>
  );
};

export default SignUp;
