import Dropdown from "../../Dropdown/Dropdown"
import { OCCUPANCY_OPTIONS } from '../../../shared/constants';
import { setOccupancy } from "../../../actions/index";
import { connect } from "react-redux";


const Occupancy = (props) => {
  function handleChange(e) {
    console.log(e.target.value);
    props.setOccupancy(e.target.value);
  }
  return (
    <Dropdown 
      name="occupancy"
      label="Occupancy"
      options={OCCUPANCY_OPTIONS}
      onChangeHandler={handleChange}
  />
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    setOccupancy: occupancy => dispatch(setOccupancy(occupancy))
  };
}

export default connect(
  null,
  mapDispatchToProps
)(Occupancy);
