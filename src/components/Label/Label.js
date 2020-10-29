import PropTypes from 'prop-types'; 
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

const Label = ({association, text}) => (
  <StyledLabel aria-labelledby={association}>{text}</StyledLabel>
)

Label.propTypes = {
  association: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default Label;