import React from 'react';

const Categories = ({ items, onClick, activeLi }) => {
  return (
    <div className="categories">
      <ul>
        <li
          onClick={() => {
            onClick(null);
          }}
          className={activeLi === null ? 'active' : ''}>
          Все
        </li>

        {items &&
          items.map((el, index) => (
            <li
              className={activeLi === index ? 'active' : ''}
              onClick={() => {
                onClick(index);
              }}
              key={`${el}_${index}`}>
              {' '}
              {el}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Categories;
