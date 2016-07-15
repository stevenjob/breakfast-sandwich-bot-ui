export const REQUEST_RANDOM_TEXT_FAILURE = 'REQUEST_RANDOM_TEXT_FAILURE';
export const REQUEST_RANDOM_TEXT_SUCCESS = 'REQUEST_RANDOM_TEXT_SUCCESS';
import * as randomTextService from 'api/randomTextService';

const addRandomText = (text) => ({
  type: REQUEST_RANDOM_TEXT_SUCCESS,
  text,
});

const handleError = (error) => ({
  type: REQUEST_RANDOM_TEXT_FAILURE,
  text: error.message || 'could not get some random text',
});

export const requestRandomText = () => (dispatch) => {
  randomTextService
    .getRandomText()
    .then((response) => dispatch(addRandomText(response.text)))
    .catch(error => dispatch(handleError(error)));
};
