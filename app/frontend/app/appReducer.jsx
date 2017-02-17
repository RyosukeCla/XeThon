const initialState = {}

export default function app(state = initialState, action) {
  switch (action.type) {
    case 'HOGE':
      return {};
    default:
      return state;
  }
}
