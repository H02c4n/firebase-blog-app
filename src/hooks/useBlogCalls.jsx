import { useDispatch } from "react-redux";
import {
  startPhase,
  failPhase,
  loadPosts,
  loadCurrentPost,
} from "../features/blogSlice";
import firebase from "../auth/firebase";
import {
  getDatabase,
  ref,
  push,
  set,
  onValue,
  child,
  get
} from "firebase/database";

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

  const addNewComment = async (commentForm) => {
    const db = getDatabase(firebase);
    const commentListRef = ref(db, `blogs/${commentForm.currentId}/comments/`);
    const newCommentRef = push(commentListRef);
    await set(newCommentRef, commentForm);
  };

  return {
    addNewBlog,
    getPosts,
    getPost,
    addNewComment,
  };
};

export default useBlogCalls;
