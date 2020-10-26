import styled from 'styled-components';
import Dropdown from '../Dropdown/Dropdown';
import TextInput from '../TextInput/TextInput';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 900px; 
  margin: 0 auto; 
`; 

const Row = styled.div`
  display: flex; 
  margin: 2rem auto 0;
`;

const Column = styled.div`
  &:nth-child(2) {
    margin-left: 50px;
  }
`;

const Form = () => (
  <StyledForm>
    <Row>
      <Column>
        <TextInput label="Loan Size"/>
      </Column>
      <Column>
          <Dropdown label="Property Type"/>
      </Column>
    </Row>
    <Row>
      <Column>
        <TextInput label="Credit Score"/>
      </Column>
      <Column>
        <TextInput label="Loan Size"/>
      </Column>
    </Row>
  </StyledForm>
); 

export default Form; 