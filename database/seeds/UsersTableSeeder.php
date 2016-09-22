<?php

use Illuminate\Database\Seeder;
use App\Models\Status;
use App\Models\Role;
use App\Facades\CurlService;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $globalIds = [
            '56780606215c82267c1a3cc0',
            '567920fc215c82267c1a3cc3',
            '567a4f0f215c82267c1a3cc7',
            '567a5638b296f43825501236',
            '56782adb215c82267c1a3cc2',
            '567a6d5de07428ab2cc0b666',
            '567a6ebde07428ab2cc0b667',
            '567aa528af36a06513d96db2',
            '567aafcb4a25306f4ebeb0c9',
            '567ab1b24a25306f4ebeb0cd',
        ];
        $count_users = 10;
        $statuses = Status::all();

        $cookie = env('AUTH_COOKIE', null);
        if ($cookie) {
            $response = CurlService::sendUsersRequest(null, $cookie);
            $roleUser = Role::where('name', 'User')->first();
            foreach ($response as $companyUser) {
                $user = factory(App\Models\User::class)->make();
                $user->first_name = $companyUser->name;
                $user->last_name = $companyUser->surname;
                $user->display_name = $companyUser->name .  ' ' . $companyUser->surname;
                $user->email = $companyUser->email;
                $user->global_id = $companyUser->serverUserId;
                $randomStatus = $statuses->random();
                $user->status()->associate($randomStatus);
                $user->role()->associate($roleUser);
                $user->save();

            }

            $user = \App\Models\User::first();
            $roleAdmin = Role::where('name', 'Admin')->first();
            $user->role()->associate($roleAdmin);
            $user->save();
        } else {
            factory(App\Models\User::class, $count_users)
                ->make()
                ->each(function ($user) use ($statuses) {
                    $randomStatus = $statuses->random();
                    $user->status()->associate($randomStatus);
                    $user->save();
                });

            $users = App\Models\User::all();
            reset($globalIds);
            $roleUser = Role::where('name', 'User')->first();
            foreach ($users as $user) {
                $user->role()->associate($roleUser);
                $user->global_id = current($globalIds);
                next($globalIds);
                $user->save();
            }
            /**
             * Set right role for required users
             */
            $user = \App\Models\User::first();
            $roleAdmin = Role::where('name', 'Admin')->first();
            $user->role()->associate($roleAdmin);
            $user->save();

            $user = \App\Models\User::all()->last();
            $user->global_id = '577a16659829fe050adb3f5c';
            $user->email = 'tester_a@example.com';
            $user->save();
        }
    }
}
