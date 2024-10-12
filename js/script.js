// Basic Modal Functionality
document.addEventListener("DOMContentLoaded", function() {
    const modals = document.querySelectorAll('.modal');
    
    document.querySelectorAll('.open-modal').forEach(button => {
      button.addEventListener('click', function() {
        const target = document.querySelector(this.dataset.target);
        if (target) {
          target.classList.add('show');
        }
      });
    });
  
    document.querySelectorAll('.close-modal').forEach(button => {
      button.addEventListener('click', function() {
        const target = this.closest('.modal');
        if (target) {
          target.classList.remove('show');
        }
      });
    });
  });
  
