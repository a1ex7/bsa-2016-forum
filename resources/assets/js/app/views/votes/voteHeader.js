var Marionette = require('backbone.marionette');
var SubscribeBehavior = require('../../behaviors/subscribeBehavior');
var _ = require('underscore');
var currentUser = require('../../initializers/currentUser');
var dateHelper = require('../../helpers/dateHelper');
var Radio = require('backbone.radio');
var helper = require('../../helpers/helper');

module.exports = Marionette.ItemView.extend({
    template: 'voteHeader',
    tagName: 'div',
    className: 'vote-head',
    modelEvents: {
        'change': 'render'
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

    attachmentThumb: function (attachs) {
        attachs.forEach(function (attach) {
            if (attach.type == 'image/jpeg' || attach.type == 'image/png' ||
                attach.type == 'image/gif') {
                attach.thumb = attach.url;
            } else {
                attach.thumb = 'images/doc.png';
            }

        });
    },

    serializeData: function () {
        var tempmeta = this.model.getMeta();
        var meta = {
            user: {},
            likes: {},
            comments: {},
            tags: {}
        };
        if (tempmeta) {
            var id = this.model.get('id');
            helper.attachmentThumb(tempmeta[id].attachments);
            meta = {
                user: tempmeta[id].user,
                likes: tempmeta[id].likes,
                comments: tempmeta[id].comments,
                status: tempmeta[id].status,
                tags: tempmeta[id].tags,
                numberOfUniqueViews: tempmeta[id].numberOfUniqueViews,
                usersWhoSaw: tempmeta[id].usersWhoSaw,
                isFinished: ((this.model.get('finished_at') == null) || (dateHelper.getDateTimeDiff(this.model.get('finished_at')) < 0)),
                finishedDate: (this.model.get('finished_at') != null) ? dateHelper.middleDate(this.model.get('finished_at')) : '',
                showUsers: currentUser.isAdmin() || (currentUser.get('id') === this.model.get('user_id')),
                attachments: tempmeta[id].attachments
            }
        }

        return {
            model: this.model.toJSON(),
            meta: meta
        };
    },

    onRender: function () {
        if (this.model.get('finished_at')) {
            // if current date > vote finished date
            if (dateHelper.getDateTimeDiff(this.model.get('finished_at')) >= 0) {
                Radio.channel('votesChannel').trigger('showVoteResult');
            }
        }
    }
});