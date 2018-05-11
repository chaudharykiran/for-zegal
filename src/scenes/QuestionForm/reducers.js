import { ADD_ANSWER } from './actionCreators';

export default (state = [], action) => {
  switch (action.type) {
    case ADD_ANSWER:
      return {
        ...state, answer: action.payload,
      };
    default:
      return state;
  }
};
