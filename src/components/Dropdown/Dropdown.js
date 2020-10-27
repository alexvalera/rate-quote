import Label from "../Label/Label";
import PropTypes from 'prop-types'; 
import styled from 'styled-components'


export const Select = styled.select`
  border: 2px solid #cecece;
  padding: 0.5rem;
  width: 100%;
  margin-top: 5px;

  @media (min-width: 768px) {
    width: 210px;
    margin-left: 1rem;
  }

  @media (min-width: 1024px) {
    width: 270px;
  }
`;

const Container = styled.div``;

const Dropdown = (props) => {
  return (
    <Container>
      <Label text={props.label}/>
      <Select>
        <option value ="Condo">Condo</option>
        <option value ="Townhouse">Townhouse</option>
        <option value ="SingleFamily">Single Family Home</option>
        <option value ="MultiFamily">Multi Family Home</option>
      </Select>
    </Container>
  )
}; 

Dropdown.propTypes = {
  label: PropTypes.string.isRequired, 
  options: PropTypes.object
}

export default Dropdown;
