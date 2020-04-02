const cards1 = document.querySelectorAll('.card1');
const cards2 = document.querySelectorAll('.card2');
const cards3 = document.querySelectorAll('.card3');

cards1.forEach(card =>
  card.addEventListener('click', function() {
    this.classList.toggle('open_card');
    for (i = 0; i < cards1.length; i++) {
      if (cards1[i] !== this) cards1[i].classList.toggle('close_card');
    }
  })
);
cards2.forEach(card =>
  card.addEventListener('click', function() {
    this.classList.toggle('open_card');
    for (i = 0; i < cards2.length; i++) {
      if (cards2[i] !== this) cards2[i].classList.toggle('close_card');
    }
  })
);
cards3.forEach(card =>
  card.addEventListener('click', function() {
    this.classList.toggle('open_card');
    for (i = 0; i < cards3.length; i++) {
      if (cards3[i] !== this) cards3[i].classList.toggle('close_card');
    }
  })
);
