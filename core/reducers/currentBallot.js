import act from '../actionTypes';
import { sort, prop } from 'ramda';
import { coinToss, swap } from '../services/helpers';

const defaultBallot = {
  order: []
};

const currentBallot = (state=defaultBallot, {type, payload}) => {
  switch (type) {
    case act.CREATE_BALLOT:
      return { ...state, submitting: true }
    case act.BALLOT_CREATION_SUCCEEDED:
      return {
        ...state,
        id: payload.key,
        submitting: false
      };
    case act.DOCKET_FETCH_SUCCEEDED:
      return { 
        ...state,
        order: sort(coinToss, payload.val().members.map(prop('name')))
      };
    case act.MOVE_CANDIDATE:
      return {
        ...state,
        order: swap(payload.dragIndex, payload.hoverIndex, state.order)
      };
    default:
      return state;
  }
}

export default currentBallot;