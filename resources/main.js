// Define the custom element class for dprc-center
class DPRCCenterElement extends HTMLElement {
  constructor() {
    super();
  }
}

// Define the custom element class for dprc-marquee
class DPRCMarqueeElement extends HTMLElement {
  constructor() {
    super();
  }
}

// Register the custom elements
customElements.define('dprc-center', DPRCCenterElement);
customElements.define('dprc-marquee', DPRCMarqueeElement);

window.onload = function() {
  document.getElementById("needJS").innerHTML = "";
};
