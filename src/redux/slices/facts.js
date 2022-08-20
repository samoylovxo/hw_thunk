import { createSlice } from "@reduxjs/toolkit";

const facts = createSlice({
  name: "facts",
  initialState: {
    factList: [
      { id: 1, name: "Прообразом Чубакки стал пес режиссера." },
      {
        id: 2,
        name: "Актерам разрешили подобрать любимый цвет для своих световых мечей.",
      },
      {
        id: 3,
        name: "В фильме «Звездные войны-V: Империя наносит ответный удар» среди космических объектов можно заметить парящий ботинок и картофелину.",
      },
      {
        id: 4,
        name: "Дыхание Дарта Вейдера — это звуки дыхательной маски, подключенной к аквалангу.",
      },
      {
        id: 5,
        name: "Планета Татуин названа в честь реального города в Тунисе – стране, где происходила часть съемок",
      },
    ],
    viewedFactList: [],
  },
  reducers: {
    changeFactsCount: (state, { payload }) => {
      const countIndex = payload - 1;

      const isIncrement = countIndex > state.factList.length;
      const isDecrement = countIndex < state.factList.length;

      if (isIncrement) state.viewedFactList.push(state.factList[countIndex]);
      if (isDecrement)
        state.viewedFactList = state.factList.filter(
          (_, index) => index <= countIndex
        );
    },
  },
});

const actions = facts.actions;
const reducer = facts.reducer;

export { reducer as factsReducer, actions };
