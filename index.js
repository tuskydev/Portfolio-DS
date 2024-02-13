// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementsByClassName("navBarUL")[0].style.paddingTop = "10px";
  } else {
    // Access the first element with class "navBarUL" and set its padding
    document.getElementsByClassName("navBarUL")[0].style.paddingTop = "30px";
  }
}

/* ----------

- typingAnimationFunction

---------- */
const typingObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const element = entry.target;
      const text = element.textContent; // Get the text content of the element
      element.textContent = ""; // Clear the element content

      // Create a span for each character in the text
      for (let i = 0; i < text.length; i++) {
        let span = document.createElement("span");
        span.textContent = text[i];
        span.style.opacity = "0"; // Start with the character hidden
        element.appendChild(span);
      }

      // Reveal each character with a delay
      const spans = element.querySelectorAll("span");
      spans.forEach((span, index) => {
        setTimeout(() => {
          if (
            (element.tagName.toLowerCase() == "h1") |
            (element.tagName.toLowerCase() == "h2")
          ) {
            span.style.fontFamily = '"Alliance No. 2"';
          }

          if (element.tagName.toLowerCase() == "h3") {
            span.style.fontFamily = '"Alliance No. 1"';
          }
          span.style.opacity = "1"; // Make the character visible
          span.style.color = "#1e2124"; // Change to the desired color
        }, index * 25); // Adjust the delay as needed
      });

      setTimeout(() => {
        element.textContent = text;
        element.style.color = "#1e2124";
      }, 5000);

      typingObserver.unobserve(entry.target);
    }
  });
});

const typingAnimationFunction = document.querySelectorAll(".animationTyping");
typingAnimationFunction.forEach((el) => typingObserver.observe(el));

/* ----------

- animationBorderFunction selects all the .animationBorder classes in the DOM.
- Showing the element adds the class 'animated'
- Happens once per element
- Allowing for the animation to essentially be 'attached'

---------- */
const borderObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const element = entry.target;

        // Animate the border
        element.classList.add("animationBorderDONE");

        borderObserver.unobserve(entry.target); // Stop observing the element after applying the animation
      }
    });
  },
  { threshold: 0.1 } // How much in page before applying class
);

const animationBorderFunction = document.querySelectorAll(".animationBorder");
animationBorderFunction.forEach((el) => borderObserver.observe(el));
