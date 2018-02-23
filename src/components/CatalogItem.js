import React from "react";
import PropTypes from "prop-types";

const CatalogItem = ({ songName, artistName, imageSource, artistUrl, songUrl, isFavorite, onSelect }) => {
  let className = "catalog__item";
  className = (isFavorite) ? className + " " + className + "--selected" : className;

  return (
    <div className={className} onClick={onSelect}>
      <img
        className="catalog-item__image"
        src={imageSource}
        width="200"
        height="200"
        alt={songName} />
      <p className="catalog-item__title">
        <a className="catalog-item__link" href={songUrl}>{songName}</a>
      </p>
      <p className="catalog-item__subtitle">
        <a className="catalog-item__link" href={artistUrl}>{artistName}</a>
      </p>
    </div>
  )
}

CatalogItem.propTypes = {
  songName: PropTypes.string.isRequired,
  artistName: PropTypes.string.isRequired,
  imageSource: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  artistUrl: PropTypes.string,
  songUrl: PropTypes.string
}

export default CatalogItem;
