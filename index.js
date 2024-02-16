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

- Initially, all content is invisible

---------- */
document.fonts.ready.then(() => {
  document.body.style.opacity = "1";
});

/* ----------

- typingAnimationFunction reconstructs the element with <spans> of the element's length
- Checking header type to assign font-family and CSS
- After a tiny delay changes the opacity from 0 to 1 of each letter
- Creates a 'typing' effect
- Cleans up span tags with the original content for easier load on memory
- Function will NOT run until all fonts are loaded in

---------- */
document.fonts.ready.then(() => {
  setTimeout(() => {
    // One second delay
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

            // - Initially, all elements with this class are invisible

            document.querySelectorAll(".animationTyping").forEach((el) => {
              el.style.opacity = "1";
            });

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
            }, text.length * 25 + 100); // Adjusted to wait until the last character is shown

            typingObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const typingAnimationFunction =
      document.querySelectorAll(".animationTyping");
    typingAnimationFunction.forEach((el) => typingObserver.observe(el));
  }, 333);
});

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

        // Stop observing the element after applying the animation
        borderObserver.unobserve(entry.target);
      }
    });
  },
  // How much in page before applying class
  { threshold: 0.1 }
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

        // Stop observing the element after applying the animation
        fadeUpOneObserver.unobserve(entry.target);
      }
    });
  },
  // How much in page before applying class
  { threshold: 0.1 }
);

const animationFadeUpOneFunction = document.querySelectorAll(
  ".animationFadeUpOne"
);
animationFadeUpOneFunction.forEach((el) => fadeUpOneObserver.observe(el));

/* ----------

- animationFadeUpTwoFunction selects all the .animationFadeUpTwo classes in the DOM.
- Showing the element adds the class 'animationFadeUpTwoDONE'
- Happens once per element
- Allowing for the animation to essentially be 'attached'

---------- */
const fadeUpTwoObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const element = entry.target;

        // Animate the border after a delay
        setTimeout(() => {
          element.classList.add("animationFadeUpTwoDONE");
        }, 777);

        // Stop observing the element after applying the animation
        fadeUpTwoObserver.unobserve(entry.target);
      }
    });
  },
  // How much in page before applying class
  { threshold: 0.1 }
);

const animationFadeUpTwoFunction = document.querySelectorAll(
  ".animationFadeUpTwo"
);
animationFadeUpTwoFunction.forEach((el) => fadeUpTwoObserver.observe(el));

/* ----------

- addAnimation selects all the .animationSkillArticle classes in the DOM.
- Adding the 'data-animated' attribute to them
- Cloning each <article> and appending it to the existing list once only
- Creating an infinite scroll!

---------- */

const animationSkillArticleFunction = document.querySelectorAll(
  ".animationSkillArticle"
);

// Adds animation if the user doesn't prefer reduced motion
if (!window.matchMedia("(prefers-reduced-motion: reduce").matches) {
  addAnimation();
}

function addAnimation() {
  animationSkillArticleFunction.forEach((el) => {
    el.setAttribute("data-animated", true);

    const scrollerInner = el.querySelector(".animationSkillArticleINNER");
    const scrollerContent = Array.from(scrollerInner.children);

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);

      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.append(duplicatedItem);
    });
  });
}

/* ----------

- navBarAnchorClickFunction adds a 'click' eventListener to all navBar <a>
- Sending user to the desired page area
- Clicking on 'Contact' adds the class .animationGlow
- Adds smooth-scrolling!

---------- */
function navBarAnchorClickFunction(e) {
  e.preventDefault();

  const href = this.getAttribute("href");
  const navbarHeight = document.querySelector("nav").offsetHeight;

  // Determine if the link is meant to scroll to the top
  if (href === "#") {
    window.scroll({
      top: 0, // Scroll to the top of the page
      behavior: "smooth",
    });
  } else {
    const target = document.querySelector(href);
    window.scroll({
      top: target.offsetTop - navbarHeight,
      behavior: "smooth",
    });

    // Apply the glow effect if it's the Contact link
    if (target.id === "contactID") {
      // Find the closest ancestor which is a section with class 'contactSector'
      const contactSection = target.closest(".contactSector");
      contactSection.classList.add("animationGlow");

      // Remove the class after the animation completes (2 seconds)
      setTimeout(() => {
        contactSection.classList.remove("animationGlow");
      }, 2000);
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", navBarAnchorClickFunction);
  });
});

/* ----------

- projectLinkClickFunction adds a 'click' eventListener to all projectLinks
- Grabs the url from html attrbute 'data-url'
- Sending user to the desired website page
- Adds smooth-scrolling!

---------- */
function projectLinkClickFunction(e) {
  e.preventDefault(); // Prevent the default link behavior

  const url = this.getAttribute("data-url");

  if (url) {
    // Check if the URL is present
    window.open(url, "_blank");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".projectLink").forEach((link) => {
    link.addEventListener("click", projectLinkClickFunction);
  });
});

/* ----------

- PWA RELATED:

---------- */
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("/sw.js").then(
      (registration) => {
        console.log(
          "ServiceWorker registration successful with scope: ",
          registration.scope
        );
      },
      (err) => {
        console.log("ServiceWorker registration failed: ", err);
      }
    );
  });
}

let deferredPrompt;
window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;
  // Update UI to notify the user they can add to the home screen
});
