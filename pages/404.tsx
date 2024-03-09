import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';;

const Paragraph = styled.p.attrs({
  className: 'main__description',
})``;

const NotFoundPage = () => {
  return (
    <>
      <div className="main common">
        <section className="main__section">
          <h1 className="main__title">404 - Not Found</h1>
          <Paragraph>
            The page you are looking for does not exist.{' '}
            <Link href="/">Go home</Link>.
          </Paragraph>
        </section>
      </div>
    </>
  );
};

export default NotFoundPage;
