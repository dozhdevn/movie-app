import React from "react";
import { IStore } from "../interfaces";
import auth from "./AuthStore";
import user from "./UserStore"
import stories from "./StoriesStore"
import cards from "./CardsStore"

export const storeInstance = {
  auth,
  user,
  stories,
  cards
}

export const storesContext = React.createContext<IStore>(storeInstance)

export const useStores = (): IStore => React.useContext<IStore>(storesContext)