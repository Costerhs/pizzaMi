import React, { useCallback } from 'react';
import Sort from './../components/Sort';
import Categories from './../components/Categories';
import PizzaBlock from '../components/PizzaBlock';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryBy } from '../redux/reducer/filterReducer';

const categoryName = ['Мясные', 'Вегетарианское', 'Гриль', 'Острые', 'Закрытые'];

const Home = () => {
  const dispatch = useDispatch();
  //state
  const items = useSelector((state) => state.pizzas.items);
  const cat = useSelector((state) => state.filter.category);

  //dispatch
  const setActiveIndex = useCallback((index) => {
    dispatch(setCategoryBy(index));
  }, []);
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeLi={cat}
          onClick={(index) => {
            setActiveIndex(index);
          }}
          items={categoryName}
        />

        <Sort
          items={[
            { name: 'популярности', type: 'popular' },
            { name: 'цене', type: 'price' },
            { name: 'алфавиту', type: 'alphabet' },
          ]}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items &&
          items.map((obj) => <PizzaBlock key={obj.id} {...obj} vid={['тонкое', 'традиционное']} />)}
      </div>
    </div>
  );
};

export default Home;
