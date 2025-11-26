document.addEventListener("DOMContentLoaded", function () {
  const navPlaceholder = document.getElementById("nav-placeholder");
  const footerPlaceholder = document.getElementById("footer-placeholder");

  const basePath = location.pathname.includes("/components/")
    ? "../components/"
    : "components/";

  if (navPlaceholder) {
    fetch(basePath + "nav.html")
      .then((r) => r.text())
      .then((data) => (navPlaceholder.innerHTML = data))
      .catch((err) => console.error(err));
  }

  if (footerPlaceholder) {
    fetch(basePath + "footer.html")
      .then((r) => r.text())
      .then((data) => (footerPlaceholder.innerHTML = data))
      .catch((err) => console.error(err));
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const projectCards = document.querySelectorAll(".project_card");

  projectCards.forEach((card) => {
    card.addEventListener("click", () => {
      const content = card.querySelector(".project_content");
      content.classList.toggle("show");
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const expCards = document.querySelectorAll(".exp_card");

  expCards.forEach((card) => {
    card.addEventListener("click", () => {
      card.classList.toggle("show");
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const eduCards = document.querySelectorAll(".edu_card");

  eduCards.forEach((card) => {
    card.addEventListener("click", () => {
      card.classList.toggle("show");
    });
  });
});
