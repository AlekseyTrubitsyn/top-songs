import { connect } from "react-redux";
import { showAll, showFavorites } from "../actions";

import Header from "../components/Header";

function mapStateToProps(state) {
  return {
    showFavorites: state.showFavorites,
    search: state.search
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
    }
  }
}
const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;
