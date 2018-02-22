export const createDefaultFilters = () => (
  {
    genres: ["all"],
    songLetter: "all",
    artistLetter: "all"
  }
);

export const createFilterOptions = (items) => {
  let genres = [];
  let songLetters = [];
  let artistLetters = [];

  items.forEach(item => {
    genres.push(item.genres[0].name);
    songLetters.push(item.name[0].toUpperCase());
    artistLetters.push(item.artistName[0].toUpperCase());
  });

  return {
    genres: ["all"].concat(getUniqueItems(genres).sort((a, b) => a > b)),
    songLetters: ["all"].concat(getUniqueItems(songLetters).sort((a, b) => a > b)),
    artistLetters: ["all"].concat(getUniqueItems(artistLetters).sort((a, b) => a > b))
  }
};

export const getUniqueItems = (arr) => {
  let obj = {};

  arr.forEach(item => {
    obj[item] = true;
  });

  return Object.keys(obj);
}
