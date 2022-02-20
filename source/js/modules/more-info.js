const moreInfo = () => {
  let cards = document.querySelectorAll('.card');

  if (cards) {

    cards.forEach((card) => {
      let cardButton = card.querySelector('.more-info');
      let cardFooter = card.querySelector('.card__footer');

      cardButton.addEventListener('click', () => {
        cardButton.classList.toggle('active');
        cardFooter.classList.toggle('show');

        if (cardButton.classList.contains('active')) {
          cardButton.querySelector('span').innerHTML = 'Hide info';
        } else {
          cardButton.querySelector('span').innerHTML = 'More info';
        }

      });

    });
  }

};

export {moreInfo};
