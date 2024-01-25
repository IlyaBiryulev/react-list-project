import { TextField } from '@mui/material';

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchPost = ({ value, onChange }: Props) => {
  return (
    <TextField
      id="outlined-full-width"
      label="Search"
      margin="normal"
      fullWidth
      value={value}
      onChange={onChange}
    />
  );
};

export default SearchPost;
