const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    const icon = item.querySelector(".icon");

    question.addEventListener("click", () => {
        const isOpen = answer.style.display === "block";

        // close all
        document.querySelectorAll(".faq-answer").forEach(a => a.style.display = "none");
        document.querySelectorAll(".faq-question .icon").forEach(i => i.textContent = "+");

        // open current
        if (!isOpen) {
            answer.style.display = "block";
            icon.textContent = "−";
        }
    });
})
