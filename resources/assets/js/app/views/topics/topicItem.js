var Marionette = require('backbone.marionette');

module.exports = Marionette.ItemView.extend({
    template: 'topicItem',
    className: 'row',
    tagName: 'div'
});