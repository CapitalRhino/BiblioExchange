import axios from "../api/axios";
import useAuth from "./useAuth";

const useLogout = () => {
    const { setAuth } = useAuth();

    const logout = async () => {
        setAuth({});
        try {
            const response = await axios.post('/Auth/Logout',JSON.stringify({}), {
                withCredentials: true
            });
        } catch (err) {
        }
    }

    return logout;
}

export default useLogout