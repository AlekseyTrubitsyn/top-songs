import React from "react";
import PropTypes from "prop-types";

import GenresSection from "./FilterSections/GenresSection";
import FirstLetterSection from "./FilterSections/FirstLetterSection";

const Filters = ({ filters, filterOptions, availableLetters }) => (
  <div className="filters">
    <GenresSection
      items={filterOptions.genres}
      selectedGenres={filters.genres}
    />
    <FirstLetterSection
      sectionName="Исполнители"
      items={filterOptions.artistLetters}
      selectedLetter={filters.artistLetter}
      availableLetters={availableLetters.artistName}
    />
    <FirstLetterSection
      sectionName="Название песни"
      items={filterOptions.songLetters}
      selectedLetter={filters.songLetter}
      availableLetters={availableLetters.songName}
    />
  </div>
)

Filters.propTypes = {
  filters: PropTypes.shape({
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    songLetter: PropTypes.string.isRequired,
    artistLetter: PropTypes.string.isRequired
  }).isRequired,
  filterOptions: PropTypes.shape({
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    songLetters: PropTypes.arrayOf(PropTypes.string).isRequired,
    artistLetters: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired,
  availableLetters: PropTypes.shape({
    artistName: PropTypes.arrayOf(PropTypes.string).isRequired,
    songName: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired
}

export default Filters;
