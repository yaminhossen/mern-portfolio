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

                {/* blog link */}
                <li>
                    <DropDownLink text={'Blog'} icon={'manage_accounts'}></DropDownLink>
                    <ul>
                        <SingleLink to={'/blog'} text={'all'} icon={'trip_origin'}></SingleLink>
                        <SingleLink to={'/blog/create'} text={'create'} icon={'trip_origin'}></SingleLink>

                    </ul>
                </li>
                <li>
                    <DropDownLink text={'Blog Categories'} icon={'manage_accounts'}></DropDownLink>
                    <ul>
                        <SingleLink to={'/blog-categorie'} text={'all'} icon={'trip_origin'}></SingleLink>
                        <SingleLink to={'/blog-categorie/create'} text={'create'} icon={'trip_origin'}></SingleLink>

                    </ul>
                </li>
                <li>
                    <DropDownLink text={'Blog Comments'} icon={'manage_accounts'}></DropDownLink>
                    <ul>
                        <SingleLink to={'/blog-comment'} text={'all'} icon={'trip_origin'}></SingleLink>
                        <SingleLink to={'/blog-comment/create'} text={'create'} icon={'trip_origin'}></SingleLink>

                    </ul>
                </li>
                <li>
                    <DropDownLink text={'Blog Comment Replies'} icon={'manage_accounts'}></DropDownLink>
                    <ul>
                        <SingleLink to={'/blog-comment-reply'} text={'all'} icon={'trip_origin'}></SingleLink>
                        <SingleLink to={'/blog-comment-reply/create'} text={'create'} icon={'trip_origin'}></SingleLink>

                    </ul>
                </li>
                
                <li>
                    <DropDownLink text={'Blog Images'} icon={'manage_accounts'}></DropDownLink>
                    <ul>
                        <SingleLink to={'/blog-image'} text={'all'} icon={'trip_origin'}></SingleLink>
                        <SingleLink to={'/blog-image/create'} text={'create'} icon={'trip_origin'}></SingleLink>

                    </ul>
                </li>
                

                {/* practice perpous */}

                
            </ul>
        </nav>
    )
}

export default SideBar