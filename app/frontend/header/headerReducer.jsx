const initialState = {}

export default function header(state = initialState, action) {
  switch (action.type) {
    case 'HOGE':
      return {};
    default:
      return state;
  }
}
