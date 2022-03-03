import React, { useState } from 'react';
import Sort from './../components/Sort';
import Categories from './../components/Categories';
import PizzaBlock from '../components/PizzaBlock';

const Home = ({ items }) => {
  const [count, setCount] = useState(null);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeLi={count}
          onClick={(num) => {
            setCount(num);
          }}
          items={['Мясные', 'Вегетарианское', 'Гриль', 'Острые', 'Закрытые']}
        />

        <Sort items={['популярности', 'цене', 'алфавиту']} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items.map((obj) => (
          <PizzaBlock key={obj.id} {...obj} vid={['тонкое', 'традиционное']} />
        ))}
      </div>
    </div>
  );
};

export default Home;
