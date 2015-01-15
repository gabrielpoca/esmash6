var Sandbox = Meteor.npmRequire('sandbox');

Meteor.methods({
  submit: submit
});

var demoCode = "let a = 1; let b = 2; a + b;";

function submit(code) {
  var s = new Sandbox();
  s.run(demoCode, function(output) {
    console.log(output);
  });
}
