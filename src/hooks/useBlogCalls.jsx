import { useDispatch } from 'react-redux';
import {startPhase, failPhase, loadPosts, loadCurrentPost} from "../features/blogSlice";
import firebase from '../auth/firebase';
import { getDatabase, ref, push, set, onValue, child, get} from 'firebase/database';

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

    const getPosts = () =>{
      dispatch(startPhase());
    const db = getDatabase(firebase);
    const starCountRef = ref(db, 'blogs/');
    onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    const postsArray = [];
    for (const id in data) {
        postsArray.push({id, ...data[id]})
    }
    dispatch(loadPosts(postsArray));
    });
    };

    const getPost = async(postId) =>{
      dispatch(startPhase());
    const db = getDatabase(firebase);
    const starCountRef = ref(db, 'blogs/' +"-NH7_E4QH_2jceapzjFC"+ "/startCount");
    onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    dispatch(loadCurrentPost(data));
    console.log(data);
    });
    };

  return{
    addNewBlog,
    getPosts,
    getPost,
  }
}

export default useBlogCalls