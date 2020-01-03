import { act, renderHook } from '@testing-library/react-hooks'
import useForm from '../useForm';

function mockValidation(name: string, value: string) {
  return new Promise(() => {
    if (!value) {
      return 'error';
    }
  
    return '';  
  });
}


describe("useForm Test", () => {
  const values = {
    name: '',
    value: '',
  };

  test('form이 정상적으로 initialize 된다.', () => {
    const { result } = renderHook(() => useForm(values, mockValidation));

    // values check
    expect(result.current[0].values.name).toBe('');
    expect(result.current[0].values.value).toBe('');

    // isValid check
    expect(result.current[1]).toBe(false);

    // isSubmit check
    expect(result.current[2]).toBe(false);
  })

  test('onChange 함수가 정상적으로 작동한다.', () => {
    const { result } = renderHook(() => useForm(values, mockValidation));

    act(() => {
      result.current[3]({target: {
        name: 'name',
        value: 'new name'
      }} as React.ChangeEvent<HTMLInputElement>);
    })

    expect(result.current[0].values.name).toBe('new name');
  })

  test('onBlur 함수가 정상적으로 작동한다.', () => {
    const { result } = renderHook(() => useForm(values, mockValidation));

    act(() => {
      result.current[3]({target: {
        name: 'name',
        value: '',
      }} as React.ChangeEvent<HTMLInputElement>);

      result.current[4]({target: {
        name: 'name',
        value: '',
      }} as React.ChangeEvent<HTMLInputElement>);
    })

    expect(result.current[1]).toBe(false);
    expect(result.current[0].errors.name).toBe('error');
  })
});
