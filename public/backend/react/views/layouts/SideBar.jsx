import React from 'react'
import SingleLink from './components/SingleLink'
import DropDownLink from './components/DropDownLink'

function SideBar() {
    return (
        <nav>
            <ul>
                <SingleLink to={'/'} text={'Dashboard'} icon={'monitoring'}></SingleLink>

                <li>
                    <DropDownLink text={'User Management'} icon={'manage_accounts'}></DropDownLink>
                    <ul>
                        <SingleLink to={'/user'} text={'users'} icon={'trip_origin'}></SingleLink>
                        <SingleLink to={'/user-role'} text={'user-roles'} icon={'trip_origin'}></SingleLink>
                        <SingleLink to={'/user-acheivement'} text={'user-acheivements'} icon={'trip_origin'}></SingleLink>
                        <SingleLink to={'/user-contact-number'} text={'user-contact-numbers'} icon={'trip_origin'}></SingleLink>
                        <SingleLink to={'/user-education'} text={'user-educations'} icon={'trip_origin'}></SingleLink>
                        <SingleLink to={'/user-email'} text={'user-emails'} icon={'trip_origin'}></SingleLink>
                        <SingleLink to={'/user-profile-info'} text={'user-profile-infos'} icon={'trip_origin'}></SingleLink>
                        <SingleLink to={'/user-social-link'} text={'user-social-links'} icon={'trip_origin'}></SingleLink>

                    </ul>
                </li>

               

                {/* blog link */}
                <li>
                    <DropDownLink text={'Blog'} icon={'manage_accounts'}></DropDownLink>
                    <ul>
                        <SingleLink to={'/blog'} text={'all'} icon={'trip_origin'}></SingleLink>
                        <SingleLink to={'/blog-categorie'} text={'blog-categorie'} icon={'trip_origin'}></SingleLink>
                        <SingleLink to={'/blog-comment'} text={'blog-comment'} icon={'trip_origin'}></SingleLink>
                        <SingleLink to={'/blog-comment-reply'} text={'blog-comment-reply'} icon={'trip_origin'}></SingleLink>
                        <SingleLink to={'/blog-image'} text={'blog-image'} icon={'trip_origin'}></SingleLink>

                    </ul>
                </li>
               

                {/* content link */}
                <li>
                    <DropDownLink text={'Content'} icon={'manage_accounts'}></DropDownLink>
                    <ul>
                        <SingleLink to={'/content'} text={'content'} icon={'trip_origin'}></SingleLink>
                        <SingleLink to={'/content-categorie'} text={'content-categorie'} icon={'trip_origin'}></SingleLink>
                        <SingleLink to={'/content-comment'} text={'content-comment'} icon={'trip_origin'}></SingleLink>
                        <SingleLink to={'/content-comment-reply'} text={'content-comment-reply'} icon={'trip_origin'}></SingleLink>
                        <SingleLink to={'/content-image'} text={'content-image'} icon={'trip_origin'}></SingleLink>

                    </ul>
                </li>
               

                {/* contact message */}

                <li>
                    <DropDownLink text={'Contact Messages'} icon={'manage_accounts'}></DropDownLink>
                    <ul>
                        <SingleLink to={'/contact-message'} text={'all'} icon={'trip_origin'}></SingleLink>

                    </ul>
                </li>

                {/*banner */}

                <li>
                    <DropDownLink text={'Banners'} icon={'manage_accounts'}></DropDownLink>
                    <ul>
                        <SingleLink to={'/banner'} text={'all'} icon={'trip_origin'}></SingleLink>

                    </ul>
                </li>

                {/*setting link */}

                <li>
                    <DropDownLink text={'Setting Titles'} icon={'manage_accounts'}></DropDownLink>
                    <ul>
                        <SingleLink to={'/setting-title'} text={'all'} icon={'trip_origin'}></SingleLink>
                        <SingleLink to={'/setting-value'} text={'all'} icon={'trip_origin'}></SingleLink>


                    </ul>
                </li>

                {/* photo gallery */}
                <li>
                    <DropDownLink text={'Photo Gallery Categorie'} icon={'manage_accounts'}></DropDownLink>
                    <ul>
                        <SingleLink to={'/photo-gallery-categorie'} text={'all'} icon={'trip_origin'}></SingleLink>
                        <SingleLink to={'/photo-gallery-image'} text={'all'} icon={'trip_origin'}></SingleLink>


                    </ul>
                </li>
              

                {/* video gallery */}
                <li>
                    <DropDownLink text={'Video Gallery Categorie'} icon={'manage_accounts'}></DropDownLink>
                    <ul>
                        <SingleLink to={'/video-gallery-categorie'} text={'all'} icon={'trip_origin'}></SingleLink>
                        <SingleLink to={'/video-gallery-image'} text={'all'} icon={'trip_origin'}></SingleLink>


                    </ul>
                </li>
                

                {/* site url*/}
                <li>
                    <DropDownLink text={'Site Url'} icon={'manage_accounts'}></DropDownLink>
                    <ul>
                        <SingleLink to={'/site-url'} text={'all'} icon={'trip_origin'}></SingleLink>
                        <SingleLink to={'/site-url-view-count'} text={'all'} icon={'trip_origin'}></SingleLink>


                    </ul>
                </li>
             
                {/* tag*/}
                <li>
                    <DropDownLink text={'Tag'} icon={'manage_accounts'}></DropDownLink>
                    <ul>
                        <SingleLink to={'/tag'} text={'all'} icon={'trip_origin'}></SingleLink>

                    </ul>
                </li>



                {/* practice perpous */}


            </ul>
        </nav>
    )
}

export default SideBar