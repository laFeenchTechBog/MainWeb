//import React, { createContext, useState } from 'react';
import * as contentful from "contentful" ;


export const client = contentful.createClient({
    space: process.env.REACT_APP_SPACE_ID,
    accessToken: process.env.REACT_APP_ACCESS_TOKEN
})

// const datos = {}


// export const Context = createContext();



// function AppProvider({children}){
//     const[state, setState] = useState(datos);

//     return(
//     <Context.Provider value={{state, setState}}>{children}</Context.Provider>
//     )
// }

// export default AppProvider;