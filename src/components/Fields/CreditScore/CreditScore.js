import TextInput from "../../TextInput/TextInput"
import { setCreditScore } from "../../../actions/index";
import { connect } from "react-redux";


const CreditScore = ({ setCreditScore }) => {
  function handleChange(e) {
    setCreditScore(e.target.value);
  }
  return (
    <TextInput
      onChangeHandler={handleChange}
      name="creditScore"
      label="Credit Score"
      maxLength={3}
    />
  )
}

const mapDispatchToProps = dispatch => ({
  setCreditScore: creditScore => dispatch(setCreditScore(creditScore))
});

export default connect(
  null,
  mapDispatchToProps
)(CreditScore);