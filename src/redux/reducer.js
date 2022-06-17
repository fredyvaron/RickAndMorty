import { DETAILS_EPISODES, FILTER_GENDER, FILTER_SPECIE, FILTER_STATUS, GET_ALL_CHARACTERS, GET_DETAIL_CHARACTER, RESET_DETAIL, SEARCH_CHARACTER, SEARCH_CHARACTER_NAME } from "./action";

const initialState = {
    AllCharacters: [],
    Characters: [],
    Info: [],
    Detail: {},
    Episodes: [],


}

const rootReducer = (state = initialState, { type, payload, episod }) => {
switch (type) {
    case GET_ALL_CHARACTERS:
        return{
            ...state,
            Characters: payload.results,
            AllCharacters: payload.results,
            Info: payload.info,

        }
    case GET_DETAIL_CHARACTER:
        console.log({payload});
        return{
            ...state,
            Detail: payload,
            Episodes: episod,
        }
    case SEARCH_CHARACTER:
        return{
            ...state,
            Characters: payload.results,
            Info: payload.info,
        }
    case SEARCH_CHARACTER_NAME:
        return{
            ...state,
            Characters: payload.results,
            Info: payload.info,
        }
    case RESET_DETAIL:
        return{
            ...state,
            Detail: payload,
            Episodes: payload,
        }
    case DETAILS_EPISODES:
        return{
            ...state,
            Episodes: payload.results,
        }
    case FILTER_STATUS:
        return{
            ...state,
            Characters: payload.results,
            Info: payload.info,
        }
    case FILTER_GENDER:
        return{
            ...state,
            Characters: payload.results,
            Info: payload.info
        }
    case FILTER_SPECIE:
        return{
            ...state,
            Characters: payload.results,
            Info: payload.info
        }
    default:
        return{
            ...state,
        }
}

}

export default rootReducer;