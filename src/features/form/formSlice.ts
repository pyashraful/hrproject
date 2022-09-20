// eslint-disable-next-line import/named
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { InitialStateProps, ItemProps } from '../../globalType';

// export type field = {
//   id: number;
//   name: string;
// };

const initialState: InitialStateProps = {
  fields: [],
};

const formSlice = createSlice({
  name: 'form',
  initialState: initialState,
  reducers: {
    addFormField: (state, action: PayloadAction<ItemProps>) => {
      state.fields.push(action.payload);
    },
    deleteFormField: (state, action: PayloadAction<string>) => {
      state.fields = state.fields.filter(
        (field) => field.id !== action.payload
      );
    },
  },
});

export const allFormFields = (state: RootState) => state.form;

export const { addFormField, deleteFormField } = formSlice.actions;
export default formSlice.reducer;
