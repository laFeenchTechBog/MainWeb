//import React, { createContext, useState } from 'react';
import * as contentful from "contentful" ;


export const client = contentful.createClient({
    space: "wt2s16c3ibvv",/*process.env.REACT_APP_SPACE_ID,*/
    accessToken: "BNWYg1M8Cz7WS2d_pY8BP9pwSpWOUFK8tiIqHznGyZc" /*process.env.REACT_APP_ACCESS_TOKEN*/
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