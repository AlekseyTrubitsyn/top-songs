import React from "react";
import PropTypes from "prop-types";

const CatalogItem = ({ songName, artistName, imageSource, artistUrl, songUrl, genre, releaseDate, isFavorite, onSelect }) => {
  let className = "catalog__item";
  className = (isFavorite) ? className + " " + className + "--selected" : className;
  songName = (songName.length > 22) ? songName.slice(0, 20) + "..." : songName;
  artistName = (artistName.length > 22) ? artistName.slice(0, 20) + "..." : artistName;
  let likeButtonClassName = (isFavorite) ? "catalog-item__like-button catalog-item__like-button--delete" : "catalog-item__like-button";

  return (
    <div className={className}>
      <img
        className="catalog-item__image"
        src={imageSource}
        width="200"
        height="200"
        alt={songName} />
      <button
        className={likeButtonClassName}
        onClick={onSelect}>
        {/* <span className="visually-hidden">{isFavorite ? "dislike" : "like"}</span> */}
      </button>
      <p className="catalog-item__title">
        <a className="catalog-item__link" href={songUrl}>{songName}</a>
      </p>
      <p className="catalog-item__subtitle">
        <a className="catalog-item__link" href={artistUrl}>{artistName}</a>
      </p>
      <div className="catalog-item__footer">
        <p>{genre}</p>
        <p>{releaseDate}</p>
      </div>
    </div>
  )
}

CatalogItem.propTypes = {
  songName: PropTypes.string.isRequired,
  artistName: PropTypes.string.isRequired,
  imageSource: PropTypes.string.isRequired,
  artistUrl: PropTypes.string.isRequired,
  songUrl: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool.isRequired
}

export default CatalogItem;
