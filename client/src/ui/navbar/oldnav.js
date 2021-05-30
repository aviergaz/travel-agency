// import { Link, useHistory } from "react-router-dom";
// import { useCookies } from "react-cookie";
// import { useState, useEffect } from "react";


// const old = () => {
//   const [cookies, remove] = useCookies();
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const history = useHistory();
  
//   useEffect(() => {
//     if (cookies.token) {
//       setIsAuthenticated(true);
//     }
//   }, [cookies]);

//   return (
//     <nav>
//       <ul>
//         <Link to="/">Home</Link>
//         <Link to="/deals">Deals</Link>
//         <Link to="/about">About Us</Link>
//         <Link to="/contact">Contact Us</Link>
//         <Link to="/your-orders">Your Orders</Link>
//         {!isAuthenticated ? (
//           <Link to="/login">Login</Link>
//         ) : (
//           <div>
//             <Link to="/agent-dashboard">Dashboard</Link>
//             <button onClick={() => {
//               remove('token', "");
//               history.push('/');
//             }}>Logout</button>
//           </div>
//         )}
//       </ul>
//     </nav>
//   );
// };

// export default old;
