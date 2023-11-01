import userSlice from "../views/pages/users/config/store";
import userRoleSlice from "../views/pages/user_roles/config/store";
import userAcheivementSlice from "../views/pages/user_acheivements/config/store";
import userContactNumberSlice from "../views/pages/user_contact_numbers/config/store";
import userEducationSlice from "../views/pages/user_educations/config/store";
import userEmailSlice from "../views/pages/user_emails/config/store";
import userProfileInfoSlice from "../views/pages/user_profile_infos/config/store";
import userSocialLinkSlice from "../views/pages/user_social_links/config/store";
import { configureStore } from "@reduxjs/toolkit";


const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        user_role: userRoleSlice.reducer,
        user_acheivement: userAcheivementSlice.reducer,
        user_contact_number: userContactNumberSlice.reducer,
        user_education: userEducationSlice.reducer,
        user_email: userEmailSlice.reducer,
        user_profile_info: userProfileInfoSlice.reducer,
        user_social_link: userSocialLinkSlice.reducer,
    }
});


export default store;