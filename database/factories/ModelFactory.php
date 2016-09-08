<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

$factory->define(App\Models\User::class, function (Faker\Generator $faker) {
    return [
        'first_name' => $faker->firstName,
        'last_name' => $faker->lastName,
        'display_name' => $faker->unique()->userName,
        'email' => $faker->safeEmail,
        'reputation' => $faker->numberBetween(0, 1000),
        'last_visit_at' => $faker->dateTimeThisYear
    ];
});

$factory->define(App\Models\Topic::class, function (Faker\Generator $faker) {
    $name = $faker->unique()->sentence;
    $slug = str_slug($name, '-');

    return [
        'reviewed_number' => $faker->numberBetween(0, 1000),
        'name' => $name,
        'description' => $faker->sentence,
        'rating' => $faker->numberBetween(0, 1000),
        'slug' => $slug,
    ];
});

$factory->define(App\Models\Comment::class, function (Faker\Generator $faker) {
    return [
        'content_origin' => $faker->text,
        'rating' => $faker->numberBetween(0, 1000),
        'content_generated' => $faker->text,
    ];
});

$factory->define(App\Models\Message::class, function (Faker\Generator $faker) {
    return [
        'message' => $faker->text,
        'is_read' => $faker->numberBetween(0, 1)
    ];
});

$factory->define(App\Models\Vote::class, function (Faker\Generator $faker) {
    return [
        'title' => $faker->word,
        'is_public' => $faker->numberBetween(0, 1),
        'is_saved' => $faker->numberBetween(0, 1),
        'finished_at' => date('Y:m:d H:m:s', strtotime('+' . $faker->numberBetween(5, 15) . ' days'))
    ];
});

$factory->define(App\Models\VoteItem::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->unique()->sentence
    ];
});

$factory->define(App\Models\Tag::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->unique()->word
    ];
});

$factory->define(App\Models\Category::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->unique()->word
    ];
});
