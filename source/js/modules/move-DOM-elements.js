const moveDOMElements = () => {
  let cards = document.querySelectorAll('.card');
  let parimatch = document.querySelector('.parimatch');

  let move = () => {
    let currentMobileWidth = window.innerWidth;

    if (cards) {
      cards.forEach((card) => {
        let cardFooter = card.querySelector('.card__footer');
        let cartsBlock = card.querySelector('.carts-block');

        if (currentMobileWidth < 768) {
          cardFooter.prepend(cartsBlock);
        } else {
          card.querySelector('.card__body-carts').prepend(cartsBlock);
        }

      });
    }
  };

  let addEl = () => {
    let currentMobileWidth = window.innerWidth;

    if (parimatch && currentMobileWidth < 767) {
      let carts = parimatch.querySelectorAll('.carts-block__item');
      let currentLengthCarts = carts.length;

      for (let i = 0; i < 4; i++) {
        if (currentLengthCarts < 12) {
          let cart1 = parimatch.querySelector('.carts-block__item');

          let cloneCart = cart1.cloneNode(true);
          document.querySelector('.parimatch__carts-block').appendChild(cloneCart);
        }


      }
    }
  };

  window.addEventListener('resize', move);
  window.addEventListener('load', move);
  window.addEventListener('resize', addEl);
  window.addEventListener('load', addEl);
};

export {moveDOMElements};
