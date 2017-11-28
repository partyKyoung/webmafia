const required = (value) => {
  return value ? '' : "필수 정보 입니다";
}

const emailTypeCheck = (value) => {
	return value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 
		'이메일 형식이 아닙니다' : '';
}

export const checkEmail = (value) => {
  let isError = false;
  let validationText = '';
}