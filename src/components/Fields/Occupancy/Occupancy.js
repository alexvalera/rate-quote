import Dropdown from "../../Dropdown/Dropdown"
import { OCCUPANCY_OPTIONS } from '../../../shared/constants';
import { setOccupancy } from "../../../actions/index";
import { connect } from "react-redux";


const ConnectedOccupancy = (props) => {
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

function mapDispatchToProps(dispatch) {
  return {
    setOccupancy: occupancy => dispatch(setOccupancy(occupancy))
  };
}

const Occupancy= connect(
  null,
  mapDispatchToProps
)(ConnectedOccupancy);

export default Occupancy;