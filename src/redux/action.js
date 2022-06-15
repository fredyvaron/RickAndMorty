import axios from "axios";
export const GET_ALL_CHARACTERS = "GET_ALL_CHARACTERS";
export const GET_DETAIL_CHARACTER = "GET_DETAIL_CHARACTER";
export const SEARCH_CHARACTER = "SEARCH_CHARACTER";
export const RESET_DETAIL = "RESET_DETAIL";
export const DETAILS_EPISODES = "DETAILS_EPISODES";
export const FILTER_STATUS = "FILTER_STATUS";
export const FILTER_GENDER = "FILTER_GENDER";
export const FILTER_SPECIE = "FILTER_SPECIE";

export const get_all_characters = (payload) => {
    return async (dispatch) => {
        const json = await axios.get(payload);
        dispatch({ type: GET_ALL_CHARACTERS, payload: json.data });
    }
}
export const get_detail_character = (payload) => {
    return async(dispatch) =>{
        const json = await axios.get(`https://rickandmortyapi.com/api/character/${payload}`);
        console.log(json.data);
        let epi = [];
        let a = await Promise.all(json.data.episode.map(x => axios(x)
        .then((res) => res.data)
        .then((res) => epi.push(res))
        .catch(err => console.log(err)))
      );
        console.log(epi);
        dispatch({type: GET_DETAIL_CHARACTER, payload: json.data , episod: epi});
    }
}
export const search_chacter= (character, filter) =>{
    return async(dispatch)=>{
    
        const json = await axios.get(`https://rickandmortyapi.com/api/character/?name=${character}&status=${filter.status}&species=${filter.species}&gender=${filter.gender}`);
        dispatch({type: SEARCH_CHARACTER, payload: json.data});
    }

}
export const Details_Episodes = (payload) =>{
    return async(dispatch)=>{
        const json = await axios.get(`https://rickandmortyapi.com/api/episode/${payload}`);
        console.log(json.data); 
        dispatch({type: DETAILS_EPISODES, payload: json.data});
    }
}
export const Filter_Status = (status) =>{
    return async(dispatch)=>{
        const json = await axios.get(`https://rickandmortyapi.com/api/character/?status=${status}`);
        dispatch({type: FILTER_STATUS, payload: json.data});
    }
}
export const Filter_Gender = (gender)=>{
    return async(dispatch)=>{
        const json = await axios.get(`https://rickandmortyapi.com/api/character/?name=&gender=${gender}`);
        dispatch({type: FILTER_GENDER, payload: json.data})
    }
}
export const Filter_Specie = (specie)=>{
    return async(dispatch)=>{
        const json = await axios.get(`https://rickandmortyapi.com/api/character/?name=&species=${specie}`);
        console.log(json)
        dispatch({type: FILTER_SPECIE, payload: json.data})
    }
}

export const Reset_detail = () =>{
    return({type: RESET_DETAIL, payload: {}})

}
