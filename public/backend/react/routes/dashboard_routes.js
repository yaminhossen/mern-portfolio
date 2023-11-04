import React from 'react'
import DashboardLayout from '../views/layouts/DashboardLayout.jsx';
import Analytics from '../views/pages/dashboard/Analytics.jsx';
import Error404 from '../views/pages/errors/Error404.jsx';

import user_routes from '../views/pages/users/config/routes.js';
import user_role_routes from '../views/pages/user_roles/config/routes.js';
import user_acheivement_routes from '../views/pages/user_acheivements/config/routes.js';
import user_contact_numbers_routes from '../views/pages/user_contact_numbers/config/routes.js';
import user_education_routes from '../views/pages/user_educations/config/routes.js';
import user_email_routes from '../views/pages/user_emails/config/routes.js';
import user_profile_info_routes from '../views/pages/user_profile_infos/config/routes.js';
import user_social_link_routes from '../views/pages/user_social_links/config/routes.js';

import blog_routes from '../views/pages/blog/blogs/config/routes.js';
import blog_categorie_routes from '../views/pages/blog/blog_categories/config/routes.js';


const router = {
    path: "/",
    element: <DashboardLayout />,
    children: [
        {
            path: '',
            element: <Analytics></Analytics>
        },
        
        user_routes,
        user_role_routes,
        user_acheivement_routes,
        user_contact_numbers_routes,
        user_education_routes,
        user_email_routes,
        user_profile_info_routes,
        user_social_link_routes,
        blog_routes,
        blog_categorie_routes,
        
        {
            path: '*',
            element: <Error404/>
        },
    ]
};

export default router;