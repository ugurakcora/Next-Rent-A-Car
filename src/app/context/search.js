"use client";

import { useContext, createContext, useState } from "react";

// Create Context
export const SearchContext = createContext();

// Provider Component
export const SearchContextProvider = ({ children }) => {
  const [searchActive, setSearchActive] = useState(false);
  return (
    <SearchContext.Provider value={{ searchActive, setSearchActive }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => useContext(SearchContext);
