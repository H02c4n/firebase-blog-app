import { useDispatch } from "react-redux";
import {
  startPhase,
  failPhase,
  loadPosts,
  loadCurrentPost,
  setCurrentCategory,
  setLastFivePosts,
} from "../features/blogSlice";
import firebase from "../auth/firebase";
import {
  getDatabase,
  ref,
  push,
  set,
  onValue,
  child,
  get,
  remove,
  query,
  limitToLast
} from "firebase/database";

const useBlogCalls = () => {


  const dispatch = useDispatch();

  // Add a new blog to database
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

  // Get all post from database and set these posts to store
  const getPosts = () => {
    dispatch(startPhase());
    const db = getDatabase(firebase);
    const starCountRef = ref(db, "blogs/");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      const postsArray = [];
      for (const id in data) {
        postsArray.push({ id, ...data[id] });
      }
      dispatch(loadPosts(postsArray));
    });
  };

  // Get only one post that is current Post
  const getPost = (postId) => {
    dispatch(startPhase());
    const dbRef = ref(getDatabase(firebase));
    get(child(dbRef, `blogs/${postId}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const singlePost = snapshot.val();
          dispatch(loadCurrentPost(singlePost));
          localStorage.setItem("currentPost", JSON.stringify(singlePost));
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };


  // Add new comment to current post in firebase 
  const addNewComment = async (commentForm) =>{
    const db = getDatabase(firebase);
    const commentListRef = ref(db, `blogs/${commentForm.currentId}/comments/`);
    const newCommentRef = push(commentListRef);
    await set(newCommentRef, commentForm);
  };


  // Add like to current post in firebase
  const addLike = async (id, currentUserEmail) =>{
    const db = getDatabase(firebase);
    
    const likeListRef = ref(db, `blogs/${id}/like/`);
    const newLikeRef = push(likeListRef);
    await set(newLikeRef, currentUserEmail);
  }

  // Remove like from firebase if currentUser liked before
  const removeLike = async(id, willRemove) => {
    const db = getDatabase(firebase);
    const likeRef = ref(db, `blogs/${id}/like/${willRemove}`);
    await remove(likeRef);
  }

  // set current posts category to store
  const updateCurrentCategory =(currentCategory)=>{
    dispatch(setCurrentCategory(currentCategory));
  }


  // get last five posts from firebase
  const getLastFivePosts = ()=>{
    const db = getDatabase(firebase);
    const starCountRef = query(ref(db, "blogs"), limitToLast(5));
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      const lastFivePosts = [];
      for (const id in data) {
        lastFivePosts.push({ id, ...data[id] });
      }
      dispatch(setLastFivePosts(lastFivePosts));
    }); 
  }

  return {
    addNewBlog,
    getPosts,
    getPost,
    addNewComment,
    addLike,
    removeLike,
    updateCurrentCategory,
    getLastFivePosts,
  };
};

export default useBlogCalls;
