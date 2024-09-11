function createCounter(initialValue) {
    let currentValue = initialValue; 
  
    return {
   
      increment: function() {
        currentValue += 1;
        return currentValue;
      },
      decrement: function() {
        currentValue -= 1;
        return currentValue;
      },
      getValue: function() {
        return currentValue;
      }
    };
  }
  
  const counter = createCounter(0);
  
  
  const counterValueElement = document.getElementById('counterValue');
  const incrementBtn = document.getElementById('incrementBtn');
  const decrementBtn = document.getElementById('decrementBtn');
  

  function updateUI() {
    counterValueElement.textContent = counter.getValue(); 
  }
  

  incrementBtn.addEventListener('click', () => {
    counter.increment(); 
    updateUI(); 
  });
  
  decrementBtn.addEventListener('click', () => {
    counter.decrement(); 
    updateUI(); 
  });
  

  updateUI();
  