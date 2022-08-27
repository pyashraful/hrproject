import { configureStore } from '@reduxjs/toolkit';
import filedReducer from './features/field/filedSlice';
import formReducer from './features/form/formSlice';

export const store = configureStore({
  reducer: {
    field: filedReducer,
    form: formReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
