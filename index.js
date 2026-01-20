// FAQ Accordion functionality
document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    const icon = item.querySelector(".faq-icon");

    question.addEventListener("click", function () {
      // Close other items
      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.querySelector(".faq-answer").classList.add("hidden");
          otherItem.querySelector(".faq-icon").classList.remove("rotate-180");
        }
      });

      // Toggle current item
      answer.classList.toggle("hidden");
      icon.classList.toggle("rotate-180");
    });
  });
});
