import { FaStar } from "react-icons/fa";

function Rating(props: { value: Number }) {
  return (
    <div style={{ display: "flex", gap: "5px" }}>
      {Array.from({ length: props.value }).map((_, i) => (
        <FaStar color="gold" />
      ))}
    </div>
  );
}

export default Rating;
