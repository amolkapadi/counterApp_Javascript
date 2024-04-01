document.addEventListener("DOMContentLoaded", function() {
    const counter = document.getElementById("counter");
    const incrementBtn = document.getElementById("increment");
    const decrementBtn = document.getElementById("decrement");
    const resetBtn = document.getElementById("reset");
  
    let count = 0;
  
    function updateCounter() {
      counter.textContent = count;
    }
  
    updateCounter();
  
    incrementBtn.addEventListener("click", function() {
      count++;
      updateCounter();
    });
  
    decrementBtn.addEventListener("click", function() {
      if (count > 0) {
        count--;
        updateCounter();
      }
    });
  
    resetBtn.addEventListener("click", function() {
      count = 0;
      updateCounter();
    });
  });
  