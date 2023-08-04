const initialState = {
  list: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        list: [...state.list, action.value],
      };
    // default 에서 꼭 state 를 반환해야 한다.
    default:
      return state;
  }
}
