// cookies.js
document.addEventListener("DOMContentLoaded", function () {
  if (!localStorage.getItem("cookiesAccepted")) {
    document.querySelector(".cookie-consent").style.display = "block";
  }

  document
    .querySelector(".cookie-accept")
    .addEventListener("click", function () {
      document.querySelector(".cookie-consent").style.display = "none";
      localStorage.setItem("cookiesAccepted", "true");
    });

  document
    .querySelector(".cookie-decline")
    .addEventListener("click", function () {
      document.querySelector(".cookie-consent").style.display = "none";
      localStorage.setItem("cookiesAccepted", "false");
    });
});
