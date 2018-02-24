import React, { Component } from 'react';
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import moment from "moment";
import "moment/locale/ru";

import data from "./data.json";

import './styles/App.css';

import Header from "./containers/HeaderContainer";
import Catalog from "./containers/CatalogContainer";
import Filters from "./containers/FiltersContainer";

import { createDefaultFilters, createFilterOptions } from "./utilities";

moment.locale("ru");

let defaultData = data.feed.results.map(item => {
  let date = moment(item.releaseDate);

  let releaseDate = date.format("LL");

  let newObj = {
    isFavorite: false,
    releaseDate
  }

  return Object.assign({}, item, newObj);
});

let state = {
  data: defaultData,
  favoritesId: [],
  showFavorites: false,
  filteredData: defaultData,
  showFilters: true,
  filters: createDefaultFilters(),
  search: "",
  availableLetters: {
    songLetters: [],
    artistLetters: []
  },
  filterOptions: createFilterOptions(defaultData)
};

const store = createStore(reducer, state);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
          <Filters />
          <Catalog />
        </div>
      </Provider>
    );
  }
}

export default App;
