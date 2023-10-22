import userSlice from "../views/pages/users/config/store";
import userRoleSlice from "../views/pages/user_roles/config/store";
import { configureStore } from "@reduxjs/toolkit";


const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        user_role: userRoleSlice.reducer,
    }
});

// Can still subscribe to the store
// store.subscribe(() => console.log(store.getState()))

// // Still pass action objects to `dispatch`, but they're created for us
// store.dispatch(incremented())
// {value: 1}
// store.dispatch(incremented())
// // {value: 2}
// store.dispatch(decremented())
// // {value: 1}

export default store;