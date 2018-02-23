export const SHOW_ALL = "SHOW_ALL";
export const SHOW_FAVORITES = "SHOW_FAVORITES";

export const TOGGLE_FILTERS = "TOGGLE_FILTERS";

export const RESET_FILTERS = "RESET_FILTERS";
export const FILTER_BY_GENRE = "FILTER_BY_GENRE";
export const FILTER_BY_ARTIST_FIRST_LETTER = "FILTER_BY_ARTIST_FIRST_LETTER";
export const FILTER_BY_SONG_FIRST_LETTER = "FILTER_BY_SONG_FIRST_LETTER";
export const FILTER_BY_SEARCH = "FILTER_BY_SEARCH";

export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";

export function resetFilters() {
  return {
    type: RESET_FILTERS
  }
}

export function filterByGenre(name) {
  return {
    type: FILTER_BY_GENRE,
    name: name
  }
}

export function filterByArtist(letter) {
  return {
    type: FILTER_BY_ARTIST_FIRST_LETTER,
    letter
  }
}

export function filterBySong(letter) {
  return {
    type: FILTER_BY_SONG_FIRST_LETTER,
    letter
  }
}

export function addToFavorites(id) {
  return {
    type: ADD_TO_FAVORITES,
    id
  }
}

export function removeFromFavorites(id) {
  return {
    type: REMOVE_FROM_FAVORITES,
    id
  }
}

export function showAll() {
  return {
    type: SHOW_ALL
  }
}

export function showFavorites() {
  return {
    type: SHOW_FAVORITES
  }
}

export function search(text) {
  return {
    type: FILTER_BY_SEARCH,
    text
  }
}

export function toggleFilters() {
  return {
    type: TOGGLE_FILTERS
  }
}
