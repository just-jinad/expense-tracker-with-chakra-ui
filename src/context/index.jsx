import { createContext} from "react";


export const Globalcontext = createContext(null)

export default function GlobalState({children}){
   return <Globalcontext.Provider>{children}</Globalcontext.Provider>
}