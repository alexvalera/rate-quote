import './App.css';
import Form from './components/Form/Form';
import RateQuotesTable from './components/RateQuotesTable/RateQuotesTable';
import { connect } from 'react-redux';

function App({ hasRateQuotes }) {
  return (
    <main>
      <Form />
      { hasRateQuotes && <RateQuotesTable /> }
    </main>
  );
}

const mapStateToProps = state => {
  return {
    hasRateQuotes: !!state.rateQuotes.length
  }
}

export default connect(
  mapStateToProps, 
  null
)(App);
