import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function audioPlayer(state = initialState.audioPlayer, action) {
  switch(action.type) {
    case types.PLAY_SONG:
      return {
        ...state,
        song: action.song,
        status: "PLAYING"
      };

    case types.RESUME_SONG:
      return {
        ...state,
        status: "PLAYING"
      };

    case types.CHANGE_SONG:
      return {
        ...state,
        song: action.song,
        position: 0
      };

    case types.PAUSE_SONG:
      return {
        ...state,
        status: "STOPPED"
      };

    case types.VOLUME_CHANGE:
      return {
        ...state,
        volume: action.volume
      };

    case types.POSITION_CHANGED:
      return {
        ...state,
        position: action.position,
        duration: action.duration
      };

    case types.POSITION_CHANGED_FROM_SLIDER:
      return {
        ...state,
        position: action.position
      };

    case types.CLEAR_AUDIO_PLAYER:
      return Object.assign(initialState.audioPlayer);

    default:
      return state;
  }
}
