import React from "react";
import PropTypes from "prop-types";

import GenresSection from "./FilterSections/GenresSection";
import FirstLetterSection from "./FilterSections/FirstLetterSection";

const Filters = ({ showFilters, filters, filterOptions, availableLetters, onReset, onGenreSelect, onArtistSelect, onSongSelect }) => {
  if (!showFilters) return null;

  return (
    <div className="filters">
      <button
        className="filters__button"
        onClick={onReset}>
        <span>Показать все</span>
      </button>
      <GenresSection
        items={filterOptions.genres}
        selectedGenres={filters.genres}
        onSelect={onGenreSelect}
      />
      <FirstLetterSection
        sectionName="Исполнители"
        items={filterOptions.artistLetters}
        selectedLetter={filters.artistLetter}
        availableLetters={availableLetters.artistLetters}
        onSelect={onArtistSelect}
      />
      <FirstLetterSection
        sectionName="Название песни"
        items={filterOptions.songLetters}
        selectedLetter={filters.songLetter}
        availableLetters={availableLetters.songLetters}
        onSelect={onSongSelect}
      />
    </div>
  )
};

Filters.propTypes = {
  showFilters: PropTypes.bool.isRequired,
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
  }).isRequired,
  onReset: PropTypes.func.isRequired,
  onGenreSelect: PropTypes.func.isRequired,
  onArtistSelect: PropTypes.func.isRequired,
  onSongSelect: PropTypes.func.isRequired
}

export default Filters;
