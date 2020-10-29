import TextInput from "../../TextInput/TextInput"
import { setLoanSize } from "../../../actions/index";
import { connect } from "react-redux";


const ConnectedLoanSize = () => {
  function handleChange(e) {
    this.props.setLoanSize(e.target.value);
  }
  return (
    <TextInput
      onChangeHandler={handleChange}
      name="loan"
      label="Loan Size"
    />
  )
}

function mapDispatchToProps(dispatch) {
  return {
    setLoanSize: loanSize => dispatch(setLoanSize(loanSize))
  };
}

const LoanSize= connect(
  null,
  mapDispatchToProps
)(ConnectedLoanSize);

export default LoanSize;