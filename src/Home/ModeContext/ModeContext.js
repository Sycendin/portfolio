import React, { useState, useContext } from "react";

const ModeContext = React.createContext();
const UpdateModeContext = React.createContext();

export const useMode = () => {
  return useContext(ModeContext);
};

export const useUpdateMode = () => {
  return useContext(UpdateModeContext);
};

export const ModeProvider = ({ value, children }) => {
  const [mode, setMode] = useState(value);
  return (
    <ModeContext.Provider value={mode}>
      <UpdateModeContext.Provider value={setMode}>
        {children}
      </UpdateModeContext.Provider>
    </ModeContext.Provider>
  );
};

export default ModeProvider;
