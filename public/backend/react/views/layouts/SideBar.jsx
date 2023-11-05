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

                {/* content link */}
                <li>
                    <DropDownLink text={'Content'} icon={'manage_accounts'}></DropDownLink>
                    <ul>
                        <SingleLink to={'/content'} text={'all'} icon={'trip_origin'}></SingleLink>
                        <SingleLink to={'/content/create'} text={'create'} icon={'trip_origin'}></SingleLink>

                    </ul>
                </li>
                <li>
                    <DropDownLink text={'Content Categories'} icon={'manage_accounts'}></DropDownLink>
                    <ul>
                        <SingleLink to={'/content-categorie'} text={'all'} icon={'trip_origin'}></SingleLink>
                        <SingleLink to={'/content-categorie/create'} text={'create'} icon={'trip_origin'}></SingleLink>

                    </ul>
                </li>
                <li>
                    <DropDownLink text={'Content Comments'} icon={'manage_accounts'}></DropDownLink>
                    <ul>
                        <SingleLink to={'/content-comment'} text={'all'} icon={'trip_origin'}></SingleLink>
                        <SingleLink to={'/content-comment/create'} text={'create'} icon={'trip_origin'}></SingleLink>

                    </ul>
                </li>
                <li>
                    <DropDownLink text={'Content Comment Replies'} icon={'manage_accounts'}></DropDownLink>
                    <ul>
                        <SingleLink to={'/content-comment-reply'} text={'all'} icon={'trip_origin'}></SingleLink>
                        <SingleLink to={'/content-comment-reply/create'} text={'create'} icon={'trip_origin'}></SingleLink>

                    </ul>
                </li>
                <li>
                    <DropDownLink text={'Content Images'} icon={'manage_accounts'}></DropDownLink>
                    <ul>
                        <SingleLink to={'/content-image'} text={'all'} icon={'trip_origin'}></SingleLink>
                        <SingleLink to={'/content-image/create'} text={'create'} icon={'trip_origin'}></SingleLink>

                    </ul>
                </li>

                {/* contact message */}

                <li>
                    <DropDownLink text={'Contact Messages'} icon={'manage_accounts'}></DropDownLink>
                    <ul>
                        <SingleLink to={'/contact-message'} text={'all'} icon={'trip_origin'}></SingleLink>
                        <SingleLink to={'/contact-message/create'} text={'create'} icon={'trip_origin'}></SingleLink>

                    </ul>
                </li>

                {/*banner */}

                <li>
                    <DropDownLink text={'Banners'} icon={'manage_accounts'}></DropDownLink>
                    <ul>
                        <SingleLink to={'/banner'} text={'all'} icon={'trip_origin'}></SingleLink>
                        <SingleLink to={'/banner/create'} text={'create'} icon={'trip_origin'}></SingleLink>

                    </ul>
                </li>

                {/*setting link */}

                <li>
                    <DropDownLink text={'Setting Titles'} icon={'manage_accounts'}></DropDownLink>
                    <ul>
                        <SingleLink to={'/setting-title'} text={'all'} icon={'trip_origin'}></SingleLink>
                        <SingleLink to={'/setting-title/create'} text={'create'} icon={'trip_origin'}></SingleLink>

                    </ul>
                </li>
                <li>
                    <DropDownLink text={'Setting Values'} icon={'manage_accounts'}></DropDownLink>
                    <ul>
                        <SingleLink to={'/setting-value'} text={'all'} icon={'trip_origin'}></SingleLink>
                        <SingleLink to={'/setting-value/create'} text={'create'} icon={'trip_origin'}></SingleLink>

                    </ul>
                </li>

                {/* photo gallery */}
                <li>
                    <DropDownLink text={'Photo Gallery Categorie'} icon={'manage_accounts'}></DropDownLink>
                    <ul>
                        <SingleLink to={'/photo-gallery-categorie'} text={'all'} icon={'trip_origin'}></SingleLink>
                        <SingleLink to={'/photo-gallery-categorie/create'} text={'create'} icon={'trip_origin'}></SingleLink>

                    </ul>
                </li>
                <li>
                    <DropDownLink text={'Photo Gallery Image'} icon={'manage_accounts'}></DropDownLink>
                    <ul>
                        <SingleLink to={'/photo-gallery-image'} text={'all'} icon={'trip_origin'}></SingleLink>
                        <SingleLink to={'/photo-gallery-image/create'} text={'create'} icon={'trip_origin'}></SingleLink>

                    </ul>
                </li>

                {/* video gallery */}
                <li>
                    <DropDownLink text={'Video Gallery Categorie'} icon={'manage_accounts'}></DropDownLink>
                    <ul>
                        <SingleLink to={'/video-gallery-categorie'} text={'all'} icon={'trip_origin'}></SingleLink>
                        <SingleLink to={'/video-gallery-categorie/create'} text={'create'} icon={'trip_origin'}></SingleLink>

                    </ul>
                </li>
                <li>
                    <DropDownLink text={'Video Gallery Image'} icon={'manage_accounts'}></DropDownLink>
                    <ul>
                        <SingleLink to={'/video-gallery-image'} text={'all'} icon={'trip_origin'}></SingleLink>
                        <SingleLink to={'/video-gallery-image/create'} text={'create'} icon={'trip_origin'}></SingleLink>

                    </ul>
                </li>

                {/* site url*/}
                <li>
                    <DropDownLink text={'Site Url'} icon={'manage_accounts'}></DropDownLink>
                    <ul>
                        <SingleLink to={'/site-url'} text={'all'} icon={'trip_origin'}></SingleLink>
                        <SingleLink to={'/site-url/create'} text={'create'} icon={'trip_origin'}></SingleLink>

                    </ul>
                </li>
                <li>
                    <DropDownLink text={'Site Url View Count'} icon={'manage_accounts'}></DropDownLink>
                    <ul>
                        <SingleLink to={'/site-url-view-count'} text={'all'} icon={'trip_origin'}></SingleLink>
                        <SingleLink to={'/site-url-view-count/create'} text={'create'} icon={'trip_origin'}></SingleLink>

                    </ul>
                </li>

                

                {/* practice perpous */}

                
            </ul>
        </nav>
    )
}

export default SideBar