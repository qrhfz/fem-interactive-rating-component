const ratingButtons = document.querySelectorAll(".rating-button");

const submitButton = document.querySelector("#submit-button");
const thankYouCard = document.querySelector("#thank-you-card");
const ratingCard = document.querySelector("#rating-card");
const selectedRatingNumber = document.querySelector("#selected-rating-number");

let selectedRatingIndex = null;

ratingButtons.forEach((btn, idx) => {
    btn.addEventListener('click', e => {
        console.log(idx);
        selectRating(idx);
    });
});

const selectRating = (index) => {
    selectedRatingIndex = index;
    updateRating();
}

const updateRating = () => {
    ratingButtons.forEach(e => e.classList.remove("selected"));
    if (selectedRatingIndex !== null) {
        ratingButtons[selectedRatingIndex].classList.add('selected');
        selectedRatingNumber.textContent = selectedRatingIndex + 1;
    }
}

submitButton.addEventListener("click", e => {
    ratingCard.classList.add("hidden");
    thankYouCard.classList.remove("hidden");
});

