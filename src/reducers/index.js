import { RESET_FILTERS, FILTER_BY_GENRE, FILTER_BY_ARTIST_FIRST_LETTER, FILTER_BY_SONG_FIRST_LETTER } from "../actions";
import { createDefaultFilters } from "../utilities";

const reducer = (state, action) => {
  let filters = {};

  switch (action.type) {
    case RESET_FILTERS:
      filters = createDefaultFilters();

      return filterItems();

    case FILTER_BY_GENRE:
      let genres = state.filters.genres.slice(0);

      if (action.name === "all" || (genres.length === 1 && genres[0] === action.name)) {
        filters = Object.assign({}, state.filters, { genres: ["all"] });

      } else if (genres.some(item => item === action.name)) {
        filters = Object.assign({}, state.filters, { genres: genres.filter(item => item !== action.name) });

      } else {
        let newGenresArr = (genres[0] === "all") ? [action.name] : genres.concat(action.name);

        filters = Object.assign({}, state.filters, { genres: newGenresArr })
      }

      return filterItems();

    case FILTER_BY_ARTIST_FIRST_LETTER:
      if (action.letter === "all" || action.name === state.filters.artistLetter) {
        filters = Object.assign({}, state.filters, { artistLetter: "all" });

      } else {
        filters = Object.assign({}, state.filters, { artistLetter: action.letter });
      };

      return filterItems();

    case FILTER_BY_SONG_FIRST_LETTER:
      if (action.letter === "all" || action.name === state.filters.artistLetter) {
        filters = Object.assign({}, state.filters, { songLetter: "all" });

      } else {
        filters = Object.assign({}, state.filters, { songLetter: action.letter });
      };

      return filterItems();

    default:
      return state;
  }

  function filterItems() {
    const checkGenres = (item) => {
      if (filters.genres[0] === "all") return true;

      return filters.genres.some(subitem => subitem === item.genres[0].name);
    }

    const checkArtistFirstLetter = (item) => {
      if (filters.artistLetter === "all") return true;

      return filters.artistLetter === item.artistName[0].toUpperCase();
    }

    const checkSongFirstLettere = (item) => {
      if (filters.songLetter === "all") return true;

      return filters.songLetter === item.name[0].toUpperCase();
    }

    const checkFilters = (item) => checkGenres(item) && checkArtistFirstLetter(item) && checkSongFirstLettere(item);

    return Object.assign({}, state, {
      filteredData: state.data.slice(0).filter(checkFilters),
      filters
    });
  }
}

export default reducer;
