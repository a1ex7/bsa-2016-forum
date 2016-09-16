var Marionette = require('backbone.marionette');var Radio = require('backbone.radio');var Bookmark = require('../../models/BookmarkModel');var currentUser = require('../../initializers/currentUser');var dateHelper = require('../../helpers/dateHelper');var logger = require('../../instances/logger');var _ = require('underscore');var SubscribeBehavior = require('../../behaviors/subscribeBehavior');var BookmarkBehavior = require('../../behaviors/bookmarkBehavior');var TopicAddLikeModel = require('../../models/TopicAddLikeModel');var TopicRemoveLikeModel = require('../../models/TopicRemoveLikeModel');module.exports = Marionette.ItemView.extend({    template: 'topicItem',    className: 'row post-item',    tagName: 'a',    attributes : function () {        return {            href: "#topics/"+this.model.get("slug")        }    },    ui: {        addLikeTopic: '.glyphicon-star-empty',        removeLikeTopic: '.glyphicon-star',        bookmarkButton: '.bookmark-btn',        subscribeNotification: '.subscribe-btn'    },    events: {        'click @ui.bookmarkTopic': 'bookmarkTopic',        'click @ui.addLikeTopic': 'addLikeTopic',        'click @ui.removeLikeTopic': 'removeLikeTopic'    },    modelEvents: { change: 'render' },    behaviors: {        SubscribeBehavior: {            behaviorClass: SubscribeBehavior,            parent_url: _.result(currentUser, 'url'),            target_type: 'Topic'        },        BookmarkBehavior: {            behaviorClass: BookmarkBehavior,            target_type: 'Topic'        }    },    serializeData: function () {        var style;        var href;        var countOfLikes;        var meta = this.getMetaData();        var id = this.model.get('id');        if(meta)        {            if(meta.is_user==true)            {                style = 'glyphicon glyphicon-star gi-2x';                href =  '#topics/'+this.model.get('id')+'/likes/'+meta.like_id;            }            else            {                style='glyphicon  glyphicon-star-empty gi-2x';                href =  '#topics/'+this.model.get('id')+'/likes';            }            if(meta.countOfLikes)            {                countOfLikes=meta.countOfLikes;            }            return {                model: this.model.toJSON(),                meta: this.model.getMeta(),                style: style,                href: href,                countOfLikes: countOfLikes,                createdDate: dateHelper.shortDate(this.model.get('created_at'))            };        }    },    onRender: function () {        var meta = this.model.getMeta();        if (meta && meta.bookmark) {            var self = this;            $.each(meta.bookmark, function(index, value) {                if (value.topic_id == self.model.get('id')) {                    self.model.bookmarkId = value.id;                    return false;                }            });        }        if (this.model.bookmarkId) {            this.addOkIcon();        }    },    getMetaData: function() {        var meta = this.model.getMeta();        var id = this.model.get('id');        if (meta) {            meta = {                is_user: meta[id].is_user,                like_id: meta[id].like_id,                countOfLikes: meta[id].countOfLikes,                bookmark: meta[id].bookmark,                comments: meta[id].comments,                likes: meta[id].likes,                user: meta[id].user,                category: meta[id].category,                subscription: meta[id].subscription,            };            return meta;        }    },    bookmarkTopic: function (e) {        e.preventDefault();        var bookmark = new Bookmark();        this.lockButton();        var that = this;        if (this.model.bookmarkId) {            bookmark.set({                id: this.model.bookmarkId            });            bookmark.destroy({                success: function () {                    that.unlockButton();                    that.$('i.bookmarked').remove();                    that.model.bookmarkId = undefined;                },                error: function (response, xhr) {                    var errorMsg = '';                    $.each(xhr.responseJSON, function(index, value) {                        errorMsg += index + ': ' + value;                    });                    logger(errorMsg);                }            });        } else {            bookmark.save({                topic_id: this.model.id,                user_id: currentUser.id            }, {                success: function (response) {                    that.model.bookmarkId = response.id;                    that.unlockButton();                    that.addOkIcon();                },                error: function (response, xhr) {                    var errorMsg = '';                    $.each(xhr.responseJSON, function(index, value) {                        errorMsg += index + ': ' + value;                    });                    logger(errorMsg);                }            });        }    },    addLikeTopic: function(){        var meta = this.getMetaData();        var parentUrl = '/topics/'+this.model.id;        var topicAddLikeModel=new TopicAddLikeModel({parentUrl: parentUrl});        topicAddLikeModel.save();        meta.is_user=true;        meta.countOfLikes=meta.countOfLikes+1;        this.model.setMeta(meta);        this.model.trigger('change');    },    removeLikeTopic: function(){        var meta = this.getMetaData();        var that = this;        if(meta && meta.like_id)        {            var parentUrl = '/topics/'+this.model.id+'/likes/'+meta.like_id;            var topicRemoveLikeModel = new TopicRemoveLikeModel({parentUrl: parentUrl,id:meta.like_id});            topicRemoveLikeModel.destroy({success: function(model, response) {                meta.is_user=false;                meta.countOfLikes=meta.countOfLikes-1;                that.model.setMeta(meta);                that.model.trigger('change');            }});        }    }});