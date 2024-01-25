import { CircularProgress, Container, Stack } from '@mui/material';

export const CustomLoader = () => {
  return (
    <Container maxWidth="sm">
      <Stack justifyContent="center" alignItems="center">
        <CircularProgress />
      </Stack>
    </Container>
  );
};
