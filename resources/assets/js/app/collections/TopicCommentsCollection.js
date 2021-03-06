var baseCollection = require('../instances/Collection');
var CommentModel = require('../models/TopicCommentModel');

module.exports = baseCollection.extend({
    url: '/comments',
    model: CommentModel,
    comparator: function (prevModel) {
        return -prevModel.get('id');
    }
});