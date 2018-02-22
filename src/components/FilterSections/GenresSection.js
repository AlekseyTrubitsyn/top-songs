import React from "react";
import PropTypes from "prop-types";

const GenresSection = ({ items, selectedGenre }) => {
  return (
    <div>
      <p className="filters__buttons-section">Жанры</p>
      {items.map((item, index) => {
        let className = "filters__button";
        className = (selectedGenre !== "all" && item === selectedGenre) ? className + " " + className + "--selected" : className;

        return (
          <button
            className={className}
            key={index + "__" + item}>
              {item}
          </button>
        );
      })}
    </div>
  )
}

GenresSection.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  selectedGenre: PropTypes.string.isRequired
}

export default GenresSection;
