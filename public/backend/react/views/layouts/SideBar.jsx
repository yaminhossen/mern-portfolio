import React from 'react'
import SingleLink from './components/SingleLink'
import DropDownLink from './components/DropDownLink'

function SideBar() {
    return (
        <nav>
            <ul>
                <SingleLink to={'/'} text={'Dashboard'} icon={'monitoring'}></SingleLink>

                <li>
                    <DropDownLink text={'Users'} icon={'manage_accounts'}></DropDownLink>
                    <ul>
                        <SingleLink to={'/user'} text={'all'} icon={'trip_origin'}></SingleLink>
                        <SingleLink to={'/user/create'} text={'create'} icon={'trip_origin'}></SingleLink>
                    </ul>
                </li>

                <li>
                    <DropDownLink text={'User Roles'} icon={'manage_accounts'}></DropDownLink>
                    <ul>
                        <SingleLink to={'/user-role'} text={'all'} icon={'trip_origin'}></SingleLink>
                        <SingleLink to={'/user-role/create'} text={'create'} icon={'trip_origin'}></SingleLink>

                    </ul>
                </li>
                <li>
                    <DropDownLink text={'User Acheivement'} icon={'manage_accounts'}></DropDownLink>
                    <ul>
                        <SingleLink to={'/user-acheivement'} text={'all'} icon={'trip_origin'}></SingleLink>
                        <SingleLink to={'/user-acheivement/create'} text={'create'} icon={'trip_origin'}></SingleLink>

                    </ul>
                </li>
                <li>
                    <DropDownLink text={'User Contact Number'} icon={'manage_accounts'}></DropDownLink>
                    <ul>
                        <SingleLink to={'/user-contact-number'} text={'all'} icon={'trip_origin'}></SingleLink>
                        <SingleLink to={'/user-contact-number/create'} text={'create'} icon={'trip_origin'}></SingleLink>

                    </ul>
                </li>
                <li>
                    <DropDownLink text={'User Education'} icon={'manage_accounts'}></DropDownLink>
                    <ul>
                        <SingleLink to={'/user-education'} text={'all'} icon={'trip_origin'}></SingleLink>
                        <SingleLink to={'/user-education/create'} text={'create'} icon={'trip_origin'}></SingleLink>

                    </ul>
                </li>
                <li>
                    <DropDownLink text={'User Email'} icon={'manage_accounts'}></DropDownLink>
                    <ul>
                        <SingleLink to={'/user-email'} text={'all'} icon={'trip_origin'}></SingleLink>
                        <SingleLink to={'/user-email/create'} text={'create'} icon={'trip_origin'}></SingleLink>

                    </ul>
                </li>
                <li>
                    <DropDownLink text={'User Profile Info'} icon={'manage_accounts'}></DropDownLink>
                    <ul>
                        <SingleLink to={'/user-profile-info'} text={'all'} icon={'trip_origin'}></SingleLink>
                        <SingleLink to={'/user-profile-info/create'} text={'create'} icon={'trip_origin'}></SingleLink>

                    </ul>
                </li>
                <li>
                    <DropDownLink text={'User Social Link'} icon={'manage_accounts'}></DropDownLink>
                    <ul>
                        <SingleLink to={'/user-social-link'} text={'all'} icon={'trip_origin'}></SingleLink>
                        <SingleLink to={'/user-social-link/create'} text={'create'} icon={'trip_origin'}></SingleLink>

                    </ul>
                </li>


            </ul>
        </nav>
    )
}

export default SideBar