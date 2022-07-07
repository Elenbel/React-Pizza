import React from 'react';

import { Link } from 'react-router-dom';
import cartEmptyImg from '../assets/img/empty-cart.png';

export const CartEmpty: React.FC = () => {
  return (
    <>
      <div className="cart cart--empty">
        <h2>
          Корзина пустая <span>😕</span>
        </h2>
        <p>
          Вероятней всего, вы не заказывали ещё пиццу.
          <br />
          Для того, чтобы заказать пиццу, перейди на главную страницу.
        </p>
        <div className="cart--empty__image">
          <img src={cartEmptyImg} alt="Empty cart" />
        </div>
        <Link to="/" className="button button--black">
          <span>Вернуться назад</span>
        </Link>
      </div>
    </>
  );
};
