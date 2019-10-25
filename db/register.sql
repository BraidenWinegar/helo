Insert Into sim_users (
    username,
    password,
    picture
) values (
    $1, $2, $3
) returning *;


