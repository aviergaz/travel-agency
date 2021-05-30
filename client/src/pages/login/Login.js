import { TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useState } from "react";
import instance from "../../api";
import { useCookies } from "react-cookie";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cookies, setCookie] = useCookies();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    instance
      .post("/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        if (res.status === 200) {
          setCookie("token", res.data); // save the user object to cookies
          if (res.data.userType === "1") {
            history.push("/agent-dashboard");
          } else {
            history.push("/deals");
          }
        }
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          placeholder="Email"
          value={email}
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <TextField
          placeholder="Password"
          value={password}
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <Button variant="contained" type="submit">
          Submit
        </Button>
      </form>

      <p>
        Don't have an account? <Link to="/sign-up">Sign Up!</Link>
      </p>
    </div>
  );
};

export default Login;
