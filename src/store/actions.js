export const setCurrentTrack = (payload) => {
    return {
      type: "SET_CURRENT_TRACK",
      payload,
    };
  };

  export const setCurrentPlaylist = (payload) => {
    return {
      type: "SET_PLAYLIST",
      payload,
    };
  };
