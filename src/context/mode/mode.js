import {createContext, useState} from "react";

export const modeContext = createContext()

export default function ModeProvider({children}) {
    const [mode, setMode] = useState("dark")
    return <modeContext.Provider value={{mode, setMode}}>{children}</modeContext.Provider>
}