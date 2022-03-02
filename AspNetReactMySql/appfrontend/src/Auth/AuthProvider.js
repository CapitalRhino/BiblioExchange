import { createContext, useState,useEffect } from "react";
import axios from "../api/axios";
const AuthContext = createContext({});
export const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useState({})
    useEffect(() => {
        const t = async()=>
        {
            try {
                 const res = await axios.post('/Auth/RefreshToken',JSON.stringify({}), {
            withCredentials: true
        });
        setAuth(res.data)
            } catch (error) {
                console.clear()
            }
         
        }
        t()
      }, []);

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;