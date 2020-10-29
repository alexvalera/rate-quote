import TextInput from "../../TextInput/TextInput"
import { setLoanSize } from "../../../actions/index";
import { connect } from "react-redux";


const LoanSize = ({ setLoanSize }) => {
  function handleChange(e) {
    const formattedNum = formatNumber(e.target.value); 
    console.log(formattedNum);
    setLoanSize(e.target.value);
  }
  function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <TextInput
      onChangeHandler={handleChange}
      name="loan"
      label="Loan Size"
      maxLength={6}
    />
  )
}

const mapDispatchToProps = dispatch => ({
  setLoanSize: loan => dispatch(setLoanSize(loan)),
});

export default connect(
  null,
  mapDispatchToProps
)(LoanSize);