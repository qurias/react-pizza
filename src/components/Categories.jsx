import React, { useState } from 'react';

function Categories({ items, onClickItem }) {

  const [activeItem, setActiveItem] = useState(null);

  const onSelectItem = (index) => {
    setActiveItem(index)
  }

  return (
    <div className="categories">
      <ul>
        <li 
          className={activeItem === null ? 'active' : ''}
          onClick={() => onSelectItem(null)}
        >Все</li>
        {items && items.map((categ, index) => {
          return (
            <li
              className={activeItem === index ? 'active' : ''}
              onClick={() => onSelectItem(index)}
              key={`${categ}_${index}`}
            >
              {categ}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Categories;