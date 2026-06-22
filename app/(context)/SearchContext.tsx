import { createContext, Dispatch, SetStateAction } from "react";

interface SearchContextType {
  userSearchInput: string;
  setUserSearchInput: Dispatch<SetStateAction<string>>;
}

const SearchContext = createContext<SearchContextType>({
  userSearchInput: "",
  setUserSearchInput: () => {},
});

export { SearchContext };
