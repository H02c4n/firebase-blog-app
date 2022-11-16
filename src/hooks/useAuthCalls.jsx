import { getDatabase, ref, set, push} from "firebase/database";
import { useDispatch } from "react-redux";
import firebase from "../auth/firebase";
import { registerSuccess, authStart, authFail } from "../features/authSlice";

const useAuthCalls = () => {

    const dispatch = useDispatch();


    const registerUser = async (data) => {
        dispatch(authStart());
        const db = getDatabase(firebase);
        try {
          const userRef = ref(db, "users/");
          const newUserRef = push(userRef);
          await set(newUserRef, data);
          dispatch(registerSuccess(data));
        } catch (error) {
          dispatch(authFail());
        }
    }; 

    const login = async(data)=>{
        console.log("naber");
    }
    
    
  return{
    registerUser,
    login
  }
}

export default useAuthCalls