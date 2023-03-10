function showTab(e) {
  const tabs = document.getElementsByClassName("tab-pane");

  for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove('show');
    tabs[i].classList.remove('active');
  }

  const navs = document.getElementsByClassName("nav-link active");
  for (let i = 0; i < navs.length; i++) {
    const nav = navs[i];
    nav.classList.remove('active');
  }

  e.target.classList.add('active');
  const toShowId = e.target.dataset.target;
  const toShow = document.getElementById(toShowId);
  toShow.classList.add('show');
  toShow.classList.add('active');
}

function init() {
  const navs = document.getElementsByClassName("nav-link");
  
  for (let i = 0; i < navs.length; i++) {
    navs[i].addEventListener('click', showTab, false);
  }
}

init();