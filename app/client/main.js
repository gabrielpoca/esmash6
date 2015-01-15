Template.Editor.events({
  'click button': function() {
    var code = $('textarea')[0].value;
    Meteor.call('submit', code);
  }
});
