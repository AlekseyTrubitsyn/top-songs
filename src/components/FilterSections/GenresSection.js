import React from "react";
import PropTypes from "prop-types";

const GenresSection = ({ items, selectedGenres, onSelect }) => {
  return (
    <div>
      <p className="filters__buttons-section">Жанры</p>
      {items.map((item, index) => {
        let className = "filters__button";
        className = (selectedGenres.some(subitem => item === subitem)) ? className + " " + className + "--selected" : className;

        return (
          <button
            className={className}
            key={index + "__" + item}
            onClick={(e) => onSelect(e, item)}>
              <span>{item}</span>
          </button>
        );
      })}
    </div>
  )
}

GenresSection.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  selectedGenres: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onSelect: PropTypes.func.isRequired
}

export default GenresSection;
