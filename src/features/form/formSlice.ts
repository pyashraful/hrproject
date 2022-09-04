import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';

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

const initialState = [];

const formSlice = createSlice({
  name: 'form',
  initialState: initialState,
  reducers: {
    addFormField: (state, action: PayloadAction) => {
      state.push(action.payload);
    },
  },
});

export const allFormFields = (state: RootState) => state.form;
// export const allFields = useAppSelector((state) => state.filed);

export const { addFormField } = formSlice.actions;
export default formSlice.reducer;
