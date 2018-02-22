import { connect } from "react-redux";

import Catalog from "../components/Catalog";

function mapStateToProps(state) {
  return {
    items: state.filteredData
  }
};

const CatalogContainer = connect(mapStateToProps)(Catalog);

export default CatalogContainer;
