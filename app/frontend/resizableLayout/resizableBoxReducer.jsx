const initialState = {
  width: 200,
}

export default function resizableBox(state = initialState, action) {
  switch (action.type) {
    case 'HOGE':
      return {};
    default:
      return state;
  }
}
