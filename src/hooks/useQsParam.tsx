import { useLocation } from "react-router-dom";

export const useQsParam = (string: string) => {
  return new URLSearchParams(useLocation().search).get(string);
};
