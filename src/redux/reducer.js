let initialState = {
  showNav: false,
  isMenuAct: "",
  title: "YooJin's Portfolio",
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_SHOW_NAV":
      return { ...state, showNav: !state.showNav };
    case "SET_MENU_ACT":
      return { ...state, isMenuAct: action.payload };
    case "SET_TITLE":
      return {
        ...state,
        title: action.payload,
      };
    default:
      return { ...state };
  }
}

export default reducer;
