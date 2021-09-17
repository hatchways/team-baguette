import { MenuItem, Select } from '@material-ui/core';
import React from 'react';

interface CustomSelectProps {
  id: string;
  cname: string;
  value: string;
  arr: any[];
  handleChange: {
    (e: React.ChangeEvent<any>): void;
    <T = string | React.ChangeEvent<any>>(field: T): T extends React.ChangeEvent<any>
      ? void
      : (e: string | React.ChangeEvent<any>) => void;
  };
}

export const CustomSelect: React.FC<CustomSelectProps> = ({ ...props }) => {
  const { id, cname, value, arr, handleChange } = props;
  return (
    <Select id={id} className={cname} variant="outlined" value={value} onChange={handleChange(id)}>
      {arr.map((value) => (
        <MenuItem value={value} key={value}>
          {value}
        </MenuItem>
      ))}
    </Select>
  );
};
