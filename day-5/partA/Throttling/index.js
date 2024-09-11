const makeApiCall = () => {
  console.log("api call in progress");
};

function throttle (fn, wait)  {
  let lastCall = 0;
  return function () {
    if (Date.now() - lastCall > wait) {
      lastCall = Date.now();
      fn();
    }
  };
};
window.addEventListener("load", function () {
  let btn = document.getElementById("click");
  btn.addEventListener("click", throttle(makeApiCall, 1000));
});
