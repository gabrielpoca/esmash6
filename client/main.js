Template.Editor.rendered = function() {
  this.textarea = this.find('textarea');

  this.editor = CodeMirror.fromTextArea(this.textarea, {
    lineNumbers: true,
    mode: 'javascript',
    theme: 'ambiance'
  });
};

Template.Editor.helpers({
  value: function() {
    return Session.get('code');
  },
  logs: function() {
    return Session.get('logs');
  },
  result: function() {
    return Session.get('result');
  }
});

Template.Editor.events({
  'click button': function(e, tmp) {
    tmp.editor.save();
    var code = tmp.textarea.value;

    Meteor.call('submit', code, function(err, result) {
      if (err) {
        Session.set('result', 'something is wrong with your JavaScript!');
      } else {
        Session.set('result', result.data.result);
        Session.set('logs', result.data.console.join('<br>'));
      }
    });
  }
});

Accounts.ui.config({
  passwordSignupFields: "USERNAME_ONLY"
});
