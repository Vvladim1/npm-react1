const ADD_NEW_POST = "ADD-NEW-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  
    posts: [
      { id: 1, message: "Hello!", likesCounte: 15 },
      { id: 2, message: "how are you!", likesCounte: 20 },
      { id: 3, message: "Very vell!", likesCounte: 18 }
    ],
    newPostText: "it-lesson"
  
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCounte: 0
      };
      if (newPost.message != "") {
        state.posts.push(newPost);
        state.newPostText = "";
      }
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_NEW_POST });
export const updateNewPostTextActionCreator = text => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text
});

export default profileReducer;
