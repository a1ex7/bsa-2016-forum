var Marionette = require('backbone.marionette');
var BookmarksCollection = require('../bookmarks/bookmarkCollection');
var MessagesCollection = require('../messages/messageCollection');

module.exports = Marionette.LayoutView.extend({
    template: 'DashboardProfile',

    regions: {
        'bookmarks': '.bookmarks',
        'messages': '.messages'
    },

    onRender: function() {
        this.getRegion('messages').show(new MessagesCollection({
            collection: this.options.messages,
        }));
        this.getRegion('bookmarks').show(new BookmarksCollection({
            collection: this.options.bookmarks,
        }));
    }
});