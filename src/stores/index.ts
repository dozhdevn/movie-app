import React from "react";
import { IStore } from "../interfaces";
import user from "./UserStores";

export const storeInstance = {
  user
}

export const storesContext = React.createContext<IStore>(storeInstance)

export const useStores = (): IStore => React.useContext<IStore>(storesContext)