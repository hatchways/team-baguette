import { MenuItem, Select } from '@material-ui/core';
import React from 'react';

interface CustomSelectProps {
  id: string;
  cname: string;
  value: string;
  arr: Array<string | number>;
  handleChange: {
    (e: React.ChangeEvent<{ value: unknown }>): void;
    <T = string | React.ChangeEvent<{ value: unknown }>>(field: T): T extends React.ChangeEvent<{ value: unknown }>
      ? void
      : (e: string | React.ChangeEvent<{ value: unknown }>) => void;
  };
}

export const CustomSelect: React.FC<CustomSelectProps> = ({ ...props }) => {
  const { id, cname, value, arr, handleChange } = props;
  return (
    <Select
      id={id}
      className={cname}
      variant="outlined"
      value={value ? value : ''}
      defaultValue=""
      onChange={handleChange(id)}
    >
      {arr.length === 1 ? (
        <MenuItem>Select month first</MenuItem>
      ) : (
        arr.map((value) => (
          <MenuItem value={value} key={value}>
            {value}
          </MenuItem>
        ))
      )}
    </Select>
  );
};
