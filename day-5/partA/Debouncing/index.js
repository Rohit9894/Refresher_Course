window.addEventListener("load", function () {
  let btn = document.getElementById("click");
  btn.addEventListener("click", debouncer(makeApiCall, 1000));
});

const makeApiCall = () => {
  console.log("api call in progress");
};

const debouncer = (fn, delay) => {
    
  let debouncing;
  return function () {
    debouncing && clearTimeout(debouncing);
    debouncing = setTimeout(() => {
      fn();
    }, delay);
  
  };
};
