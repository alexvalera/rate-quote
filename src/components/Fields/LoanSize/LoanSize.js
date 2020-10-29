import TextInput from "../../TextInput/TextInput"
import { setLoanSize } from "../../../actions/index";
import { connect } from "react-redux";
import { useState } from 'react';
import { formatNumber, sanitizeNumber } from '../../../utilities/utilities'

const LoanSize = ({ setLoanSize }) => {
  const [value, setValue] = useState('');

  function handleChange(e) {
    if (!e.target.value || e.target.value === '$') {
      setValue('');
      setLoanSize('');
      return;
    }

    // sanitize and format 
    const sanitizedInput = sanitizeNumber(e.target.value);
    const replaceRegex = new RegExp(`[^0-9]+`);
    const userInput = sanitizedInput.replace(replaceRegex, '');
    const formattedNum = formatNumber(userInput); 

    setValue(formattedNum);
    setLoanSize(sanitizeNumber(e.target.value));
  }

  return (
    <TextInput
      onChangeHandler={handleChange}
      name="loan"
      label="Loan Size"
      maxLength={8}
      isControlled={true}
      value={value}
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