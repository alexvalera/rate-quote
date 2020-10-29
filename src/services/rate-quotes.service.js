const RateQuotesService = {
  fetchRates: (loanSize, creditScore, propertyType, occupancy) => {
    console.log('fetching rates in service');
    const options = {
      headers: new Headers({'content-type': 'application/json', 'authorization': 'OU-AUTH c69a3f08-24c3-484a-87a6-943313a15074'}),
  };

    return fetch('https://ss6b2ke2ca.execute-api.us-east-1.amazonaws.com/Prod/quotes?' + new URLSearchParams({
      loanSize,
      creditScore,
      propertyType,
      occupancy
    }), options)
    .then(response => response.json())
    .then(data => data.rateQuotes);
  }
}

export default RateQuotesService;