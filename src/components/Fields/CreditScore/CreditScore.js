import TextInput from "../../TextInput/TextInput"
import { setCreditScore } from "../../../actions/index";
import { connect } from "react-redux";
import { useState } from 'react';

const CreditScore = ({ setCreditScore }) => {
  const [value, setValue] = useState('');

  function handleChange(e) {
    // format
    const replaceRegex = new RegExp(`[^0-9]+`);
    const userInput = e.target.value.replace(replaceRegex, '');
    
    setCreditScore(userInput);
    setValue(userInput);
  }
  return (
    <TextInput
      onChangeHandler={handleChange}
      name="creditScore"
      label="Credit Score"
      maxLength={3}
      isControlled={true}
      value={value}
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