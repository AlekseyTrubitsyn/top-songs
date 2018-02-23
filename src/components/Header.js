import React from "react";

import PropTypes from "prop-types";

const Header = ({ showFavorites, search, onClickAll, onClickFavorites }) => {
  let buttonSelected = " App-header__button--selected";
  let showAllClassName = "App-header__button App-header__button--showAll" + ((showFavorites) ? "" : buttonSelected);
  let showFavoritesClassName = "App-header__button App-header__button--showFavorites" + ((showFavorites) ? buttonSelected : "");

  return (
    <div className="App-header">
      <div className="App-header__buttons">
        <button
          className={showAllClassName}
          onClick={onClickAll}>
            showAll
        </button>
        <button
          className={showFavoritesClassName}
          onClick={onClickFavorites}>
            showFavorites
        </button>
        <button>showFilters</button>
        <button>showSearch</button>
      </div>
      <h1>Top 100 song</h1>
      <input className="App-header__search" type="text" />
    </div>
  );
}


Header.propTypes = {
  showFavorites: PropTypes.bool.isRequired,
  search: PropTypes.string.isRequired,
  onClickAll: PropTypes.func.isRequired,
  onClickFavorites : PropTypes.func.isRequired
};

export default Header;
