export const required = (value) => {
  return value ? '' : "필수 정보 입니다";
}

export const emailCheck = (value) => {
	return value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 
	'이메일 형식이 아닙니다' : '';
}

export const passwordCheck = (value) => {
	return value && value.length < 8 ? '비밀번호는 8자 이상이어야 합니다.' : '';
}

export const nickNameLengthCheck = (value) => {
	return value && value.length < 2 && value.length > 8 ? '닉네임은 2자 이상 8자 이하여야 합니다.' : '';
}

export const nickNameCheck = (value) => {
	return value && !/[0-9]|[a-z]|[A-Z]|[가-힣]/.test(value) ? 
	'사용하실 수 없는 닉네임 입니다' : '';
}