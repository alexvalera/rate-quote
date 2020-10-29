import { setRateQuotes, setRatesLoading } from '../actions/index';
import RateQuotesService from "../services/rate-quotes.service";

export function getRateQuotes(loanSize, creditScore, propertyType, occupancy) {
  return function(dispatch) {
    dispatch(setRatesLoading(true))
    return RateQuotesService.fetchRates(loanSize, creditScore, propertyType, occupancy)
      .then(rates => {
        dispatch(setRateQuotes(rates || []));
        dispatch(setRatesLoading(false));
      }
    )
  }
}