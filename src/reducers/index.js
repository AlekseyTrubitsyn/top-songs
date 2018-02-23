import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from "../actions";
import { RESET_FILTERS, FILTER_BY_GENRE, FILTER_BY_ARTIST_FIRST_LETTER, FILTER_BY_SONG_FIRST_LETTER } from "../actions";
import { SHOW_ALL, SHOW_FAVORITES } from "../actions";

import { createDefaultFilters, getAvailableLetters } from "../utilities";

const reducer = (state, action) => {
  let filters = Object.assign({}, state.filters);
  let showFavorites = state.showFavorites;
  let search = state.search;
  let favoritesId = state.favoritesId.slice(0);
  let availableLetters = Object.assign({}, state.availableLetters);
  let filteredData = [];

  switch (action.type) {
    case SHOW_ALL:
      showFavorites = false;
      search = "";
      filters = createDefaultFilters();
      filteredData = createItemsArray();
      availableLetters = getAvailableLetters(filteredData);

      return Object.assign({}, state, {
        filteredData,
        availableLetters,
        filters,
        showFavorites,
        search
      });

    case SHOW_FAVORITES:
      showFavorites = true;
      search = "";
      filters = createDefaultFilters();
      filteredData = createItemsArray();
      availableLetters = getAvailableLetters(filteredData);

      return Object.assign({}, state, {
        filteredData,
        availableLetters,
        filters,
        showFavorites,
        search
      });

    case ADD_TO_FAVORITES:
      return Object.assign({}, state, {
        favoritesId: [...state.favoritesId, action.id]
      });

    case REMOVE_FROM_FAVORITES:
      favoritesId = favoritesId.filter(item => item !== action.id);
      filteredData = createItemsArray();
      availableLetters = getAvailableLetters(filteredData);

      return Object.assign({}, state, {
        favoritesId,
        filteredData,
        availableLetters
      });

    case RESET_FILTERS:
      filters = createDefaultFilters();
      filteredData = createItemsArray();
      availableLetters = getAvailableLetters(filteredData);

      return Object.assign({}, state, {
        filteredData,
        availableLetters,
        filters
      });

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

      filteredData = createItemsArray();
      availableLetters = getAvailableLetters(filteredData);

      return Object.assign({}, state, {
        filteredData,
        availableLetters,
        filters
      });

    case FILTER_BY_ARTIST_FIRST_LETTER:
      if (action.letter === "all" || action.name === state.filters.artistLetter) {
        filters = Object.assign({}, state.filters, { artistLetter: "all" });

      } else {
        filters = Object.assign({}, state.filters, { artistLetter: action.letter });
      };

      return Object.assign({}, state, {
        filteredData: createItemsArray(),
        filters
      });

    case FILTER_BY_SONG_FIRST_LETTER:
      if (action.letter === "all" || action.name === state.filters.artistLetter) {
        filters = Object.assign({}, state.filters, { songLetter: "all" });

      } else {
        filters = Object.assign({}, state.filters, { songLetter: action.letter });
      };

      return Object.assign({}, state, {
        filteredData: createItemsArray(),
        filters
      });

    default:
      return state;
  }

  function createItemsArray() {
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

    const checkIsFavorite = (item) => favoritesId.some(subitem => subitem === item.id);

    if (showFavorites) {
      if (!state.favoritesId.length) return [];

      return state.data.slice(0).filter(checkIsFavorite).filter(checkFilters);

    } else {
      return state.data.slice(0).filter(checkFilters);
    }
  }
}

export default reducer;
