import React, { useState } from "react";
import { Feedback } from "../type";
import styles from "./give.module.css";
import { addFeedback } from "../assets/api";
import { Link } from "react-router-dom";
const GiveFeedBack = () => {
  const initState = {
    name: "",
    address: "",
    overall_Rating: "",
    taste: "",
    staff_behaviour: "",
    expensive: "",
    food_quality: "",
    resturant_name: "",
    message: "",
  };

  const [formState, setFormState] = useState<Feedback>(initState);
  function handleChange(
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  }
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    addFeedback(formState).then((res: any) => {
      if (res?.id) {
        alert("Thankyou for your Feedback");
        setFormState(initState);
      }
    });
  }
  const {
    name,
    address,
    overall_Rating,
    food_quality,
    staff_behaviour,
    taste,
    expensive,
    resturant_name,
    message,
  } = formState;
  return (
    <div>
      <Link to="/feedback">See All Feedback</Link>
      <h1 style={{ textAlign: "center" }}>Feedback Form</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          name={"name"}
          onChange={handleChange}
          value={name}
          type="text"
          required
        />
        <label>Resturant Name</label>
        <input
          name={"resturant_name"}
          onChange={handleChange}
          value={resturant_name}
          type="text"
          required
        />
        <label>Resturant Address</label>
        <input
          name={"address"}
          onChange={handleChange}
          value={address}
          type="text"
          required
        />
        <label>OverAll Rating</label>
        <select
          onChange={handleChange}
          value={overall_Rating}
          name="overall_Rating"
          required
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <label>Taste</label>
        <select onChange={handleChange} value={taste} name="taste" required>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <label>Staff Behaviour</label>
        <select
          onChange={handleChange}
          value={staff_behaviour}
          name="staff_behaviour"
          required
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <label>Expensive</label>
        <select
          onChange={handleChange}
          value={expensive}
          name="expensive"
          required
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <label>Food Quality</label>
        <select
          onChange={handleChange}
          value={food_quality}
          name="food_quality"
          required
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <label>Description</label>
        <textarea
          onChange={handleChange}
          value={message}
          name="message"
          required
        ></textarea>
        <button style={{ marginTop: "20px" }} type="submit">
          Gvie FeedBack
        </button>
      </form>
    </div>
  );
};

export default GiveFeedBack;
