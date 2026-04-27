import { useContext } from "react";
import { AuthContext } from "../services/auth.context";
import { login, register, logout, getMe} from "../services/auth.api"

export const useAuth = () =>{

    const context = useContext(AuthContext)
    const {user,setUser,loading,setLoading} = context


    const handleLogin = async({email,password}) => {
        setLoading(true)

        const data = await login({email,password})

        if (data?.user) {
            setUser(data.user)
        } else {
            console.error("Login failed:", data?.error);
        }

        setLoading(false)
    }

    const handleRegister = async({username,email,password}) => {
        setLoading(true)

        const data = await register({username, email, password})

        setUser(data.user)
        setLoading(false)

    }

    const handleLogout = async() => {
        setLoading(true)
        const data = await logout()
        setUser(null)
        setLoading(false)
    }

    return {user,loading, handleRegister, handleLogin, handleLogout}
}