import React from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";

import { routeStrings } from "../../routes/route-strings";

class LocationSearchInput extends React.Component {
  state = { address: "" };

  handleChange = address => {
    this.setState({ address });
  };

  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        console.log("Success", latLng);
        this.props.history.push(routeStrings.RESULTS);
      })
      .catch(error => console.error("Error", error));
  };

  handleChange = this.handleChange.bind(this);
  handleSelect = this.handleSelect.bind(this);

  render() {
    return (
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <label htmlFor="location-input" className="f6 b db mb2">
              Enter location
              <span className="normal black-60">(Address or City)</span>
            </label>
            <input
              {...getInputProps({
                placeholder: "Search Places ...",
                id: "location-input",
                className:
                  "location-search-input input-reset ba b--black-20 pa2 mb2 db w-80"
              })}
            />
            <small id="location-input-helper" className="f6 black-60 db mb2">
              Type the address and wait for the results to appear
            </small>
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? "suggestion-item--active"
                  : "suggestion-item";
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: "#fafafa", cursor: "pointer" }
                  : { backgroundColor: "#ffffff", cursor: "pointer" };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    );
  }
}

export default LocationSearchInput;
