import styled, { keyframes } from 'styled-components';
import LoanSize from '../Fields/LoanSize/LoanSize';
import CreditScore from '../Fields/CreditScore/CreditScore';
import Occupancy from '../Fields/Occupancy/Occupancy';
import PropertyType from '../Fields/PropertyType/PropertyType';
import { getRateQuotes } from '../../middleware/thunks';
import { connect, useDispatch } from "react-redux";

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
    transition: all 0.3s ease;
    padding: 20px;
    background-color: #032d29;
    color: white;
    width: 133px;
    font-size: 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
      background-color: #1b1f1f;
    }
`;

const SpinnerAnimation = keyframes`
    from { transform: rotate (0deg) }, 
    to { transform: rotate(360deg) }
`;

const SpinnerContainer = styled.div`
  width: 133px;
  display: flex; 
  justify-content: center;
`;

const Spinner = styled.div`
  animation: ${SpinnerAnimation} 1s infinite;
  transform: rotate(0deg);
  display: block;
  width: 20px;
  height: 20px;
  border: 2px solid white;
  border-left: 2px solid #1abc9a;
  border-top: 2px solid #1abc9a;
  border-right: 2px solid #1abc9a;
  border-bottom: 2px solid #1abc9a;
  border-radius: 50%;
`;

const Form = ({loanSize, creditScore, propertyType, occupancy, isLoadingRates}) =>  {
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(getRateQuotes(loanSize, creditScore, propertyType, occupancy));
  }
  
  return (
    <StyledForm onSubmit={handleSubmit}>
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
        { isLoadingRates && <SpinnerContainer><Spinner/></SpinnerContainer> }
        { !isLoadingRates && <SubmitButton type="submit">Quote Rates</SubmitButton> }
      </SubmitRow>
    </StyledForm>
  ); 
}

const mapStateToProps = (state) => {
  return {
    isLoadingRates: state.isLoadingRates,
    loanSize: state.loanSize, 
    creditScore: state.creditScore, 
    propertyType: state.propertyType, 
    occupancy: state.occupancy
  }
}

export default connect(
  mapStateToProps, 
  null
)(Form)