import styled from 'styled-components'; 

const StyledLabel = styled.label`
display: inline-block;
  font-family: 'Helvetica'; 
  text-align: right;
  width: 100px;
`; 

const Label = (props) => (
  <StyledLabel>{props.text}</StyledLabel>
);

export default Label;