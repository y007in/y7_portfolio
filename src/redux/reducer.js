let initialState = {
  showNav: false,
  isMenuAct: "",
  scrollRef: {
    Skills: null,
    Project: null,
    About: null,
  },
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_SHOW_NAV":
      return { ...state, showNav: !state.showNav };
    case "SET_MENU_ACT":
      return { ...state, isMenuAct: action.payload };
    default:
      return { ...state };
  }
}

export default reducer;
