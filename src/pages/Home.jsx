import React, { useCallback } from 'react';
import Sort from './../components/Sort';
import Categories from './../components/Categories';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryBy, setSortBy } from '../redux/reducer/filterReducer';
import { useEffect } from 'react';
import { SetItemsPizzasThunk } from '../redux/reducer/pizzasReducer';
import Preloader from '../components/PizzaBlock/Preloader';

const typeName = ['Мясные', 'Вегетарианское', 'Гриль', 'Острые', 'Закрытые'];
const categoryName = [
  { name: 'популярности', type: 'popular', order: 'desc' },
  { name: 'цене', type: 'price', order: 'desc' },
  { name: 'алфавиту', type: 'name', order: 'asc' },
];
const Home = () => {
  const dispatch = useDispatch();

  const setActiveIndex = useCallback((index) => {
    dispatch(setCategoryBy(index));
  }, []);

  //state
  const items = useSelector((state) => state.pizzas.items);
  const cat = useSelector((state) => state.filter.category);
  const { category, sortBy } = useSelector(({ filter }) => filter);
  const isLoaded = useSelector((state) => state.pizzas.isLoaded);

  useEffect(() => {
    dispatch(SetItemsPizzasThunk(sortBy, category));
  }, [category, sortBy]);

  const onSelectType = (type) => {
    dispatch(setSortBy(type));
  };
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeLi={cat}
          onClick={(index) => {
            setActiveIndex(index);
          }}
          items={typeName}
        />

        <Sort items={categoryName} activeSort={sortBy.type} onClickSortType={onSelectType} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? Array(12)
              .fill(0)
              .map((_, index) => <Preloader key={index} />)
          : items.map((obj) => (
              <PizzaBlock
                isLoaded={isLoaded}
                key={obj.id}
                {...obj}
                vid={['тонкое', 'традиционное']}
              />
            ))}
      </div>
    </div>
  );
};

export default Home;
