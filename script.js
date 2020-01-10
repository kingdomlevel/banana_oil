let logo = window.document.getElementById("logo");

document.onscroll = function(ev) {
    let pixels = window.scrollY;
    
    logo.style.left = (-0.6 * pixels) + "px";
};




// turn each individual character in to spans;
const makeSpans = selector => {
    const [...elements] = document.querySelectorAll(selector)
    return elements.map(element => {
      const text = element.innerText.split('');
      const spans = text
        .map(character => '<span>' + character + '</span>')
        .join('');
      return element.innerHTML = spans;
    })
  }
  
  // usage with single selector
  makeSpans('#logo p');



  document.querySelectorAll("#logo p").forEach(function(element) {
      element.childNodes.forEach(function(char) {
        char.style.top = Math.random() * 100 - 50 + "px";
        char.style.transform = "rotate(" + (Math.random() * 50 - 25) + "deg)";
      });
  });
