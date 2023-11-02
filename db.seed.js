const apiUserSeeder = require("./app/api/user/seeder/seeder");
const apiUserrolesSeeder = require("./app/api/user_roles/seeder/seeder")
const apiUseracheivementSeeder = require("./app/api/user_acheivements/seeder/seeder")
const apiUsercontactnumberSeeder = require("./app/api/user_contact_numbers/seeder/seeder")
const apiUsereducationSeeder = require("./app/api/user_educations/seeder/seeder")
const apiUseremailSeeder = require("./app/api/user_emails/seeder/seeder")
const apiUsersociallinkSeeder = require("./app/api/user_social_links/seeder/seeder")
const apiUserprofileinfoSeeder = require("./app/api/user_profile_infos/seeder/seeder")
const apiBlogSeeder = require("./app/api/blog/blogs/seeder/seeder")
const apiBlogCategoriesSeeder = require("./app/api/blog/blog_categories/seeder/seeder")
const apiBlogCommentsSeeder = require("./app/api/blog/blog_comments/seeder/seeder")
const apiBlogCommentRepliesSeeder = require("./app/api/blog/blog_comment_replies/seeder/seeder")
const apiBlogimagesSeeder = require("./app/api/blog/blog_images/seeder/seeder")
const apiContentSeeder = require("./app/api/content/contents/seeder/seeder")
const apiContentCategoriesSeeder = require("./app/api/content/content_categories/seeder/seeder")
const apiContentCommentsSeeder = require("./app/api/content/content_comments/seeder/seeder")
const apiContentCommentRepliesSeeder = require("./app/api/content/content_comment_replies/seeder/seeder")
const apiContentimagesSeeder = require("./app/api/content/content_images/seeder/seeder")

const seed = async () => {

    // user seeder!!!
    await apiUserSeeder();
    await apiUserrolesSeeder();
    await apiUseracheivementSeeder();
    await apiUsercontactnumberSeeder();
    await apiUsereducationSeeder();
    await apiUseremailSeeder();
    await apiUsersociallinkSeeder();
    await apiUserprofileinfoSeeder();

    // blog seeder!!!
    await apiBlogSeeder();
    await apiBlogCategoriesSeeder();
    await apiBlogCommentsSeeder();
    await apiBlogCommentRepliesSeeder();
    await apiBlogimagesSeeder();

    // content seeder!!
    await apiContentSeeder();
    await apiContentCategoriesSeeder();
    await apiContentCommentsSeeder();
    await apiContentCommentRepliesSeeder();
    await apiContentimagesSeeder();
}

seed();