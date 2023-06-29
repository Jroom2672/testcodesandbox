const validation_message =
  "Thank you for submitting your message to the Royal Kingdom. Aeete and his crew will respond shortly.";

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert(validation_message);
  });
