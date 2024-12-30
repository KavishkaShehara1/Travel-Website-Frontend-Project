const preloader = document.querySelector("[data-preloader]");

// 5 seconds delay before removing the preloader
setTimeout(() => {
  preloader.classList.add("remove");
}, 3000); // 5000 milliseconds = 5 seconds
