import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [searchResult, setSearchResult] = React.useState([]);
  const [searching, setSearching] = React.useState(false); 

  return (
    <GlobalContext.Provider value={{ searchResult, setSearchResult, searching, setSearching }}>
      {children}
    </GlobalContext.Provider>
  );
};
