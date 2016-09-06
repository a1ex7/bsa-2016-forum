var Marionette = require('backbone.marionette');
var Radio = require('backbone.radio');
var App = require('../../instances/appInstance');
var dateHelper = require('../../helpers/dateHelper');
var helper = require('../../helpers/helper');

module.exports = Marionette.ItemView.extend({
    template: 'messageDialogItem',
    ui: {
        delete: '.delete',
        edit: '.edit',
        msgFrom: '.from'
    },
    events: {
        'click @ui.delete' : 'clickedDeleteMessage',
        'click @ui.edit' : 'clickedEditMessage',
        'mouseenter @ui.msgFrom' : 'mouseenterMsgFrom',
        'mouseleave @ui.msgFrom' : 'mouseleaveMsgFrom',
    },
    clickedDeleteMessage: function () {
        Radio.channel('messagesChannel').trigger('deleteMessage', this.model);
    },

    clickedEditMessage: function () {
        Radio.channel('messagesChannel').trigger('editMessage', this.model);
    },
    mouseenterMsgFrom: function () {
        var intervalMinutes = App.getConfigAttr('messageChangeOnDelay');
        var intervalMilliseconds = intervalMinutes * 60 * 1000;
        var createdAt = this.model.get('created_at');
        if (!dateHelper.isTimePassed(createdAt, intervalMilliseconds)) {
            this.ui.delete.removeClass('invisible');
            this.ui.edit.removeClass('invisible');
        }
    },
    mouseleaveMsgFrom: function () {
        this.ui.delete.addClass('invisible');
        this.ui.edit.addClass('invisible');
    },

    serializeData: function () {
        var direction = '';
        var with_user = {};
        var edit = '';
        var deleted = '';
        if(this.model.get('user_from_id') == this.options.currentUser.get('id')) {
            with_user = this.options.currentUser.toJSON();
            direction = 'from';
        } else {
            with_user = this.options.withUser;
            direction = 'to';
        }
        if(this.model.get('created_at') != this.model.get('updated_at')) {
            edit = 'Edit at';
        }
        
        if(this.model.get('deleted_at') != null) {
            deleted = 'deleted';
            edit = 'Removed at';
        }

        return {
            message: helper.formatText(this.model.get('message')),
            messageDirection: direction,
            edit_at: edit,
            user: with_user,
            deleted: deleted,

            updatedDate: dateHelper.relativeDate(dateHelper.dateWithTimezone(this.model.get('updated_at'))),
            updatedStaticDate: dateHelper.dateWithTimezone(this.model.get('updated_at'))
        }
    }
});