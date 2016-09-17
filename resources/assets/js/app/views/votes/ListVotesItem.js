var Marionette = require('backbone.marionette');
var Backbone = require('backbone');
var SubscribeBehavior = require('../../behaviors/subscribeBehavior');
var _ = require('underscore');
var currentUser = require('../../initializers/currentUser');
var dateHelper = require('../../helpers/dateHelper');
var userAvatarView = require('../users/userAvatar');

module.exports = Marionette.ItemView.extend({
    template: 'voteItem',
    tagName: 'a',

    attributes : function () {
        return {
            href: "#/votes/" + this.model.vote_slug()
        }
    },
    
    ui: {
        subscribeNotification: '.subscribe-btn'
    },

    behaviors: {
        SubscribeBehavior: {
            behaviorClass: SubscribeBehavior,
            parent_url: _.result(currentUser, 'url'),
            target_type: 'Vote'
        }
    },

    serializeData: function () {
        var tempmeta = this.model.getMeta();
        var id = this.model.get('id');
        console.log(tempmeta[id].user);
        console.log(tempmeta[id]);
        return {
            model: this.model.toJSON(),
            createdDate: dateHelper.fullDate(this.model.get('created_at')),
            meta: {
                user: tempmeta[id].user,
                likes: tempmeta[id].likes,
                comments: tempmeta[id].comments,
                tags: tempmeta[id].tags,
                status: tempmeta[id].status,
                days_ago:tempmeta[id].days_ago,
                hasMorePages:tempmeta.hasMorePages,
                numberOfUniqueViews: tempmeta[id].numberOfUniqueViews,
                usersWhoSaw: tempmeta[id].usersWhoSaw,
            }
        };
    },
    onRender: function () {
            new userAvatarView({
                collection: this.options.vc
            }
        );

    }
});