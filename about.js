window.addEventListener('load', () => {
    // Select all elements with class 'col-md-6'
    const cols = document.querySelectorAll('.col-md-6');
  
    // Add animation classes
    cols.forEach((col) => {
      col.classList.add('fadeIn');
      if (col.querySelector('img')) {
        col.classList.add('slideIn');
      }
    });
  });

    