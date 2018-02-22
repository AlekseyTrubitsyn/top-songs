import { connect } from "react-redux";

import Filters from "../components/Filters";

function mapStateToProps(state) {
  return {
    filters: state.filters,
    filterOptions: state.filterOptions,
    availableLetters: state.availableLetters
  }
};

const FiltersContainer = connect(mapStateToProps)(Filters);

export default FiltersContainer;
