import JwtDecode from 'jwt-decode'

const useCurrentUser = () => {
    const token = sessionStorage.getItem('authToken');
    const user = JwtDecode(token).user;
    return user;
}

export default useCurrentUser