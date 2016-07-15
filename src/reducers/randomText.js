import { REQUEST_RANDOM_TEXT_SUCCESS } from 'actions/randomText';

const randomText = (state = null, action) => {
  switch (action.type) {
    case REQUEST_RANDOM_TEXT_SUCCESS:
      return action.text;
    default:
      return state;
  }
};

export const getRandomText = (state) => (state.randomText);

export default randomText;
