import React, { Component } from 'react';
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";

import data from "./data.json";

import './styles/App.css';

import Header from "./containers/HeaderContainer";
import Catalog from "./containers/CatalogContainer";
import Filters from "./containers/FiltersContainer";

import { createDefaultFilters, createFilterOptions } from "./utilities";

let defaultData = data.feed.results.map(item => Object.assign(item, {isFavorite: false}));
let filterOptions = createFilterOptions(defaultData);
console.log('filterOptions', filterOptions);

let state = {
  data: defaultData,
  showFavorites: false,
  filteredData: defaultData,
  filters: createDefaultFilters(),
  search: "",
  availableLetters: {
    songName: [],
    artistName: []
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
