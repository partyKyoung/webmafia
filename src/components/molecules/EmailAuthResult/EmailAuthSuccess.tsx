import React from 'react';
import styled from 'styled-components';

import Link from '@/components/atoms/Link';
import UserTitle from '../UserTitle';

const Wrapper = styled.section`
  width: 100%;
  margin: 0 auto;
  max-width: 440px;
  text-align: center;

  p {
    margin-bottom: 1rem;
    font-size: 1rem;
    line-height: 1.5;
  }

  strong {
    font-size: 1.25rem;
  }

  button {
    width: 100%;
    margin-bottom: 1rem;
  }
`;

interface EmailAuthSuccessProps {
  email: string
}

const EmailAuthSuccess = ({email}: EmailAuthSuccessProps): JSX.Element => {
  return (
    <>
    <UserTitle>
      이메일 인증 완료
    </UserTitle>
    <Wrapper>
      <p>
        <strong>{email}</strong>
        <br/>
        이메일 인증이 완료 되었습니다!
      </p>
      <Link variant="outlined" to="/user/login">로그인하러 가기</Link>
    </Wrapper>
    </>
  )
}

export default EmailAuthSuccess;