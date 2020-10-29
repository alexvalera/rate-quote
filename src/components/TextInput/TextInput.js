import Label from "../Label/Label";
import PropTypes from 'prop-types'; 
import styled from 'styled-components';

export const Input = styled.input`
  width: calc(100% - 20px);
  border: 2px solid #cecece;
  padding: 0.5rem;
  margin-top: 5px;

  @media (min-width: 768px) {
    margin-left: 1rem;
    flex-direction: column;
    width: 190px;
  }

  @media (min-width: 1024px) {
    width: 250px;
  }
`;

const Container = styled.div``;

const TextInput = ({label, name, maxLength, onChangeHandler, value}) => (
  <Container>
    <Label text={label} association={name}/>
    <Input 
      onChange={onChangeHandler}
      type="text"
      id={name}
      name={name}
      aria-label={name}
      maxLength={maxLength || ''}
      value={value}
    />
  </Container>
)

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  maxLength: PropTypes.number,
  onChangeHandler: PropTypes.func.isRequired, 
  value: PropTypes.string
}

export default TextInput; 