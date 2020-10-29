import styled from 'styled-components';
import LoanSize from '../Fields/LoanSize/LoanSize';
import CreditScore from '../Fields/CreditScore/CreditScore';
import Occupancy from '../Fields/Occupancy/Occupancy';
import PropertyType from '../Fields/PropertyType/PropertyType';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 900px; 
  margin: 0 auto; 
`; 

const Row = styled.div`
  display: flex; 
  margin: 0 1rem;
  flex-direction: column;
  @media (min-width: 768px) {
    margin: 2rem auto 0;
    flex-direction: row; 
  }
`;

const Column = styled.div`
  margin: 1rem 0;
  @media (min-width: 768px) {
    &:nth-child(2) {
      margin-left: 50px;
    }
  }
`;

const SubmitRow = styled(Row)`
  margin: 1rem 33px;
  justify-content: flex-end; 
`;

const SubmitButton = styled.button`
    padding: 20px;
    background-color: #032d29;
    color: white;
    width: 133px;
    font-size: 15px;
    border: none;
    border-radius: 4px;
`;

const Form = () => (
  <StyledForm>
    <Row>
      <Column>
        <LoanSize/>
      </Column>
      <Column>
        <PropertyType/>
      </Column>
    </Row>
    <Row>
      <Column>
        <CreditScore/>
      </Column>
      <Column>
        <Occupancy/>
      </Column>
    </Row>
    <SubmitRow>
      <SubmitButton>Quote Rates</SubmitButton>
    </SubmitRow>
  </StyledForm>
); 

export default Form; 