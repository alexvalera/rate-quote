const RateQuotesService = {
  fetchRates: (loanSize, creditScore, propertyType, occupancy) => {
    const options = {
      headers: new Headers({
        'content-type': 'application/json', 
        'authorization': `OU-AUTH ${process.env.REACT_APP_AUTH_KEY || ''}`
      }),
    };

    return fetch('https://ss6b2ke2ca.execute-api.us-east-1.amazonaws.com/Prod/quotes?' + new URLSearchParams({
      loanSize,
      creditScore,
      propertyType,
      occupancy
    }), options)
    .then(res => res.json())
    .then(res => {
      if (res.errors) {
        throw Error(res.errors[0]);
      }
      return res;
    })
    .then(data => data.rateQuotes)
    .catch(err => alert(err)); // want to show error to user, definitely would be a modal of some sort instead of this in production
  }
}

export default RateQuotesService;