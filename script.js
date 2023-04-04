// Your JS code here.
function slideIn(image) {
    const slideInAt = window.scrollY + window.innerHeight - image.height / 2;
    const imageBottom = image.offsetTop + image.height;
    const isHalfShown = slideInAt > image.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;
    if (isHalfShown && isNotScrolledPast) {
      image.classList.add("active");
    } else {
      image.classList.remove("active");
    }
  }

  const images = document.querySelectorAll(".slide-in");
  
  function debounce(func, delay) {
    let debounceTimer;
    return function() {
      const context = this;
      const args = arguments;
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => func.apply(context, args), delay);
    };
  }
  
  window.addEventListener("scroll", debounce(() => {
    images.forEach(image => {
      if (image.classList.contains("active")) {
        return;
      }
      slideIn(image);
    });
  }, 20));