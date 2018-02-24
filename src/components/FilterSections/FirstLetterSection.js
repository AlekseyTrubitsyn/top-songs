import React from "react";
import PropTypes from "prop-types";

const FirstLetterSection = ({ sectionName, items, selectedLetter, availableLetters, onSelect }) => {
  return (
    <div>
      <p className="filters__buttons-section">{sectionName}</p>
      {items.map((item, index) => {
        let className = "filters__button";
        className = (item === selectedLetter) ? className + " " + className + "--selected" : className;

        if (availableLetters.length) {
          className = (availableLetters.some(subitem => item === subitem)) ? className : className + " " + className + "--disabled";
        }

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

FirstLetterSection.propTypes = {
  sectionName: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  selectedLetter: PropTypes.string.isRequired,
  availableLetters: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onSelect: PropTypes.func.isRequired
}

export default FirstLetterSection;
