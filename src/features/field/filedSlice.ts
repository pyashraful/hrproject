import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { field } from '../../data';

// type field = {
//   id: number;
//   name: string;
// };

const initialState = field;

const filedSlice = createSlice({
  name: 'field',
  initialState: initialState,
  reducers: {
    addField: (state, action: PayloadAction) => {
      // state.push(action.payload);
      state.push(action.payload);
    },
  },
});

export const allFields = (state: RootState) => state.field;
// export const allFields = useAppSelector((state) => state.filed);

export const { addField } = filedSlice.actions;
export default filedSlice.reducer;
