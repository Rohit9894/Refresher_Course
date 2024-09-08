import { useEffect, useState } from "react";
import { Feedback } from "../type";
import { getFeedback } from "../assets/api";
// import Rating from "../component/Rating";
import styles from "./feedback.module.css";
import Rating from "../component/Rating";
import { Link } from "react-router-dom";

const FeedBack = () => {
  const [data, setData] = useState<Feedback[]>([]);
  useEffect(() => {
    getFeedback().then((res) => setData(res));
  }, []);

  return (
    <div>
          <Link to="/">Give Feedback</Link>
      {data &&
        data.length &&
        data.map((item) => (
          <div className={styles.card}>
        <div>
        <h2>{item.resturant_name}</h2>
        <p>{item.address}</p>
        </div>
            <div className={styles.rating}>
              <label>Rating</label> :
              <Rating value={+item.overall_Rating} />
            </div>
            <div className={styles.rating}>
              <label>Taste</label> :
              <Rating value={+item.taste} />
            </div>
            <div className={styles.rating}>
              <label>Staff</label> :
              <Rating value={+item.staff_behaviour} />
            </div>
            <div className={styles.rating}>
              <label>Food Quality</label> :
              <Rating value={+item.food_quality} />
            </div>
            <p>
              <b>{item.name}</b>
              <p>{item.message}</p>
            </p>
          </div>
        ))}
    </div>
  );
};

export default FeedBack;
