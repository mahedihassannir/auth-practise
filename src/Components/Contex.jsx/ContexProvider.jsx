import React, { createContext } from 'react';

import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import app from './firebase.config';

let auth = getAuth(app)

export const contex = createContext(null)


const ContexProvider = ({ children }) => {


    let handleregister = (email, password) => {

        return createUserWithEmailAndPassword(auth, email, password)



    }



    const mahedi = {
        handleregister,
    }

    return <contex.Provider value={mahedi}>
        {children}
    </contex.Provider>
};




export default ContexProvider;