import {createContext, useState} from "react";

export const ChallengesContext = createContext({});

export function ChallengesProvider({children}) {
  const [level, setLevel] = useState(1);

  function levelup() {
    setLevel(level + 1);
  }
  return (
    <ChallengesContext.Provider value={{level, levelup}}>
      {children}
    </ChallengesContext.Provider>
  );
}
