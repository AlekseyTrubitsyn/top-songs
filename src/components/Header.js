import React from "react";

import PropTypes from "prop-types";

const Header = ({ showFavorites, search }) => (
  <div className="App-header">
    <div className="App-header__buttons">
      <button>showAll</button>
      <button>showFavorites</button>
      <button>showFilters</button>
      <button>showSearch</button>
    </div>
    <h1>Top 100 song</h1>
    <input className="App-header__search" type="text" />
  </div>
)

Header.propTypes = {
  showFavorites: PropTypes.bool.isRequired,
  search: PropTypes.string.isRequired
}

export default Header;
