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
  export const setClassicPlaylist = (payload) => {
    return {
      type: "SET_CLASSIC_PLAYLIST",
      payload,
    };
  };

  export const setRockPlaylist = (payload) => {
    return {
      type: "SET_ROCK_PLAYLIST",
      payload,
    };
  };

  export const setElectronicPlaylist = (payload) => {
    return {
      type: "SET_ELECTRONIC_PLAYLIST",
      payload,
    };
  };

  export const setFavoritePlaylist = (payload) => {
    return {
      type: "SET_FAVORITE_PLAYLIST",
      payload,
    };
  };
  export const setNowPlaylist = (payload) => {
    return {
      type: "SET_NOW_PLAYLIST",
      payload,
    };
  };
