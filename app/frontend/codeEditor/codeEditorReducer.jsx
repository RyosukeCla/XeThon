const initialState = {}

export default function codeEditor(state = initialState, action) {
  switch (action.type) {
    case 'HOGE':
      return {};
    default:
      return state;
  }
}
