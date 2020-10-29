import styled, { keyframes } from 'styled-components';
import { connect } from 'react-redux';
import { formatNumber } from '../../utilities/utilities';

const FadeUpAnimation = keyframes`
  from {transform: translateY(10px); opacity: 0; }
  to {transform: translateY(0px); opacity: 1; }
`; 

const Table = styled.table`
  animation: ${FadeUpAnimation} 0.5s; 
  animation-fill-mode: forwards;
  transform: translateY(0px); 
  width: 100%;
  max-width: 880px;
  margin: 1rem auto;
  border-collapse: collapse;
  border: 1px solid #ddd;
  font-size: 14px;
`; 

const Header = styled.th`
  text-transform: uppercase;
  color: #777;
  font-weight: 300;
  border-bottom: 1px solid #ddd;
  padding: 10px;
  width: 16.66%;
`;

const Cell = styled.td`
  text-transform: uppercase;
  color: black;
  padding: 20px 10px;
  width: 16.66%;
  text-align: center;
`

const Row = styled.tr`
  padding: 5px; 
`;

const RateQuotesTable = ({ rateQuotes }) => {
  return (
    <Table>
      <tbody>
        <Row>
          <Header>Lender</Header>
          <Header>Product</Header>
          <Header>Rate</Header>
          <Header>Closing Costs</Header>
          <Header>Monthly Payments</Header>
          <Header>APR</Header>
        </Row>
        {
          rateQuotes.map((rate) => {
            return (
              <Row key={rate.lenderName + rate.loanType}>
                <Cell>{rate.lenderName}</Cell>
                <Cell>{rate.loanType}</Cell>
                <Cell>{rate.interestRate.toFixed(3)}%</Cell>
                <Cell>{formatNumber(rate.closingCosts.toFixed(2))}</Cell>
                <Cell>{formatNumber(rate.monthlyPayment.toFixed(2))}</Cell>
                <Cell>{rate.apr.toFixed(3)}%</Cell>
              </Row>
            )
          })
        }
      </tbody>
    </Table>
  );
}


const mapStateToProps = state => {
  return {
    rateQuotes: state.rateQuotes
  }
}

export default connect(
  mapStateToProps,
  null
)(RateQuotesTable)