<?php

namespace App\Models;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Database\Eloquent\Builder;


class User extends Authenticatable
{
    use SoftDeletes;

    protected $table = 'users';

    protected $primaryKey = 'id';
    protected $guarded = ['id'];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'hash_password', 'token', 'deleted_at'
    ];

    public function messages()
    {
        return $this->hasMany(Message::class, 'user_from_id');
    }

    public function status()
    {
        return $this->belongsTo(Status::class, 'status_id');
    }

    public function comments()
    {
        return $this->hasMany(Comment::class);
    }

    public function subscriptions()
    {
        return $this->hasMany(Subscription::class);
    }

    public function topicSubscriptions()
    {
        return $this->morphedByMany(Topic::class, 'subscription');
    }

    public function voteSubscriptions()
    {
        return $this->morphedByMany(Vote::class, 'subscription');
    }

    public function topics()
    {
        return $this->hasMany(Topic::class);
    }

    public function subscriptionsRss()
    {
        return $this->hasMany(SubscribeRss::class);
    }

    public function bookmarks()
    {
        return $this->belongsToMany(Topic::class, 'bookmarks', 'user_id', 'topic_id');
    }

    public function votes()
    {
        return $this->hasMany(Vote::class);
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

    public function likes()
    {
        return $this->hasMany(Like::class);
    }

    public function getVote($voteId)
    {
        return $this->votes()->where('id',$voteId)->first();
    }

    public function role()
    {
        return $this->belongsTo(Role::class);
    }

    /**
     * Does user have admin rights
     *
     * @return bool
     */
    public function isAdmin()
    {
        $role = $this->role()->first();

        if ($role && $role->name === 'Admin') {
            return true;
        }

        return false;
    }

    /**
     * Is the user the owner of the related model
     *
     * @param $related
     * @return bool
     */
    public function owns($related)
    {
        return $this->id == $related->user_id;
    }

    public static function findUserByGlobalId($globalId)
    {
        $_this = new self;
        try {
            $user = $_this->withTrashed()->where('global_id',$globalId)->firstOrFail();
        }
        catch  (ModelNotFoundException $e){
            return null;
        }

        return $user;
    }

    public static function findUserByEmail($email)
    {
        $_this = new self;
        try {
            $user = $_this->withTrashed()->where('email',$email)->firstOrFail();
        }
        catch  (ModelNotFoundException $e){
            return null;
        }
        return $user;
    }
    
    public function votesWithPermission()
    {
        return $this->belongsToMany(User::class, 'vote_permissions', 'user_id')->withTimestamps();
    }
    
    /**
     * Scope a query to only include users which contain a searching text in the users's first_name,
     *  last_name, email.
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @param string $searchStr
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeFilterByQuery(Builder $query, $searchStr)
    {
        if ($searchStr) {
            $query = $query->where('first_name','LIKE','%'.$searchStr.'%')
                ->orWhere('last_name','LIKE','%'.$searchStr.'%')
                ->orWhere('email','LIKE','%'.$searchStr.'%');
        }

        return $query;
    }

    public function scopeFilterByStatus(Builder $query, $statusName)
    {
        if ($statusName) {
            $status = Status::select('id')->where('name', $statusName)->first();
            if (!$status) {
                return $query;
            }
            $status_id = $status->id;
            $query = $query->where('status_id', $status_id);
        }

        return $query;
    }
}
