<?php

use Illuminate\Database\Seeder;

class VoteTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      
        $count_votes = 20;

        factory(App\Models\Vote::class, $count_votes)->create()->each(function($vote) {
            $comment = factory(App\Models\Comment::class)->make();
            $comment = $vote->comments()->save($comment);

        });

    }
}
