import styled from 'styled-components';
const Table = styled.table`
  width: 100%;
  max-width: 880px;
  margin: 0 auto;
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

const RateQuotesTable = () => (
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
      <Row>
        <Cell>Thing</Cell>
        <Cell>Thing</Cell>
        <Cell>Thing</Cell>
        <Cell>Thing</Cell>
        <Cell>Thing</Cell>
        <Cell>Thing</Cell>
      </Row>
    </tbody>
  </Table>
);

export default RateQuotesTable;