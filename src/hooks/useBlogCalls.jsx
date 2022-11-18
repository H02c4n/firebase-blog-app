import { useDispatch } from 'react-redux';
import {startPhase, successPhase, failPhase} from "../features/blogSlice";
import firebase from '../auth/firebase';
import { getDatabase, ref, push, set } from 'firebase/database';

const useBlogCalls = () => {

    const dispatch = useDispatch();



    const addNewBlog = async (data) => {
        dispatch(startPhase());
        try {
        const db = getDatabase(firebase);
        const blogRef = ref(db, "blogs/");
        const newBlogRef = push(blogRef);
        await set(newBlogRef, data);
        } catch (error) {
          dispatch(failPhase());
        }
    }; 

  return{
    addNewBlog,
  }
}

export default useBlogCalls