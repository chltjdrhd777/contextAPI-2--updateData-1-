import React from "react";

type StoreType = {
  notification: { id: number; text: string; seen: boolean }[];
};

// createContext = create storage like redux "createStore"
// createContext(here is a default value structure)
// When proper Provider is not detected, returns this value.
const store = React.createContext<undefined | StoreType>(undefined);

export default store;
