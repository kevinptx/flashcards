document.addEventListener("DOMContentLoaded", () => {
  let overlay = document.querySelector(".overlay");
  let cardArray = [];
  let currentIndex = 0;
  let frontCardInput = document.querySelector("#front-card-input");
  let backCardInput = document.querySelector("#back-card-input");
  let cardContainer = document.querySelector(".inner-card-container");

  //FlIP CARD OVER
  let card = document.querySelector(".card");
  card.addEventListener("click", function() {
    card.classList.toggle("is-flipped");
  });

  // OPEN AND CLOSE OVERLAY
  let openOverlay = document.querySelector(".add-card-button");
  let closeOverlay = document.querySelector(".close-overlay");
  openOverlay.addEventListener("click", () => {
    overlay.style.display = "flex";
    closeOverlay.addEventListener("click", () => {
      overlay.style.display = "none";
    });
  });

  // DELETE ALL CARDS
  let deleteCards = document.querySelector(".delete-cards");
  deleteCards.addEventListener("click", () => {
    alert("All cards removed!");
    cardArray = [];
    cardContainer.innerHTML = `
        <div class = "card">
            <div class="card-face card-face-front">
                <h3>Put Your Question Here</h3>
            </div>
            <div class="card-face card-face-back">
                <h3>Put Your Answer Here</h3>
            </div>
        </div>
    `;
    //FLIP CARD OVER
    let card = document.querySelector(".card");
    card.addEventListener("click", function() {
      //is-flipped is the CSS class that toggles to display the other side
      card.classList.toggle("is-flipped");
    });
  });

  // MAKE NEW CARD ON FORM SUBMIT
  let cardForm = document.querySelector(".add-card-form");
  cardForm.addEventListener("submit", event => {
    event.preventDefault();
    var front = frontCardInput.value;
    var back = backCardInput.value;
    var card = {
      front: front,
      back: back
    };
    cardArray.push(card);
    frontCardInput.value = "";
    backCardInput.value = "";
    overlay.style.display = "none";
    displayCards();
  });

  // ADD ARROW FUNCTIONS
  let leftArrow = document.querySelector(".left-arrow");
  leftArrow.addEventListener("click", function() {
    decreaseIndex();
  });

  let rightArrow = document.querySelector(".right-arrow");
  rightArrow.addEventListener("click", function() {
    increaseIndex();
  });

  // DISPLAY CARDS
  const displayCards = () => {
    cardContainer.innerHTML = "";
    let currentCard = cardArray[currentIndex];
    console.log(cardArray);
    cardContainer.innerHTML = `<div class = "card">
        <div class="card-face card-face-front">
            <h3>${currentCard.front}</h3>
        </div>
        <div class="card-face card-face-back">
            <h3>${currentCard.back}</h3>
        </div>
    </div>`;

    //FLIP CARD OVER
    let card = document.querySelector(".card");
    card.addEventListener("click", function() {
      //is-flipped is the CSS class that toggles to display the other side
      card.classList.toggle("is-flipped");
    });
  };

  function increaseIndex() {
    if (currentIndex >= cardArray.length - 1) {
      currentIndex = 0;
    } else {
      currentIndex++;
    }
    displayCards();
  }

  function decreaseIndex() {
    if (currentIndex <= 0) {
      currentIndex = cardArray.length - 1;
    } else {
      currentIndex--;
    }
    displayCards();
  }
});
