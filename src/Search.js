import React from "react";

export default function Search() {
  return (
    <form action="" className="row" id="search-form">
      <div className="col-1 button-location">
        <input
          type="button"
          value="📍"
          className="current-location-element btn btn-light"
          id="current-location"
        />
      </div>
      <div className="col-7 search-bar">
        <input
          type="search"
          placeholder="Search a city"
          className="form-control"
          id="city-input"
          autocomplete="off"
        />
      </div>
    </form>
  );
}
