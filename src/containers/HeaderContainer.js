import { connect } from "react-redux";

import Header from "../components/Header";

function mapStateToProps(state) {
  return {
    showFavorites: state.showFavorites,
    search: state.search
  }
};

const HeaderContainer = connect(mapStateToProps)(Header);

export default HeaderContainer;
