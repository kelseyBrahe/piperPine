import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MethodsService {
  burger;
  currentColor;
  elements;
  windowHeight;
  colorTriggers;
  check;

  constructor() { 
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', () => {this.scroll()}, true);
  }

  /**
   * This method changes the color of the menu toggler when it reaches a given point on the screen.
   * @param top The start point for the color change.
   * @param bottom The end point for the color change.
   * @param color1 The original color.
   * @param color2 The color to change to.
   */
  scroll = (): void => {
    if (!this.check.checked) {
      this.colorTriggers.forEach(trigger => {
        let top = trigger.getBoundingClientRect().top + window.scrollY;
        let bottom = top + trigger.getBoundingClientRect().bottom + window.scrollY;
        if(window.pageYOffset >= top && window.pageYOffset <= bottom) {
          this.burger.style.backgroundColor = trigger.getAttribute("togglerColor");
          this.currentColor = trigger.getAttribute("togglerColor");
        }
      })
    }
  }

  /**
   * This method reverts the color of the menu when the user closes the expanded navigation.
   */
  revert = (): void => {
    console.log("revert called");
    if (this.check.checked) {
      this.burger.style.backgroundColor = "transparent";
    } else {
      this.burger.style.backgroundColor = this.currentColor;
    }
  }

  initPositions = (): void => {
    this.check = document.getElementById("menu-checkbox") as HTMLInputElement;
    this.burger = document.getElementById("menu-toggler");

    this.elements = Array.from(document.querySelectorAll('.hidden'));
    this.colorTriggers = Array.from(document.querySelectorAll('.changeToggler'));
    this.windowHeight = window.innerHeight;
  }

  checkPosition = (): void => {
    for(let i=0; i < this.elements.length; i++){
      let element = this.elements[i];
      let positionFromTop = this.elements[i].getBoundingClientRect().top;
      let animation = element.getAttribute("animate_me");
      let delay = element.getAttribute("animation_delay");
      if (positionFromTop - this.windowHeight <= 0) {
        if(delay !== null){
          setTimeout(() => {
            element.classList.add(animation);
            element.classList.remove('hidden');
          }, delay);
        } else {
          element.classList.add(animation);
          element.classList.remove('hidden');
        }
      }
    }
  }
}
