import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { apiService } from "../services/api/api.service";

// Interface danych przechowywanych w Slice
export interface AppState {
  posts: Post[];
}
// Interface pojedynczego postu
export interface Post {
  id: string;
  title: string;
  author: string;
  content: string;
  createData: string;
  updateData: string | null;
}
// Stan początkowy Slice
const initialState: AppState = {
  posts: [],
};

// Akcja asynchroniczna pobuierająca posty
export const getPostsAsync = createAsyncThunk(
  // Nazwa akscji
  "app/fetchPosts",
  // Metoda pobierająca dane asynchriniczne
  async () => {
    const data = await apiService.getPosts();
    return data;
  }
);

//Strworzenie Slice
export const appSlice = createSlice({
  // Nazwa Slice
  name: "app",
  //Przekazanie stanu początkowego do Slice
  initialState,
  // Redusery synchroniczne - (modyfikują stan wycinku Stora / Slice)
  reducers: {},
  // Builder synchronicznych reducerów - (modyfikują stan wycinku Stora / Slice)
  extraReducers: (builder) => {
    builder.addCase(
      getPostsAsync.fulfilled,
      (state, action) => {
        state.posts = action.payload;
      } /*Reducer*/
    );
  },
});

// Akcje synchroniczne
export const {} = appSlice.actions;

// Selektory
export const selectPosts = (state: RootState): Post[] => state.app.posts;

// Eksport mechanizmu który należy zarejestrować w storze
export default appSlice.reducer;
