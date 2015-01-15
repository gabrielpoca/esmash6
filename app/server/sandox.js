Meteor.methods({
  submit: submit
});

function submit(code) {
  options = generateOptions(code);
  HTTP.call('POST', 'http://0.0.0.0:9002', options, handle);
}

var generateOptions = function(code) {
  return {
    data: {
      code: code
    }
  }
};

var handle = function(err, result) {
  if (err) {
    console.log('error', err);
  } else {
    console.log('success', result.data.result);
  }
};

