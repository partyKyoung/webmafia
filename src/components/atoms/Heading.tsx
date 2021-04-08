import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';

interface HeadingProps extends React.HtmlHTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(({
  level,
  ...props
}: HeadingProps, ref) => {
  if (level === 6) {
    return <H6 ref={ref} {...props} />
  }

  if (level === 5) {
    return <H5 ref={ref} {...props} />
  }

  if (level === 4) {
    return <H4 ref={ref} {...props} />
  }

  if (level === 3) {
    return <H3 ref={ref} {...props} />
  }

  if (level === 2) {
    return <H2 ref={ref} {...props} />
  }

  return <H1 ref={ref} {...props} />
});

const styles = css`
  color: ${({theme}) => theme.colors.gray10};
  font-weight: bold;
`;

const H1 = styled.h1`
  ${styles};
  font-size: 2.5rem;
`;

const H2 = styled.h2`
  ${styles};
  font-size: 2rem;
`;

const H3 = styled.h3`
  ${styles};
  font-size: 1.625rem;
`;

const H4 = styled.h4`
  ${styles};
  font-size: 1.5rem;
`;

const H5 = styled.h5`
  ${styles};
  font-size: 1.25rem;
`;

const H6 = styled.h6`
  ${styles};
  font-size: 1.125rem;
`;

export default Heading;
