import { useContext } from "react";
import { AllLists } from "../context/index";

export const useLists = () => useContext(AllLists)