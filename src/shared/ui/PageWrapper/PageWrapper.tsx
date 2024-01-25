import { ReactNode } from 'react';
import { Container } from '@mui/material';
import classNames from 'classnames';

import styles from './PageWrapper.module.scss';

interface Props {
  children: ReactNode;
  className?: string;
}

export const PageWrapper = ({ children, className }: Props) => {
  return (
    <Container className={classNames(styles.page_wrapper, className)} maxWidth="lg">
      {children}
    </Container>
  );
};
