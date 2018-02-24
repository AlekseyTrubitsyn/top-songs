import { connect } from "react-redux";
import { addToFavorites, removeFromFavorites } from '../actions';

import Catalog from "../components/Catalog";

function mapStateToProps(state) {
  return {
    items: getItems()
  }

  function getItems() {
    let items = state.filteredData.slice(0);

    if (state.favoritesId.length === 0) return items;

    items.forEach(item => {
      if (state.favoritesId.some(subitem => item.id === subitem)) {
        item.isFavorite = true;
      } else {
        item.isFavorite = false;
      }
    });

    return items;
  }
};

function mapDispatchToProps(dispatch) {
  return {
    onSelect: (e, id, isFavorite) => {
      if(e.target.tagName === "A") return;
      e.preventDefault();

      if (isFavorite) {
        return dispatch(removeFromFavorites(id));
      }

      return dispatch(addToFavorites(id));
    }
  }
}

const CatalogContainer = connect(mapStateToProps, mapDispatchToProps)(Catalog);

export default CatalogContainer;
