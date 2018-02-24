import React from "react";

import PropTypes from "prop-types";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
      showSearch: true
    }

    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleShowSearchClick = this.handleShowSearchClick.bind(this);
    this.handleResetSearch = this.handleResetSearch.bind(this);
  }

  handleSearchInput(e) {
    let search = e.target.value;

    this.props.onSearch(search);

    this.setState({
      search
    })
  }

  handleResetSearch(e) {
    e.preventDefault();

    let search = "";

    this.props.onSearch(search);

    this.setState({
      search
    })
  }

  handleShowSearchClick() {
    let showSearch = !this.state.showSearch;

    if (!showSearch) {
      this.props.onSearch("");
    }

    this.setState({
      showSearch
    })
  }

  render() {
    let buttonSelected = " App-header__button--selected";
    let buttonShowAllClassName = "App-header__button App-header__button--showAll" + ((this.props.showFavorites) ? "" : buttonSelected);
    let buttonShowFavoritesClassName = "App-header__button App-header__button--showFavorites" + ((this.props.showFavorites) ? buttonSelected : "");
    let buttonShowSearchClassName = "App-header__button App-header__button--showSearch" + ((this.state.showSearch) ? buttonSelected : "");
    let buttonShowFiltersClassName = "App-header__button App-header__button--showFilters" + ((this.props.showFilters) ? buttonSelected : "");

    return (
      <div className="App-header">
        <div className="App-header__buttons">
          <button
            className={buttonShowAllClassName}
            onClick={this.props.onClickAll}>
              <span>showAll</span>
          </button>
          <button
            className={buttonShowFavoritesClassName}
            onClick={this.props.onClickFavorites}>
              <span>showFavorites</span>
          </button>
          <button
            className={buttonShowFiltersClassName}
            onClick={this.props.onClickShowFilters}>
              <span>showFilters</span>
          </button>
          <button
            className={buttonShowSearchClassName}
            onClick={this.handleShowSearchClick}>
              <span>showSearch</span>
            </button>
            {(this.state.showSearch ? (
              <div className="App-header__search-container">
                <input
                  className="App-header__search"
                  type="text"
                  value={this.state.search}
                  onInput={this.handleSearchInput}/>
                <button
                  className="App-header__search-reset"
                  onClick={this.handleResetSearch}>
                  <span>х</span></button>
                </div>) : null)}
        </div>
        <h1 className="App-header__title">Top 100 song</h1>
      </div>
    );
  }
}

Header.propTypes = {
  showFavorites: PropTypes.bool.isRequired,
  onClickAll: PropTypes.func.isRequired,
  onClickFavorites : PropTypes.func.isRequired,
  onClickShowFilters: PropTypes.func.isRequired
};

export default Header;
