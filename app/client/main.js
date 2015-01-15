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
  }
});

Template.Editor.events({
  'click button': function(e, tmp) {
    tmp.editor.save();
    var code = tmp.textarea.value;

    Meteor.call('submit', code);
  }
});
