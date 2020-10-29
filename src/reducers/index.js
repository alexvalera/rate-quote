import { SET_LOAN_SIZE, SET_CREDIT_SCORE, SET_RATE_QUOTES, SET_PROPERTY_TYPE, SET_OCCUPANCY } from "../shared/constants";

const initialState = {
  loanSize: null,
  creditScore: null, 
  propertyType: 'Condo', 
  occupancy: 'Primary', 
  rateQuotes: []
};

function rootReducer(state = initialState, action) {
  switch(action.type) {
    case SET_LOAN_SIZE: {
      return { ...state, loanSize: action.payload }
    }
    case SET_CREDIT_SCORE: {
      return { ...state, creditScore: action.payload }
    }
    case SET_PROPERTY_TYPE: {
      return { ...state, propertyType: action.payload }
    }
    case SET_OCCUPANCY: {
      return { ...state, occupancy: action.payload }
    }
    case SET_RATE_QUOTES: {
      return { ...state, rateQuotes: action.payload }
    }
    default:
      return { ...state }; 
  }
};

export default rootReducer;