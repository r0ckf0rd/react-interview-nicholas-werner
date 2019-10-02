export const CREATE_DEAL = 'CREATE_DEAL';
export const DELETE_DEAL = 'DELETE_DEAL';
export const MODIFY_DEAL = 'MODIFY_DEAL';

export function createDeal(deal) {
  return {
    type: CREATE_DEAL,
    payload: {
      deal
    }
  }
}

export function deleteDeal(id) {
  return {
    type: DELETE_DEAL,
    payload: {
      id
    }
  }
}


export function modifyDeal(deal) {
  return {
    type: MODIFY_DEAL,
    payload: {
      deal
    }
  }
}