/* ----------

- scrollFunction runs everytime the user scrolls
- Scrolling down 30px resizes the navbar's padding

---------- */
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    document.getElementsByClassName("navBarUL")[0].style.paddingTop = "10px";
  } else {
    // Access the first element with class "navBarUL" and set its padding
    document.getElementsByClassName("navBarUL")[0].style.paddingTop = "30px";
  }
}

/* ----------

- typingAnimationFunction reconstructs the element with <spans> of the element's length
- Checking header type to assign font-family and CSS
- After a tiny delay changes the opacity from 0 to 1 of each letter
- Creates a 'typing' effect
- Cleans up span tags with the original content for easier load on memory

---------- */
const typingObserver = new IntersectionObserver(
  (entries) => {
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
  },
  { threshold: 0.1 } // How much in page before applying class
);

const typingAnimationFunction = document.querySelectorAll(".animationTyping");
typingAnimationFunction.forEach((el) => typingObserver.observe(el));

/* ----------

- animationBorderFunction selects all the .animationBorder classes in the DOM.
- Showing the element adds the class 'animationBorderDONE'
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

/* ----------

- animationFadeUpOneFunction selects all the .animationFadeUpOne classes in the DOM.
- Showing the element adds the class 'animationFadeUpOneDONE'
- Happens once per element
- Allowing for the animation to essentially be 'attached'

---------- */
const fadeUpOneObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const element = entry.target;

        // Animate the border after a delay
        setTimeout(() => {
          element.classList.add("animationFadeUpOneDONE");
        }, 222);

        fadeUpOneObserver.unobserve(entry.target); // Stop observing the element after applying the animation
      }
    });
  },
  { threshold: 0.1 } // How much in page before applying class
);

const animationFadeUpOneFunction = document.querySelectorAll(
  ".animationFadeUpOne"
);
animationFadeUpOneFunction.forEach((el) => fadeUpOneObserver.observe(el));

/* ----------


---------- */
const fadeUpTwoObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const element = entry.target;

        // Animate the border after a delay
        setTimeout(() => {
          element.classList.add("animationFadeUpTwoDONE");
        }, 555);

        fadeUpTwoObserver.unobserve(entry.target); // Stop observing the element after applying the animation
      }
    });
  },
  { threshold: 0.1 } // How much in page before applying class
);

const animationFadeUpTwoFunction = document.querySelectorAll(
  ".animationFadeUpTwo"
);
animationFadeUpTwoFunction.forEach((el) => fadeUpTwoObserver.observe(el));
