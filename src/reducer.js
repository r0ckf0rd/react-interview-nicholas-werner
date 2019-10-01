import { CREATE_DEAL, DELETE_DEAL } from './actions';
import { filter } from 'lodash';

var nextDealId = 3;

const initialState = {
  deals: [
    {
      id: 1,
      institution: 'LS Credit Union',
      dealSize: '1000000',
      dealType: 'Consumer Auto',
      isPublished: true,
    },
    {
      id: 2,
      institution: 'LS Credit Union',
      dealSize: '5000000',
      dealType: 'Real Estate',
      isPublished: false,
    }
  ]
};

export default (state = initialState, { type, payload }) => {
  switch(type) {
    case CREATE_DEAL:
      return { ...state, deals: [ ...state.deals, { ...payload.deal, id: nextDealId++ } ] };
    case DELETE_DEAL:
      const newDeals = filter(state.deals, deal => deal.id !== payload.id);
      return {...state, deals: newDeals };
    default:
      return state;
  }
}
