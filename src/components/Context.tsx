import React, { useState, createContext } from "react";
import Cards from "./Cards";
import data from '../data/data.json'

import Profile from "./Profile";

import Footer from "./Footer";

type IState = {

  setUser: () => {};
  value: string;
}

export const UserContext = createContext<any>({});

type ContainerProps = {
  children: React.ReactNode | React.ReactNode[]; //👈 children prop typ
  // children: JSX.Element | JSX.Element[]
};

const INITIAL_ARRAY: any = data

const Context = (props: ContainerProps) => {
  const [periodo, setPeriodo] = useState("Day");
  const [stateArray, setStateArray] = useState(INITIAL_ARRAY)

  return (
    <UserContext.Provider value={{ periodo, setPeriodo, stateArray, setStateArray }}>
      <div className="container">
        <Profile />
        <Cards value={"work"} />
      </div>
        <Footer/>
    </UserContext.Provider>
  );
}

export default Context;