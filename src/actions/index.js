import { SET_LOAN_SIZE, SET_CREDIT_SCORE, SET_PROPERTY_TYPE, SET_OCCUPANCY, SET_RATE_QUOTES } from "../shared/constants";
import RateQuotesService from "../services/rate-quotes.service";

// actions
export function setCreditScore(payload) {
  return { type: SET_CREDIT_SCORE, payload };
}

export function setPropertyType(payload) {
  return { type: SET_PROPERTY_TYPE, payload };
}

export function setOccupancy(payload) {
  return { type: SET_OCCUPANCY, payload };
}

export function setLoanSize(payload) {
  return { type: SET_LOAN_SIZE, payload };
}

export function setRateQuotes(payload) {
  return { type : SET_RATE_QUOTES, payload }; 
}

//thunks
export function getRateQuotes(loanSize, creditScore, propertyType, occupancy) {
  return function(dispatch) {
    return RateQuotesService.fetchRates(loanSize, creditScore, propertyType, occupancy)
      .then(rates => dispatch(setRateQuotes(rates))
    )
  }
}