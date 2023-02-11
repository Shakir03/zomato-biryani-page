import { createContext, useContext } from "react";

const RestrauntsContext = createContext();

export function useRestrauntsContext() {
  return useContext(RestrauntsContext);
}

export default RestrauntsContext;
