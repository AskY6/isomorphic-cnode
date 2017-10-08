export const initialState = {
  tab: "hasNotRead",
  hasRead: [],
  hasNotRead: []
};

export const COMPONENT_WILL_CREATE = (state, { hasRead, hasNotRead }) => {
  let tab = hasNotRead.length > 0 ? "hasNotRead" : "hasRead";
  state = CHANGE_TAB(state, tab);
  return {
    ...state,
    hasRead,
    hasNotRead
  };
};

export const CHANGE_TAB = (state, tab) => {
  return {
    ...state,
    tab
  };
};
