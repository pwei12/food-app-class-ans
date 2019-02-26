import React from "react";

function FilterBar({cuisines}) {

  return (
    <div className="btn-group" role="group" aria-label="Basic example">
      {cuisines.map(cuisine => (
        <button key={cuisine._id} type="button" className="btn btn-outline-primary">
          {cuisine.name}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;
