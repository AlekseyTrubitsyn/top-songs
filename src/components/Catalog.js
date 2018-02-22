import React from "react";
import PropTypes from "prop-types";

import CatalogItem from "./CatalogItem";

const Catalog = ({items}) => (
  <div className="catalog">
    {items.map(item => (
      <CatalogItem
        key={item.id}
        songName={item.name}
        artistName={item.artistName}
        imageSource={item.artworkUrl100}
        artistUrl={item.artworkUrl100}
        songUrl={item.url}
        isFavorite={item.isFavorite}
      />
    ))}
  </div>
)

export default Catalog;

Catalog.propTypes = {
  items: PropTypes.array.isRequired
}
