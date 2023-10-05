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
      
    //   case "TOGGLE_IS_MODAL_OPEN":
    //     return {
    //       ...state,
    //       isModalOpen: !state.isModalOpen,
    //     };
     
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