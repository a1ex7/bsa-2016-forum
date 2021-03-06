<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Auth;
use App\Traits\SluggableModel;


class Vote extends Model

{
    public static $morphTag = 'Vote';
    protected $morphClass = 'Vote';
    use SoftDeletes;
    use SluggableModel;

    protected $fillable = ['title', 'user_id', 'is_single', 'is_public', 'finished_at', 'is_saved', 'description', 'description_generated', 'slug', 'summary'];

    protected $dates = ['deleted_at'];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = ['deleted_at'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function voteItems()
    {
        return $this->hasMany(VoteItem::class);
    }

    public function voteUniqueViews()
    {
        return $this->hasMany(VoteUniqueView::class);
    }

    public function votePermissions()
    {
        return $this->hasMany(VotePermission::class);
    }

    public function voteResults()
    {
        return $this->hasMany(VoteResult::class);
    }

    public function tags()
    {
        return $this->morphToMany(Tag::class, 'taggable');
    }

    public function attachments()
    {
        return $this->morphToMany(Attachment::class, 'attachmenttable');
    }

    /**
     * Get all of the vote's likes
     */
    public function likes()
    {
        return $this->morphMany(Like::class, 'likeable');
    }

    /**
     * Get all of the vote's comments.
     */
    public function comments()
    {
        return $this->morphMany(Comment::class, 'commentable');
    }

    public function notifications()
    {
        return $this->morphToMany(Notification::class, 'notificationable');
    }

    /**
     * Scope a query to only include votes which contain a searching text in the vote's title
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @param string $searchStr
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeFilterByQuery(Builder $query, $searchStr)
    {
        if ($searchStr) {
            $query = $query->where('title', 'LIKE', '%' . $searchStr . '%');
        }
        return $query;
    }

    public function scopeNewOnTop(Builder $query)
    {
        $query = $query->orderBy('id', 'desc');
        return $query;
    }

    /**
     * Scope a query to only include votes which have tags with selected IDs
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @param array $tags
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeFilterByTags(Builder $query, array $tags)
    {
        if (!empty($tags)) {
            $query = $query->whereHas('tags', function($q) use ($tags){
                $q->whereIn('name', $tags);
            });
        }
        return $query;
    }

    public function scopeCheckOnIsSaved(Builder $query)
    {
        if (!Auth::user()->isAdmin()) {
            $query = $query->where('is_saved', 1);
        }

        return $query;
    }

    public function scopeOnlySaved(Builder $query)
    {
        return $query->where('is_saved', 1);
    }

    public function subscribers()
    {
        return $this->morphToMany(User::class, Subscription::$name)->withTimestamps();
    }

    public function subscription($userId)
    {
        return $this->morphMany(Subscription::class, Subscription::$name)->where('user_id', $userId)->first();
    }

    /**
     * Scope a query to only include votes ordered by custom field
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @param $order
     * @param $orderType
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeFilterByOrder(Builder $query, $order, $orderType = 'asc')
    {
        if ($order && $orderType) {
            $query = $query->orderBy($order, $orderType);
        }
        return $query;
    }

    /**
     * Scope a query to only include limit of votes
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @param $limit
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeFilterByLimit(Builder $query, $limit)
    {
        return $limit ? $query->limit($limit) : $query;
    }

    public function getFinishedAtAttribute($value)
    {
        if ($value == '0000-00-00 00:00:00') {
            return '';
        }
        return $value;
    }

    public function usersWithPermission()
    {
        return $this->belongsTo(User::class, 'vote_permissions', 'vote_id')->withTimestamps();
    }
}
