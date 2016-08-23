<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\Vote;
use App\Models\VoteItem;
use App\Http\Requests\CommentsRequest;
use App\Models\Topic;
use App\Http\Requests;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class CommentController extends ApiController
{
    /**
     * @param Comment $comment
     * @return bool
     */
    protected function isCommentHasAnyChild(Comment $comment)
    {
        if ($comment->comments()->get()) {
            return true;
        }
        return false;
    }

    /**
     * @param Comment $comment
     * @param Comment $commentChild
     * @return bool
     */
    protected function isCommentChildBelongsToComment(Comment $comment, Comment $commentChild)
    {
        if ($comment->comments()->find($commentChild->id)) {
            return true;
        } else {
            return false;
        }
    }

    /**********  TOPIC SECTION START **********/

    /**
     * @param Topic $topic
     * @param Comment $comment
     * @return bool
     */
    protected function isCommentBelongsToTopic(Topic $topic, Comment $comment)
    {
        $topicWhichHasThisComment = $comment->commentable()->get()->first();
        return ($topicWhichHasThisComment && $topicWhichHasThisComment->id === $topic->id);
    }

    /**
     * @param Topic $topic
     * @return \Illuminate\Http\JsonResponse
     */
    public function getTopicComments(Topic $topic)
    {
        $comments = $topic->comments()->get();
        return $this->setStatusCode(200)->respond($comments);
    }

    /**
     * @param Topic $topic
     * @param Comment $comment
     * @return \Illuminate\Http\JsonResponse
     */
    public function getTopicComment(Topic $topic, Comment $comment)
    {
        if ($this->isCommentBelongsToTopic($topic, $comment)) {
            return $this->setStatusCode(200)->respond($comment);
        } else {
            throw (new ModelNotFoundException)->setModel(Comment::class);
        }
    }

    /**
     * @param Topic $topic
     * @param CommentsRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function storeTopicComment(Topic $topic, CommentsRequest $request)
    {
        $comment = Comment::create($request->all());
        $comment = $topic->comments()->save($comment);
        return $this->setStatusCode(201)->respond($comment);
    }

    /**
     * @param Topic $topic
     * @param Comment $comment
     * @param CommentsRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function updateTopicComment(Topic $topic, Comment $comment, CommentsRequest $request)
    {
        if ($this->isCommentBelongsToTopic($topic, $comment)) {
            $comment->update($request->all());
            return $this->setStatusCode(200)->respond($comment);
        } else {
            throw (new ModelNotFoundException)->setModel(Comment::class);
        }
    }

    /**
     * @param Topic $topic
     * @param Comment $comment
     * @return \Illuminate\Http\JsonResponse
     * @throws \Exception
     */
    public function destroyTopicComment(Topic $topic, Comment $comment)
    {
        if ($this->isCommentBelongsToTopic($topic, $comment)) {
            $comment->delete();
            return $this->setStatusCode(204)->respond();
        } else {
            throw (new ModelNotFoundException)->setModel(Comment::class);
        }
    }

    /**********  Topic CommentChild SECTION START **********/

    /**
     * @param Topic $topic
     * @param Comment $comment
     * @return \Illuminate\Http\JsonResponse
     */
    public function getTopicCommentChildren(Topic $topic, Comment $comment)
    {
        if ($this->isCommentBelongsToTopic($topic, $comment)) {
            $comments = $comment->comments()->get();
            return $this->setStatusCode(200)->respond($comments);
        } else {
            throw (new ModelNotFoundException)->setModel(Comment::class);
        }
    }

    /**
     * @param Topic $topic
     * @param Comment $comment
     * @param CommentsRequest $childCommentInput
     * @return \Illuminate\Http\JsonResponse
     */
    public function storeTopicCommentChild(Topic $topic, Comment $comment, CommentsRequest $childCommentInput)
    {
        if ($this->isCommentBelongsToTopic($topic, $comment)) {
            $childComment = Comment::create($childCommentInput->all());
            $childComment = $comment->comments()->save($childComment);
            return $this->setStatusCode(201)->respond($childComment);
        } else {
            throw (new ModelNotFoundException)->setModel(Comment::class);
        }
    }

    /**
     * @param Topic $topic
     * @param Comment $comment
     * @param Comment $commentChild
     * @return \Illuminate\Http\JsonResponse
     */
    public function getTopicCommentChild(Topic $topic, Comment $comment, Comment $commentChild)
    {
        if ($this->isCommentBelongsToTopic($topic, $comment)
            && $this->isCommentChildBelongsToComment($comment, $commentChild)
        ) {
            return $this->setStatusCode(200)->respond($commentChild);
        } else {
            throw (new ModelNotFoundException)->setModel(Comment::class);
        }
    }

    /**
     * @param Topic $topic
     * @param Comment $comment
     * @param Comment $commentChild
     * @param CommentsRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function updateTopicCommentChild(
        Topic $topic,
        Comment $comment,
        Comment $commentChild,
        CommentsRequest $request
    ) {
        if ($this->isCommentBelongsToTopic($topic, $comment)
            && $this->isCommentChildBelongsToComment($comment, $commentChild)
        ) {
            $commentChild->update($request->all());
            return $this->setStatusCode(200)->respond($commentChild);
        } else {
            throw (new ModelNotFoundException)->setModel(Comment::class);
        }
    }

    /**
     * @param Topic $topic
     * @param Comment $comment
     * @param Comment $commentChild
     * @return \Illuminate\Http\JsonResponse
     * @throws \Exception
     */
    public function destroyTopicCommentChild(Topic $topic, Comment $comment, Comment $commentChild)
    {
        if ($this->isCommentBelongsToTopic($topic, $comment)
            && $this->isCommentChildBelongsToComment($comment, $commentChild)
        ) {
            $commentChild->delete();
            return $this->setStatusCode(204)->respond();
        } else {
            throw (new ModelNotFoundException)->setModel(Comment::class);
        }
    }

    /**********  VOTE SECTION START **********/

    /**
     * @param Vote $vote
     * @param Comment $comment
     * @return bool
     */
    protected function isCommentBelongsToVote(Vote $vote, Comment $comment)
    {
        $voteWhichHasThisComment = $comment->commentable()->get()->first();

        return ($voteWhichHasThisComment && $voteWhichHasThisComment->id === $vote->id);
    }

    /**
     * @param Vote $vote
     * @return \Illuminate\Http\JsonResponse
     */
    public function getVoteComments(Vote $vote)
    {
        $comments = $vote->comments()->get();
        return $this->setStatusCode(200)->respond($comments);
    }

    /**
     * @param Vote $vote
     * @param Comment $comment
     * @return \Illuminate\Http\JsonResponse
     */
    public function getVoteComment(Vote $vote, Comment $comment)
    {
        if ($this->isCommentBelongsToVote($vote, $comment)) {
            return $this->setStatusCode(200)->respond($comment);
        } else {
            throw (new ModelNotFoundException)->setModel(Comment::class);
        }
    }

    /**
     * @param Vote $vote
     * @param CommentsRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function storeVoteComment(Vote $vote, CommentsRequest $request)
    {
        $comment = Comment::create($request->all());
        $comment = $vote->comments()->save($comment);
        return $this->setStatusCode(201)->respond($comment);
    }

    /**
     * @param Vote $vote
     * @param Comment $comment
     * @param CommentsRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function updateVoteComment(Vote $vote, Comment $comment, CommentsRequest $request)
    {
        if ($this->isCommentBelongsToVote($vote, $comment)) {
            $comment->update($request->all());
            return $this->setStatusCode(200)->respond($comment);
        } else {
            throw (new ModelNotFoundException)->setModel(Comment::class);
        }
    }

    /**
     * @param Vote $vote
     * @param Comment $comment
     * @return \Illuminate\Http\JsonResponse
     * @throws \Exception
     */
    public function destroyVoteComment(Vote $vote, Comment $comment)
    {
        if ($this->isCommentBelongsToVote($vote, $comment)) {
            $comment->delete();
            return $this->setStatusCode(204)->respond();
        } else {
            throw (new ModelNotFoundException)->setModel(Comment::class);
        }
    }

    /**********  Vote CommentChild SECTION START **********/

    /**
     * @param Vote $vote
     * @param Comment $comment
     * @return \Illuminate\Http\JsonResponse
     */
    public function getVoteCommentChildren(Vote $vote, Comment $comment)
    {
        if ($this->isCommentBelongsToVote($vote, $comment)) {
            $comments = $comment->comments()->get();
            return $this->setStatusCode(200)->respond($comments);
        } else {
            throw (new ModelNotFoundException)->setModel(Comment::class);
        }
    }

    /**
     * @param Vote $vote
     * @param Comment $comment
     * @param CommentsRequest $childCommentInput
     * @return \Illuminate\Http\JsonResponse
     */
    public function storeVoteCommentChild(Vote $vote, Comment $comment, CommentsRequest $childCommentInput)
    {
        if ($this->isCommentBelongsToVote($vote, $comment)) {
            $childComment = Comment::create($childCommentInput->all());
            $childComment = $comment->comments()->save($childComment);
            return $this->setStatusCode(201)->respond($childComment);
        } else {
            throw (new ModelNotFoundException)->setModel(Comment::class);
        }
    }

    /**
     * @param Vote $vote
     * @param Comment $comment
     * @param Comment $commentChild
     * @return \Illuminate\Http\JsonResponse
     */
    public function getVoteCommentChild(Vote $vote, Comment $comment, Comment $commentChild)
    {
        if ($this->isCommentBelongsToVote($vote, $comment)
            && $this->isCommentChildBelongsToComment($comment, $commentChild)
        ) {
            return $this->setStatusCode(200)->respond($commentChild);
        } else {
            throw (new ModelNotFoundException)->setModel(Comment::class);
        }
    }

    /**
     * @param Vote $vote
     * @param Comment $comment
     * @param Comment $commentChild
     * @param CommentsRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function updateVoteCommentChild(
        Vote $vote,
        Comment $comment,
        Comment $commentChild,
        CommentsRequest $request
    ) {
        if ($this->isCommentBelongsToVote($vote, $comment)
            && $this->isCommentChildBelongsToComment($comment, $commentChild)
        ) {
            $commentChild->update($request->all());
            return $this->setStatusCode(200)->respond($commentChild);
        } else {
            throw (new ModelNotFoundException)->setModel(Comment::class);
        }
    }

    /**
     * @param Vote $vote
     * @param Comment $comment
     * @param Comment $commentChild
     * @return \Illuminate\Http\JsonResponse
     * @throws \Exception
     */
    public function destroyVoteCommentChild(Vote $vote, Comment $comment, Comment $commentChild)
    {
        if ($this->isCommentBelongsToVote($vote, $comment)
            && $this->isCommentChildBelongsToComment($comment, $commentChild)
        ) {
            $commentChild->delete();
            return $this->setStatusCode(204)->respond();
        } else {
            throw (new ModelNotFoundException)->setModel(Comment::class);
        }
    }

    /**********  VoteItem SECTION START **********/

    /**
     * @param VoteItem $voteItem
     * @param Comment $comment
     * @return bool
     */
    protected function isCommentBelongsToVoteItem(VoteItem $voteItem, Comment $comment)
    {
        $voteItemWhichHasThisComment = $comment->commentable()->get()->first();

        return ($voteItemWhichHasThisComment && $voteItemWhichHasThisComment->id === $voteItem->id);
    }

    /**
     * @param VoteItem $voteItem
     * @return \Illuminate\Http\JsonResponse
     */
    public function getVoteItemComments(VoteItem $voteItem)
    {
        $comments = $voteItem->comments()->get();
        return $this->setStatusCode(200)->respond($comments);
    }

    /**
     * @param VoteItem $voteItem
     * @param Comment $comment
     * @return \Illuminate\Http\JsonResponse
     */
    public function getVoteItemComment(VoteItem $voteItem, Comment $comment)
    {
        if ($this->isCommentBelongsToVoteItem($voteItem, $comment)) {
            return $this->setStatusCode(200)->respond($comment);
        } else {
            throw (new ModelNotFoundException)->setModel(Comment::class);
        }
    }

    /**
     * @param VoteItem $voteItem
     * @param CommentsRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function storeVoteItemComment(VoteItem $voteItem, CommentsRequest $request)
    {
        $comment = Comment::create($request->all());
        $comment = $voteItem->comments()->save($comment);
        return $this->setStatusCode(201)->respond($comment);
    }

    /**
     * @param VoteItem $voteItem
     * @param Comment $comment
     * @param CommentsRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function updateVoteItemComment(VoteItem $voteItem, Comment $comment, CommentsRequest $request)
    {
        if ($this->isCommentBelongsToVoteItem($voteItem, $comment)) {
            $comment->update($request->all());
            return $this->setStatusCode(200)->respond($comment);
        } else {
            throw (new ModelNotFoundException)->setModel(Comment::class);
        }
    }

    /**
     * @param VoteItem $voteItem
     * @param Comment $comment
     * @return \Illuminate\Http\JsonResponse
     * @throws \Exception
     */
    public function destroyVoteItemComment(VoteItem $voteItem, Comment $comment)
    {
        if ($this->isCommentBelongsToVoteItem($voteItem, $comment)) {
            $comment->delete();
            return $this->setStatusCode(204)->respond();
        } else {
            throw (new ModelNotFoundException)->setModel(Comment::class);
        }
    }

}
