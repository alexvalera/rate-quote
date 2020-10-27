import styled from 'styled-components'; 

const StyledLabel = styled.label`
  display: block;
  font-family: 'Helvetica'; 

  @media (min-width: 768px) {
    width: 100px;
    display: inline-block;
    text-align: right;
  }
`; 

const Label = (props) => (
  <StyledLabel>{props.text}</StyledLabel>
);

export default Label;