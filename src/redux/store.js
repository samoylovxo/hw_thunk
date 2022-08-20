import { configureStore } from "@reduxjs/toolkit";
import { factsReducer } from "./slices/facts";
import { avatarsReducer } from "./slices/avatars";

const store = configureStore({
  reducer: {
    facts: factsReducer,
    avatars: avatarsReducer,
  },
});

export { store };
