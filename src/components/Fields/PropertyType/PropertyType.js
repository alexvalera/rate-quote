import Dropdown from "../../Dropdown/Dropdown"
import { PROPERTY_TYPE_OPTIONS } from '../../../shared/constants';
import { setPropertyType } from "../../../actions/index";
import { connect } from "react-redux";

const PropertyType = (props) => {
  function handleChange(e) {
    console.log(e.target.value);
    props.setPropertyType(e.target.value);
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

const mapDispatchToProps = (dispatch) => {
  return {
    setPropertyType: type => dispatch(setPropertyType(type))
  };
}

export default connect(
  null,
  mapDispatchToProps
)(PropertyType);