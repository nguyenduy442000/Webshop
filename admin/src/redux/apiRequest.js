import { loginFailed, loginStart, loginSuccess, logoutStart, registerFailed, registerStart, registerSuccess ,logoutSuccess,logoutFailed} from "./authSlice"
import API from "../api/apiConfig"
import { deleteUserStart, deleteUserSuccess,deleteUserFailed, getUsersFailed, getUsersStart, getUsersSuccess } from "./userSlice";
export const loginUser = async(user,dispatch,navigate) =>{
    dispatch(loginStart());
    try{
        const res = await API.post('auth/login',user);
        dispatch(loginSuccess(res.data));
        navigate('/')
    }catch (err){
        dispatch(loginFailed())
    }
}

export const registerUser  = async(user,dispatch,navigate)=>{
    dispatch(registerStart());
    try{
        await API.post('auth',user)
        dispatch(registerSuccess());
        navigate('/login')
    }catch(err){
        dispatch(registerFailed());
    }
}

export const getAllUsers = async (accessToken, dispatch)=>{
    dispatch(getUsersStart());
    try{
        const res = await API.get('api/user',{
            headers: {token:`Bearer ${accessToken}`}
        });
        
        dispatch(getUsersSuccess(res.data))
    
     
    }catch(err){
        dispatch(getUsersFailed())
    }
}

export const deleteUser = async (accessToken,dispatch,id)=>{
    dispatch(deleteUserStart());
    try{
        const res = await API.delete("/api/user/"+id,{
            headers:{
                token: `Bearer ${accessToken}`
            }
        })
        dispatch(deleteUserSuccess(res.data));
        
    }
    catch(err){
        dispatch(deleteUserFailed(err.response.data))
       
    }
}

export const logOut = async (dispatch,navigate,accessToken,id)=>{
    dispatch(logoutStart());
    try{
        await API.post("auth/logout",id,{
            headers:{token:`Bearer ${accessToken}`}
        });
        dispatch(logoutSuccess())
        navigate('/login')
    }catch(err){
        dispatch(logoutFailed())
    }
}