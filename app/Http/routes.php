<?php
/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/
Route::get('/',['middleware' =>'auth-main',function() {
    return view('main');
}]);

Route::group(['middleware' =>'api', 'prefix' => 'api/v1'], function () {
    Route::get('/', function () {
        return 'Welcome to REST API v1';
    });
});

Route::bind('topic', function ($value) {
    return App\Models\Topic::getSluggableModel($value);
});

Route::bind('vote', function ($value) {
    return App\Models\Vote::getSluggableModel($value);
});

Route::group(['middleware' => ['api','auth-api'], 'prefix' => 'api/v1'], function () {

    /*Routes for Users*/
    Route::get('user','UserController@getUser')->name('user');

    Route::resource('users', 'UserController', [
        'except' => ['edit', 'create', 'store', 'update', 'destroy'],
        'names' => [
            'index' => 'users.index',
            'show' => 'users.show',
        ],
    ]);
    Route::resource('categories', 'CategoryController', [
        'except' => ['edit', 'create'],
        'names' => [
            'index' => 'users.index',
            'store' => 'users.store',
            'show' => 'users.show',
            'update' => 'users.update',
            'destroy' => 'users.destroy',
        ],
    ]);
    /*Routes for users Role*/
    Route::group(['prefix' => 'users/{user}/roles'], function () {
        Route::get('', 'UserController@getUserRole')->name('userRole');
        Route::put('{role}', 'UserController@updateRole')->name('updateRole');
    });
    /*Routes for roles*/
    Route::get('roles', 'RoleController@index')->name('roles');
    /*Routes for Topics*/
    Route::resource('topics', 'TopicController', [
        'except' => ['edit', 'create'],
        'names' => [
            'index' => 'topics.index',
            'store' => 'topics.store',
            'show' => 'topics.show',
            'update' => 'topics.update',
            'destroy' => 'topics.destroy',
        ],
    ]);
    Route::get('topics/{topic}/subscribers', 'TopicController@getTopicSubscribers')->name('getTopicSubscribers');
    Route::get('categories/{category}/topics', 'TopicController@indexInCategory')->name('topicsInCategory');
    Route::post('topics/{topic}/likes', 'TopicController@addLike')->name('addLikeToTopic');
    Route::delete('topics/{topic}/likes/{like}', 'TopicController@removeLike')->name('removeLikeFromTopic');

    /*Routes for Votes*/
    Route::resource('votes', 'VoteController', [
        'except' => ['edit', 'create'],
        'names' => [
            'index' => 'votes.index',
            'store' => 'votes.store',
            'show' => 'votes.show',
            'update' => 'votes.update',
            'destroy' => 'votes.destroy',
        ],
    ]);
    /*Routes for Users Messages*/
    Route::resource('users/{user}/messages', 'MessageController', [
        'except' => ['edit', 'create'],
        'names' => [
            'index' => 'messages.index',
            'store' => 'messages.store',
            'show' => 'messages.show',
            'update' => 'messages.update',
            'destroy' => 'messages.destroy',
        ],
    ]);
    /*Routes for Vote voteItems */
    Route::resource('votes/{vote}/voteitems', 'VoteItemController', [
        'except' => ['edit', 'create'],
        'names' => [
            'index' => 'voteItems.index',
            'store' => 'voteItems.store',
            'show' => 'voteItems.show',
            'update' => 'voteItems.update',
            'destroy' => 'voteItems.destroy'
        ]
    ]);
    /*Routes for Subscription */
    Route::resource('users/{user}/subscriptions', 'SubscriptionController', [
        'except' => ['edit', 'create', 'show', 'update'],
        'names' => [
            'index' => 'subscriptions.index',
            'store' => 'subscriptions.store',
            'destroy' => 'subscriptions.destroy'
        ]
    ]);

    /*Routes for bookmarks*/
    Route::group(['prefix' => 'bookmarks'], function () {
        Route::get('', 'BookmarkController@index')->name('bookmarks.index');
        Route::post('', 'BookmarkController@store')->name('bookmarks.store');
        Route::delete('{id}', 'BookmarkController@destroy')->name('bookmarks.destroy');
    });

    /*Routes for users topics*/
    Route::group(['prefix' => 'users/{user}/topics'], function () {
        Route::get('', 'TopicController@getUserTopics')->name('userTopics');
        Route::get('{topic}', 'TopicController@getUserTopic')->name('userTopic');
    });
    /*Routes for users votes*/
    Route::group(['prefix' => 'users/{user}/votes'], function () {
        Route::get('', 'VoteController@getUserVotes')->name('userVotes');
        Route::get('{vote}', 'VoteController@getUserVote')->name('userVote');
    });

    Route::post('votes/{comment}/likes', 'VoteController@addLike')->name('addLikeToVote');
    Route::delete('votes/{comment}/likes/{like}', 'VoteController@removeLike')->name('removeLikeFromVote');

    /*Routes for users results vote*/
    Route::group(['prefix' => 'votes/{vote}/voteresult'], function () {
        Route::get('', 'VoteController@getUserVoteResult')->name('userVoteResult');
        Route::post('', 'VoteController@createUserVoteResult')->name('userVoteResult');
    });

    /*Routes Tags*/
    Route::resource('tags', 'TagController', [
        'except' => ['edit', 'create', 'store', 'show'],
        'names' => [
            'index' => 'tags.index',
            'update' => 'tags.update',
            'destroy' => 'tags.destroy',
        ],
    ]);

    /*Routes for Topic comments*/
    Route::group(['prefix' => 'topics/{topic}/comments'], function () {
        Route::get('', 'CommentController@getTopicComments')->name('topicComments');
        Route::post('', 'CommentController@storeTopicComment')->name('storeTopicComment');
        Route::get('{comment}', 'CommentController@getTopicComment')->name('topicComment');
        Route::put('{comment}', 'CommentController@updateTopicComment')->name('updateTopicComment');
        Route::delete('{comment}', 'CommentController@destroyTopicComment')->name('deleteTopicComment');

        Route::get('{comment}/comments', 'CommentController@getTopicCommentChildren')->name('topicCommentChildren');
        Route::post('{comment}/comments', 'CommentController@storeTopicCommentChild')->name('storeTopicCommentChild');
        Route::get('{comment}/comments/{commentChild}', 'CommentController@getTopicCommentChild')->name('getTopicCommentChild');
        Route::put('{comment}/comments/{commentChild}', 'CommentController@updateTopicCommentChild')->name('updateTopicCommentChild');
        Route::delete('{comment}/comments/{commentChild}', 'CommentController@destroyTopicCommentChild')->name('deleteTopicCommentChild');
    });

    Route::post('comments/{comment}/likes', 'CommentController@addLike')->name('addLikeToComment');
    Route::delete('comments/{comment}/likes/{like}', 'CommentController@removeLike')->name('removeLikeFromComment');

    /*Routes for Vote comments*/
    Route::group(['prefix' => 'votes/{vote}/comments'], function () {
        Route::get('', 'CommentController@getVoteComments')->name('voteComments');
        Route::post('', 'CommentController@storeVoteComment')->name('storeVoteComment');
        Route::get('{comment}', 'CommentController@getVoteComment')->name('voteComment');
        Route::put('{comment}', 'CommentController@updateVoteComment')->name('updateVoteComment');
        Route::delete('{comment}', 'CommentController@destroyVoteComment')->name('deleteVoteComment');

        Route::resource('{comment}/comments', 'VoteCommentChildsController', [
            'except' => ['edit', 'create'],
            'names' => [
                'index' => 'VoteCommentChilds.index',
                'store' => 'VoteCommentChilds.store',
                'show' => 'VoteCommentChilds.show',
                'update' => 'VoteCommentChilds.update',
                'destroy' => 'VoteCommentChilds.destroy'
            ]
        ]);

    });
    /*Routes for VoteItem comments*/
    Route::group(['prefix' => 'votes/{vote}/voteitems/{voteItem}/comments'], function () {
        Route::get('', 'CommentController@getVoteItemComments')->name('voteItemComments');
        Route::post('', 'CommentController@storeVoteItemComment')->name('storeVoteItemComment');
        Route::get('/{comment}', 'CommentController@getVoteItemComment')->name('voteItemComment');
        Route::put('/{comment}', 'CommentController@updateVoteItemComment')->name('updateVoteItemComment');
        Route::delete('/{comment}', 'CommentController@destroyVoteItemComment')->name('deleteVoteItemComment');


        Route::resource('{comment}/comments', 'VoteItemCommentChildsController', [
            'except' => ['edit', 'create'],
            'names' => [
                'index' => 'VoteItemCommentChilds.index',
                'store' => 'VoteItemCommentChilds.store',
                'show' => 'VoteItemCommentChilds.show',
                'update' => 'VoteItemCommentChilds.update',
                'destroy' => 'VoteItemCommentChilds.destroy'
            ]
        ]);
    });

    /*Routes for private Vote users*/
    Route::group(['prefix' => 'votes/{vote}/users'], function () {
        Route::get('', 'VoteController@getAllVoteAccessedUsers');
    });

    /*Routes for Topic attachments*/
    Route::group(['prefix' => 'topics/{topic}/attachments'], function () {
        Route::get('', 'AttachmentController@getAllTopicAttachments')->name('allTopicAttachments');
        Route::get('{attachment}', 'AttachmentController@getTopicAttachment')->name('topicAttachment');
        Route::post('', 'AttachmentController@storeTopicAttachment')->name('storeTopicAttachment');
        Route::delete('{attachment}', 'AttachmentController@destroyTopicAttachment')->name('deleteTopicAttachment');
    });
    /*Routes for Vote attachments*/
    Route::group(['prefix' => 'votes/{vote}/attachments'], function () {
        Route::get('', 'AttachmentController@getAllVoteAttachments')->name('allVoteAttachments');
        Route::get('{attachment}', 'AttachmentController@getVoteAttachment')->name('voteAttachment');
        Route::post('', 'AttachmentController@storeVoteAttachment')->name('storeVoteAttachment');
        Route::delete('{attachment}', 'AttachmentController@destroyVoteAttachment')->name('deleteVoteAttachment');
    });
    /*Routes for VoteItem attachments*/
    Route::group(['prefix' => 'voteItems/{voteItem}/attachments'], function () {
        Route::get('', 'AttachmentController@getAllVoteItemAttachments')->name('allVoteItemAttachments');
        Route::get('{attachment}', 'AttachmentController@getVoteItemAttachment')->name('voteItemAttachment');
        Route::post('', 'AttachmentController@storeVoteItemAttachment')->name('storeVoteItemAttachment');
        Route::delete('{attachment}', 'AttachmentController@destroyVoteItemAttachment')->name('deleteVoteItemAttachment');
    });
    /*Routes for Comment attachments*/
    Route::group(['prefix' => 'comments/{comment}/attachments'], function () {
        Route::get('', 'AttachmentController@getAllCommentAttachments')->name('allCommentAttachments');
        Route::get('{attachment}', 'AttachmentController@getCommentAttachment')->name('commentAttachment');
        Route::post('', 'AttachmentController@storeCommentAttachment')->name('storeCommentAttachment');
        Route::delete('{attachment}', 'AttachmentController@destroyCommentAttachment')->name('deleteCommentAttachment');
    });
    /*Routes for Message attachments*/
    Route::group(['prefix' => 'messages/{message}/attachments'], function () {
        Route::get('', 'AttachmentController@getAllMessageAttachments')->name('allMessageAttachments');
        Route::get('{attachment}', 'AttachmentController@getMessageAttachment')->name('messageAttachment');
        Route::post('', 'AttachmentController@storeMessageAttachment')->name('storeMessageAttachment');
        Route::delete('{attachment}', 'AttachmentController@destroyMessageAttachment')->name('deleteMessageAttachment');
    });
    
    
    Route::get('rss', 'rssController@index')->name('rss');
    Route::post('rss', 'rssController@subscribe')->name('rssSubscribe');
});
