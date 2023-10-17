const initialState = {
    currentTrack: null,
    currentPlaylist: []
    
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_CURRENT_TRACK":
        return {
          ...state,
          currentTrack: action.payload,
        };
      
      case "SET_PLAYLIST":
        return {
          ...state,
          currentPlaylist: action.payload,
        };
     
    //   case "RESET_ACTIVE_FLAGS":
    //     return {
    //       ...state,
    //       activeRobotPart: null,
    //     };
  
      default:
        return state;
    }
  };
  
  export default rootReducer;