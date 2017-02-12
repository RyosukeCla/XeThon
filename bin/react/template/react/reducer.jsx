const initialState = {}

export default function S_NAME(state = initialState, action) {
  switch (action.type) {
    case 'HOGE':
      return {};
    default:
      return state;
  }
}
