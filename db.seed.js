const apiUserSeeder = require("./app/api/user/seeder/seeder");
const apiUserrolesSeeder = require("./app/api/user_roles/seeder/seeder")

const seed = async () => {
    await apiUserrolesSeeder();
    await apiUserSeeder();
}

seed();