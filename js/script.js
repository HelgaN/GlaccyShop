"use strict";

// окно поиска

var userSearch = document.querySelector(".user-search");
var modalSearch = document.querySelector(".modal-search");
var modalSearchShow = document.querySelector(".modal-search-show");
var userSearchSvg = document.querySelector(".user-search-svg");

// личный кабинет

var userNav = document.querySelector(".user-navigation");
var modalAccount = document.querySelector(".modal-account");
var modalAccountShow = document.querySelector(".modal-account-show");
var userNavSvg1 = document.querySelector(".user-nav-svg-polygon");
var userNavSvg2 = document.querySelector(".user-nav-svg-path");
var userNavLink = document.querySelector(".user-nav-link");

modalSearch.classList.remove("modal-search-show");

modalAccount.classList.remove("modal-account-show");

//окно поиска

function addModalSearch() {
  modalSearch.classList.add("modal-search-show");
  userSearch.classList.add("user-search-hover");
  userSearchSvg.classList.add("user-search-hover-svg");
}

function removeModalSearch() {
  modalSearch.classList.remove("modal-search-show");
  userSearch.classList.remove("user-search-hover");
  userSearchSvg.classList.remove("user-search-hover-svg");
}

// личный кабинет

function addModalAccount() {
  modalAccount.classList.add("modal-account-show");
  userNavLink.classList.add("user-nav-link-hover");
  userNavSvg1.classList.add("user-nav-hover-svg");
  userNavSvg2.classList.add("user-nav-hover-svg");
}

function removeModalAccount() {
  modalAccount.classList.remove("modal-account-show");
  userNavLink.classList.remove("user-nav-link-hover");
  userNavSvg1.classList.remove("user-nav-hover-svg");
  userNavSvg2.classList.remove("user-nav-hover-svg");
}


userSearch.addEventListener("mouseover", addModalSearch);
modalSearch.addEventListener("mouseover", addModalSearch);
modalSearch.addEventListener("mouseout", removeModalSearch);

userNav.addEventListener("mouseover", addModalAccount);
modalAccount.addEventListener("mouseover", addModalAccount);
modalAccount.addEventListener("mouseout", removeModalAccount);




// форма

var link = document.querySelector(".button-contacts");
var popup = document.querySelector(".modal-feedback");
var close = document.querySelector(".modal-feedback-close");
var overlay = document.querySelector(".body-overlay")

var userName = document.querySelector("[name=name]");
var userEmail = document.querySelector("[name=feedback-email]");
var message = document.querySelector("[name=text-area]")
var storage = localStorage.getItem("userName");

var form = document.querySelector(".feedback-form");
var form2 = document.querySelector(".account-form");
var userPass2 = document.querySelector("[name=password]");
var userEmail2 = document.querySelector("[name=email]");
var popup2 = document.querySelector(".modal-account");


popup.classList.add("modal-feedback");

link.addEventListener("click", function(evt) {
evt.preventDefault();
popup.classList.toggle('modal-feedback-hidden');

if (storage) {
      userName.value = storage;
      userEmail.focus();
    } else {
      userName.focus();
    }
overlay.style.display="block";
window.scrollTo(0,250);
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-feedback-hidden");
  overlay.style.display="none";
  popup.classList.remove("modal-error");
});

function addShake() {
  popup.classList.remove("modal-error");
}

form.addEventListener("submit", function (evt) {
  if(!userName.value || !userEmail.value || !message.value){
    evt.preventDefault();
    popup.classList.add("modal-error");
    setTimeout(addShake, 1000);
  } else {
    localStorage.setItem("userName", userName.value);
  }

  });

  form2.addEventListener("submit", function (evt) {
      popup2.classList.remove("modal-error");
    if(!userEmail2.value || !userPass2.value ){
      evt.preventDefault();
      popup2.classList.remove("modal-error");
      popup2.offsetWidth == popup2.offsetWidth;
      popup2.classList.add("modal-error");
    } else {
      localStorage.setItem("userEmail2", userEmail2.value);
    }

    });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (popup.classList.contains("modal-feedback-hidden")) {
        popup.classList.remove("modal-feedback-hidden");
        overlay.style.display="none";
        popup.classList.remove("modal-error");
      }
    }
  });
