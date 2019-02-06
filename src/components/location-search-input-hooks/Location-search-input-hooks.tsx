import React, { useState } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";

import { routeStrings } from "../../routes/route-strings";

export interface Props {
  history: object;
}

const tryStuff = address => {
  console.log("Sup");
  // try {
  //   handleSelect(address);
  // } catch (error) {
  //   console.log("SSSS: ", error);
  // }
};

const handleSelect = (address: string) => {
  console.log("Trying");
  // const results = await geocodeByAddress(address);
  // const latLng = await getLatLng(results[0]);

  // console.log("Success: ", latLng);
  // this.props.history.push(routeStrings.RESULTS);
};

const LocationSearchInputHooks = (props: Props) => {
  const [address, setAddress] = useState("");
  console.log("Address is: ", address);

  return (
    <PlacesAutocomplete
      value={address}
      onChange={setAddress}
      onSelect={tryStuff}
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
            {suggestions.map((suggestion, index) => {
              const className = suggestion.active
                ? "suggestion-item--active"
                : "suggestion-item";
              // inline style for demonstration purpose
              const style = suggestion.active
                ? { backgroundColor: "#fafafa", cursor: "pointer" }
                : { backgroundColor: "#ffffff", cursor: "pointer" };
              console.log("S", suggestion);
              console.log({
                ...getSuggestionItemProps(suggestion, {
                  className,
                  style
                })
              });
              return (
                <div
                  className={className}
                  style={style}
                  key={index}
                  // onClick={suggestion.onClick}
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
};
export default LocationSearchInputHooks;
