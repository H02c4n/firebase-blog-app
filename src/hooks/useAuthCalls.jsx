import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getDatabase, ref, set, push } from "firebase/database";
import { useDispatch } from "react-redux";
import firebase from "../auth/firebase";
import { registerSuccess, authStart, authFail, loginSuccess, logoutSuccess } from "../features/authSlice";
import { toastWarnNotify } from "../helpers/toastify";


const useAuthCalls = () => {

    const dispatch = useDispatch();


    const registerUser = async (data) => {
        dispatch(authStart());
        try {
          const auth = getAuth(firebase);
          const db = getDatabase(firebase);
        await createUserWithEmailAndPassword(auth, data.email, data.password);
        const displayName = data.firstName+" "+ data.lastName;
        updateProfile(auth.currentUser, {
          displayName: displayName
        })
        const userRef = ref(db, "users/");
        const newUserRef = push(userRef);
        await set(newUserRef, data);
        dispatch(registerSuccess({...data, displayName:displayName}));
        //console.log(user);
        } catch (error) {
          dispatch(authFail());
        }
    }; 

    const login = async (data)=>{
      dispatch(authStart());
      try {
        const auth = getAuth(firebase);
      await signInWithEmailAndPassword(auth, data.email, data.password);
      const displayName = auth.currentUser.displayName;
      dispatch(loginSuccess({...data, displayName:displayName}));
      } catch (error) {
        dispatch(authFail())
      }
    };

    const logout = async() =>{
      const auth = getAuth(firebase);
      signOut(auth);
      dispatch(logoutSuccess());
      toastWarnNotify("gitme ne olur...")

    }
    
    
  return{
    registerUser,
    login,
    logout,
  }
}

export default useAuthCalls