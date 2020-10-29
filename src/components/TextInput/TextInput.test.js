import { render, screen } from '@testing-library/react'
import TextInput from './TextInput';
test('call onChange Handler', async () => {
  const onChangeHandler = jest.fn();
  render(
  <TextInput
    name="mock"
    label="mock"
    onChangeHandler={onChangeHandler}
  />)
  const input = screen.getByLabelText('mock'); 
  expect(input).toBeTruthy();
})