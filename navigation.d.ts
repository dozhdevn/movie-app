import { RootStackParamList } from "./src/navigation/types";

declare global {
    namespace ReactNavigation {
      interface RootParamList extends RootStackParamList {}
    }
  }