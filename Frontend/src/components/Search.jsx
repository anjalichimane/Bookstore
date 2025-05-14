import React from "react";
import { useLocation } from "react-router-dom";

const Search = () => {
  const query = new URLSearchParams(useLocation().search).get("query");

  return (
    <div className="mt-24 p-4">
      <h1 className="text-2xl font-bold mb-4">Search Results for: "{query}"</h1>
      {/* Display filtered results here */}
    </div>
  );
};

export default Search;
