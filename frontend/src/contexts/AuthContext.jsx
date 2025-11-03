import { createContext, useContext, useState } from "react";
import { isLogged, getUser } from "../lib/AuthHandler";

const AuthContext = createContext();

export const AuthProvider = ({ Children }) => {
    const initialLoggedState = isLogged();
    const initialUserState = initialLoggedState ? getUser() : null;

    const [logged, setLogged] = useState(initialLoggedState);
    const [user, setUser] = useState(initialUserState);

    return (
        <AuthContext.Provider value={{ logged, user, setLogged, setUser }}>
            {Children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);