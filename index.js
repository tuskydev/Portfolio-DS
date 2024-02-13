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

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // console.log(entry);

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
          span.style.fontFamily = '"Alliance No. 2"';
          span.style.opacity = "1"; // Make the character visible
          span.style.color = "#1e2124"; // Change to the desired color
        }, index * 25); // Adjust the delay as needed
      });

      setTimeout(() => {
        element.textContent = text;
        element.style.color = "#1e2124";
        console.log("Hello world!", text);
      }, 2000);

      observer.unobserve(entry.target);
    }
  });
});

const hiddenElements = document.querySelectorAll(".hiddenAnimation");
hiddenElements.forEach((el) => observer.observe(el));
