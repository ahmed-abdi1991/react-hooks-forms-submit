import React from 'react';
import ReactDOM from 'react-dom';
import Form from './components/Form'

ReactDOM.render(
  <Form />,
  document.getElementById('root')
);
function test(description, testFunction) {
  return testFunction().then(result => {
    if (result === true) {
      console.log(description + " - Passed");
    } else {
      console.error(description + " - Failed");
    }
  }).catch(error => {
    console.error(description + " - Failed with error: " + error);
  });
}

test("Test passing", () => {
  return new Promise((resolve, reject) => {
    resolve(true);
  });
});
