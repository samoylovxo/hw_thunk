import { createSlice } from "@reduxjs/toolkit";

const avatars = createSlice({
  name: "avatars",
  initialState: {
    loadedAvatarLinks: [],
  },
  reducers: {
    changeAvatar: (state, { payload }) => {
      state.loadedAvatarLinks.push(payload);
    },
  },
});

const actions = avatars.actions;
const reducer = avatars.reducer;

export { reducer as avatarsReducer, actions };
