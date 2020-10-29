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

const Dropdown = ({label, onChangeHandler, options}) => {
  return (
    <Container>
      <Label text={label}/>
      <Select onChange={onChangeHandler}>
        {
          Object.entries(options).map(([k, v]) => {
            return <option key={k} value={k}>{v}</option>
          })
        }
      </Select>
    </Container>
  )
}; 

Dropdown.propTypes = {
  label: PropTypes.string.isRequired, 
  options: PropTypes.object.isRequired, 
  onChangeHandler: PropTypes.func.isRequired
}

export default Dropdown;
