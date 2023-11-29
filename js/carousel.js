"use strict";

/**
 * PROMOTIONS CAROUSEL
 * ----------------------------------------------------------------------------------------------------
 */
const slider_promotions = document.querySelector(
  ".carousel--promotions .carousel__slider"
);
const items_promotions = document.querySelectorAll(
  ".carousel--promotions .carousel__item"
);
const items_lenght_promotions = document.querySelectorAll(
  ".carousel--promotions .carousel__item"
).length;
const buttons_promotions = document.querySelectorAll(
  ".carousel--promotions .carousel__button"
);

let position_promotions = 0;
slider_promotions.style.width = `${items_lenght_promotions * 100}%`;

buttons_promotions.forEach((button) => {
  button.addEventListener("click", () => {
    if (
      position_promotions == 0 &&
      button.classList.contains("carousel__button--left")
    ) {
      slider_promotions.style.transform = `translateX(20px)`;
      setTimeout(() => {
        slider_promotions.style.transform = `translateX(${0}%)`;
      }, 250);
    } else if (
      position_promotions == items_lenght_promotions - 1 &&
      button.classList.contains("carousel__button--right")
    ) {
      slider_promotions.style.transform = `translateX(calc(${
        position_promotions * -(100 / items_lenght_promotions)
      }% - 20px))`;
      setTimeout(() => {
        slider_promotions.style.transform = `translateX(${
          position_promotions * -(100 / items_lenght_promotions)
        }%)`;
      }, 250);
    } else if (
      position_promotions >= 0 &&
      position_promotions <= items_lenght_promotions - 1
    ) {
      if (button.classList.contains("carousel__button--left")) {
        position_promotions--;
      }
      if (button.classList.contains("carousel__button--right")) {
        position_promotions++;
      }
      slider_promotions.style.transform = `translateX(${
        position_promotions * -(100 / items_lenght_promotions)
      }%)`;
    }
  });
});

/**
 * SHOP CAROUSEL
 * ----------------------------------------------------------------------------------------------------
 */
const slider_shop = document.querySelector(".carousel--shop .carousel__slider");
const items_shop = document.querySelectorAll(".carousel--shop .carousel__item");
const items_lenght_shop = document.querySelectorAll(
  ".carousel--shop .carousel__item"
).length;
const buttons_shop = document.querySelectorAll(
  ".carousel--shop .carousel__button"
);

let position_shop = 0;
slider_shop.style.width = `${items_lenght_shop * 100}%`;

buttons_shop.forEach((button) => {
  button.addEventListener("click", () => {
    if (
      position_shop == 0 &&
      button.classList.contains("carousel__button--left")
    ) {
      slider_shop.style.transform = `translateX(20px)`;
      setTimeout(() => {
        slider_shop.style.transform = `translateX(${0}%)`;
      }, 250);
    } else if (
      position_shop == items_lenght_shop - 1 &&
      button.classList.contains("carousel__button--right")
    ) {
      slider_shop.style.transform = `translateX(calc(${
        position_shop * -(100 / items_lenght_shop)
      }% - 20px))`;
      setTimeout(() => {
        slider_shop.style.transform = `translateX(${
          position_shop * -(100 / items_lenght_shop)
        }%)`;
      }, 250);
    } else if (position_shop >= 0 && position_shop <= items_lenght_shop - 1) {
      if (button.classList.contains("carousel__button--left")) {
        position_shop--;
      }
      if (button.classList.contains("carousel__button--right")) {
        position_shop++;
      }
      slider_shop.style.transform = `translateX(${
        position_shop * -(100 / items_lenght_shop)
      }%)`;
    }
  });
});