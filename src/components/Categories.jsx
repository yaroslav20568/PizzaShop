import React from 'react';

const Categories = ({ categorieItems, activeCategorie, onSelectCategorie }) => {
    return (
        <div className="categories">
            <ul>
                <li className={activeCategorie === null ? 'active' : ''} onClick={() => onSelectCategorie(null)}>Все</li>
                {
                    categorieItems && categorieItems.map((categorie, index) => 
                        <li
                            key={`categorie_${index}`}
                            className={activeCategorie === index ? 'active' : ''}
                            onClick={() => onSelectCategorie(index)}
                        >
                            {categorie}
                        </li>)
                }
            </ul>
        </div>
    );
}

export default Categories;
