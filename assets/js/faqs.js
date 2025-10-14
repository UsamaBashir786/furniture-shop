document.addEventListener("DOMContentLoaded", function () {
    const questionCards = document.querySelectorAll(".question-card");

    questionCards.forEach((card) => {
        card.addEventListener("click", function (e) {
            questionCards.forEach((c) => c.classList.remove("question-active"));
            this.classList.add("question-active");
            e.stopPropagation();
        });
    });
    document.addEventListener("click", function (e) {
        const isClickInsideCard = e.target.closest(".question-card");

        if (!isClickInsideCard) {
            questionCards.forEach((card) => card.classList.remove("question-active"));
        }
    });
});

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
        const isActive = item.classList.contains("active");

        faqItems.forEach((otherItem) => {
            otherItem.classList.remove("active");
        });

        if (!isActive) {
            item.classList.add("active");
        }
    });
});
