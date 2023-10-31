const apiUserSeeder = require("./app/api/user/seeder/seeder");
const apiUserrolesSeeder = require("./app/api/user_roles/seeder/seeder")
const apiUseracheivementSeeder = require("./app/api/user_acheivements/seeder/seeder")
const apiUsercontactnumberSeeder = require("./app/api/user_contact_numbers/seeder/seeder")
const apiUsereducationSeeder = require("./app/api/user_educations/seeder/seeder")
const apiUseremailSeeder = require("./app/api/user_emails/seeder/seeder")
const apiUsersociallinkSeeder = require("./app/api/user_social_links/seeder/seeder")
const apiUserprofileinfoSeeder = require("./app/api/user_profile_infos/seeder/seeder")

const seed = async () => {
    // await apiUserrolesSeeder();
    // await apiUserSeeder();
    await apiUseracheivementSeeder();
    await apiUsercontactnumberSeeder();
    await apiUsereducationSeeder();
    await apiUseremailSeeder();
    await apiUsersociallinkSeeder();
    await apiUserprofileinfoSeeder();
}

seed();