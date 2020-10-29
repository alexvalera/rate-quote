import TextInput from "../../TextInput/TextInput"
import { setCreditScore } from "../../../actions/index";
import { connect } from "react-redux";


const ConnectedCreditScore = () => {
  function handleChange(e) {
    this.props.setCreditScore(e.target.value);
  }
  return (
    <TextInput
      onChangeHandler={handleChange}
      name="creditScore"
      label="Credit Score"
    />
  )
}

function mapDispatchToProps(dispatch) {
  return {
    setCreditScore: creditScore => dispatch(setCreditScore(creditScore))
  };
}

const CreditScore= connect(
  null,
  mapDispatchToProps
)(ConnectedCreditScore);

export default CreditScore;