import { Feedback } from "../type";

export const addFeedback = async (feedback: Feedback) => {
  let res = await fetch("http://localhost:8000/feedback", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(feedback),
  });
  res = await res.json();
  return res;
};
export const getFeedback = async () => {
  let res = await fetch("http://localhost:8000/feedback");
  res = await res.json();
  return res;
};
