import uuid from "uuid/v4";

const DEFAULT_STATE = {
  memes: [
    {
      url: "https://www.dictionary.com/e/wp-content/uploads/2018/03/Upside-Down_Face_Emoji.png",
      topText: "womp womp",
      bottomText: "womp",
      id: 1
    }
  ]
};

function rootReducer(state = DEFAULT_STATE, action) {
  if (action.type === "ADD_MEME") {
    return {
      ...state, 
      memes: [...state.memes, { ...action.meme, id: uuid() } ]
    };
  }
  if (action.type === "REMOVE_MEME") {
    return {
      ...state, 
      memes: state.memes.filter(m => m.id !== action.id)
    };
  }

  return state;
}

export default rootReducer;