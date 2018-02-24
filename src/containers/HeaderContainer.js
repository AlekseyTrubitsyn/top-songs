import { connect } from "react-redux";
import { showAll, showFavorites, toggleFavorites, toggleFilters, search } from "../actions";

import Header from "../components/Header";

function mapStateToProps(state) {
  return {
    showFavorites: state.showFavorites,
    showFilters: state.showFilters
  }
};

function mapDispatchToProps(dispatch) {
  return {
    onClickAll: (e) => {
      e.preventDefault();

      return dispatch(showAll());
    },
    onClickFavorites: (e) => {
      e.preventDefault();

      return dispatch(showFavorites());
    },
    onModeToggle: () => dispatch(toggleFavorites()),
    onClickShowFilters: (e) => {
      e.preventDefault();

      return dispatch(toggleFilters());
    },
    onSearch: (text) => dispatch(search(text))

  }
}
const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;
