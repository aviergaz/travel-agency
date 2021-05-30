import instance from "../../api";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { MenuItem, Select, FormControl, InputLabel } from "@material-ui/core";
import moment from "moment";
import './Deals.css';
const Deals = () => {
  const [deals, setDeals] = useState([]);
  const [sortByPrice, setSortByPrice] = useState(1);
  const [sortByDate, setSortByDate] = useState(1);
  const history = useHistory();

  useEffect(() => {
    instance.post("/packages").then((res) => {
      setDeals(res.data);
    });
  }, []);

  const handleSortByPrice = (e) => {
    setSortByPrice(e.target.value);
    let sortedByPrice;

    if (sortByPrice === 1) {
      sortedByPrice = deals.sort((a, b) => b.price - a.price);
    } else {
      sortedByPrice = deals.sort((a, b) => a.price - b.price);
    }

    setDeals(sortedByPrice);
  };

  const handleSortByDate = (e) => {
    setSortByDate(e.target.value);
    let sortedByDate;

    if (sortByDate === 1) {
      sortedByDate = deals.sort(
        (a, b) => moment(b.fromDate) - moment(a.fromDate)
      );
    } else {
      sortedByDate = deals.sort(
        (a, b) => moment(a.fromDate) - moment(b.fromDate)
      );
    }

    setDeals(sortedByDate);
  };

  return (
    <>
    <div className="deals-div">
      <h1>EXPLORE OUR DEALS</h1>
      <div>
        <FormControl>
          <InputLabel>By price</InputLabel>
          <Select value={sortByPrice} onChange={handleSortByPrice}>
            <MenuItem value={1}>Lower to higher</MenuItem>
            <MenuItem value={2}>Higher to lower</MenuItem>
          </Select>
        </FormControl>

        <FormControl>
          <InputLabel>By date</InputLabel>
          <Select value={sortByDate} onChange={handleSortByDate}>
            <MenuItem value={1}>Sooner to later</MenuItem>
            <MenuItem value={2}>Later to sooner</MenuItem>
          </Select>
        </FormControl>
      </div>
      </div>

      <section className='destinations'>
      <div className='grid'>
      {
      deals.map((deal) => {
        return (
          
            <div>
              <img src={deal.imageStr} alt='destination-1' />
              <h3>{deal.name}</h3>
              <p><strong>Price:</strong> {deal.price}$</p>
              <p><strong>Quantity:</strong> {deal.quantity}</p>
              <p><strong>From:</strong> {deal.fromDate}</p>
              <p><strong>To:</strong> {deal.toDate}</p>
              <button className="btn-grad" onClick={() => history.push(`/checkout/${deal._id}`)}>
                Book now
              </button>
            </div>
        );
      })
      }
      </div>
       </section>
       
    </>
  );
};

export default Deals;
