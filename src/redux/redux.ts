
import { IInitialState } from "~/interfaces";

import {responseEntity} from "~/api/mockEntity"
import {IResponse} from '~/interfaces'

export const CHANGE_LANGUAGE = "CHANGE_LANGUAGE";

export function changeLanguage(language: string, initial:boolean, response:IResponse) {
  return {
    type: CHANGE_LANGUAGE,
    language,
    initial,
    response
  };
}

const initialState: IInitialState = {
  textContent: responseEntity,
  initial: true,
  language: "es-ES"
};

export default function Cars(state = initialState, action) {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      state.textContent = action.response;  
      state.initial = action.initial;     
      state.language = action.language;
      return {
        ...state,
        language: state.language,
        textContent: state.textContent,
        initial: state.initial
      };

    default:
      return {
        ...state,
      };
  }
}
