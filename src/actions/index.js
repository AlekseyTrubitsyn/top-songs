export const SHOW_ALL = "SHOW_ALL";
export const SHOW_FAVORITES = "SHOW_FAVORITES";

export const SHOW_FILTERS = "SHOW_FILTERS";
export const HIDE_FILTERS = "HIDE_FILTERS";
export const SHOW_SEARCH = "SHOW_SEARCH";
export const HIDE_SEARCH = "HIDE_SEARCH";

export const RESET_FILTERS = "RESET_FILTERS";
export const FILTER_BY_GENRE = "FILTER_BY_GENRE";
export const FILTER_BY_ARTIST_FIRST_LETTER = "FILTER_BY_ARTIST_FIRST_LETTER";
export const FILTER_BY_SONG_FIRST_LETTER = "FILTER_BY_SONG_FIRST_LETTER";
export const FILTER_BY_SEARCH = "FILTER_BY_SEARCH";

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
