import { SET_LOAN_SIZE, SET_CREDIT_SCORE, SET_PROPERTY_TYPE, SET_OCCUPANCY, SET_RATE_QUOTES, SET_RATES_LOADING } from "../shared/constants";

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

export function setRatesLoading(payload) {
  return {type : SET_RATES_LOADING, payload }
}