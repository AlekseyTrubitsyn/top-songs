import React from "react";
import PropTypes from "prop-types";

import CatalogItem from "./CatalogItem";

const Catalog = ({items, onSelect}) => {
  if (items.length === 0) {
    return (
      <div className="catalog is-empty">
        <p>Здесь ничего нет...</p>
      </div>
    )
  }

  return (
    <div className="catalog">
      {items.map(item => (
        <CatalogItem
          key={item.id}
          songName={item.name}
          artistName={item.artistName}
          imageSource={item.artworkUrl100}
          artistUrl={item.artistUrl}
          songUrl={item.url}
          genre={item.genres[0].name}
          releaseDate={item.releaseDate}
          isFavorite={item.isFavorite}
          onSelect={(e) => onSelect(e, item.id, item.isFavorite)}
        />
      ))}
    </div>
  )
}

export default Catalog;

Catalog.propTypes = {
  items: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired
}
