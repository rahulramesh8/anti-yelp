import React from "react";
// import LocationSearchInput from "../../components/location-search-input/Location-search-input";
import LocationSearchInputHooks from "../../components/location-search-input-hooks/Location-search-input-hooks";

const HomePage = (props: any) => {
  return (
    <>
      <LocationSearchInputHooks history={history} />
    </>
  );
};

export default HomePage;
