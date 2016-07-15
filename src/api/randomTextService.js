
const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
};

const parseJSON = (response) => (response.json());

export const getRandomText = () => (
  fetch('http://hipsterjesus.com/api/?html=false')
  .then(checkStatus)
  .then(parseJSON)
);
