import { InputProps } from '@chakra-ui/react';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { itemsProps, Item } from './questions/type';

// export type field = {
//   id: number;
//   name: string;
// };

// const initialState: field[] = [
//   {
//     id: 1,
//     name: 'name',
//   },
// ];

type InitialState = {
  fields: Item[];
};

const initialState: InitialState = {
  fields: [],
};

const formSlice = createSlice({
  name: 'form',
  initialState: initialState,
  reducers: {
    addFormField: (state, action: PayloadAction<Item>) => {
      state.fields.push(action.payload);
    },
    deleteFormField: (state, action: PayloadAction<string>) => {
      return state.fields.filter((field) => {
        console.log(field.id);
        return field.id !== action.payload;
      });
    },
  },
});

export const allFormFields = (state: RootState) => state.form;

export const { addFormField, deleteFormField } = formSlice.actions;
export default formSlice.reducer;
