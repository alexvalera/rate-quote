import Label from "../Label/Label";
import PropTypes from 'prop-types'; 
import styled from 'styled-components';

const Input = styled.input`
  margin-left: 1rem;
  border: 2px solid #cecece;
  padding: 0.5rem;
  width: 250px;
`

const Container = styled.div``;

const TextInput = (props) => {
  return (
    <Container>
      <Label text={props.label}/>
      <Input type="text"/>
    </Container>
  )
}; 

TextInput.propTypes = {
  label: PropTypes.string.isRequired
}

export default TextInput; 