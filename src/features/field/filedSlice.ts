import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';

type field = {
  id: number;
  name: string;
};

const initialState = [
  {
    id: 1,
    name: 'name',
  },
  {
    id: 2,
    name: 'email',
  },
];

const filedSlice = createSlice({
  name: 'field',
  initialState: initialState,
  reducers: {
    addField: (state, action: PayloadAction<field>) => {
      state.push(action.payload);
    },
  },
});

export const allFields = (state: RootState) => state.field;
// export const allFields = useAppSelector((state) => state.filed);

export const { addField } = filedSlice.actions;
export default filedSlice.reducer;
