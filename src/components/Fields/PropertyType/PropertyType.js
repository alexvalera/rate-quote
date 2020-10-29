import Dropdown from "../../Dropdown/Dropdown"
import { PROPERTY_TYPE_OPTIONS } from '../../../shared/constants';
import { setPropertyType } from "../../../actions/index";
import { connect } from "react-redux";


const ConnectedPropertyType = (props) => {
  function handleChange(e) {
    console.log(e.target.value);
    props.setProperty(e.target.value);
  }
  return (
    <Dropdown 
      name="property"
      label="Property Type"
      options={PROPERTY_TYPE_OPTIONS}
      onChangeHandler={handleChange}
    />
  )
}

function mapDispatchToProps(dispatch) {
  return {
    setPropertyType: type => dispatch(setPropertyType(type))
  };
}

const PropertyType = connect(
  null,
  mapDispatchToProps
)(ConnectedPropertyType);

export default PropertyType;