import { connect } from "react-redux";
import { filterByGenre, filterByArtist, filterBySong } from '../actions';

import Filters from "../components/Filters";

function mapStateToProps(state) {
  return {
    filters: state.filters,
    filterOptions: state.filterOptions,
    availableLetters: state.availableLetters
  }
};

function mapDispatchToProps(dispatch) {
  return {
    onGenreSelect: (e, name) => {
      e.preventDefault();

      return dispatch(filterByGenre(name));
    },
    onArtistSelect: (e, name) => {
      e.preventDefault();

      return dispatch(filterByArtist(name));
    },
    onSongSelect: (e, name) => {
      e.preventDefault();

      return dispatch(filterBySong(name));
    }
  }
}

const FiltersContainer = connect(mapStateToProps, mapDispatchToProps)(Filters);

export default FiltersContainer;
