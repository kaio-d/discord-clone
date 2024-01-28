document.addEventListener('DOMContentLoaded', function () {
  const menu = document.querySelector('.menu');
  const navList = document.querySelector('.nav-list');

  menu.addEventListener('click', function () {
      navList.classList.toggle('show');
  });
});
