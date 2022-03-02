import useAuth from '../Auth/useAuth';
import axios from '../api/axios';
function useRefreshTokens() {
    const { setAuth } = useAuth();
    const refresh = async () => {
        const response = await axios.post('/Auth/RefreshToken',JSON.stringify({}), {
            withCredentials: true
        });
        console.log('hello');
        setAuth(response?.data);
        return response.data.accessToken 
    }
    return refresh;
}

export default useRefreshTokens