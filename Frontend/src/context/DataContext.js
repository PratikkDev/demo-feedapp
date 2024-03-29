/* eslint-disable prettier/prettier */
import React, { createContext, useState } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [feedData, setFeedData] = useState([]);
  const [newFeedData, setNewFeedData] = useState([]);

  return (
    <DataContext.Provider
      value={{ feedData, setFeedData, newFeedData, setNewFeedData }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
