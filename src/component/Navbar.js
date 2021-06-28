import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import FeaturedPlayListOutlinedIcon from '@material-ui/icons/FeaturedPlayListOutlined';
import AssignmentTurnedInOutlinedIcon from '@material-ui/icons/AssignmentTurnedInOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from '@material-ui/icons/Language';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import "../css/Navbar.css";


function Navbar() {
    return (
        <div  className='qHeader'>

           <div className="qHeader_logo">
                <img className='logo'src='1.png' alt=""/>
           </div>
           <div className="qHeader_icons">
                
                <div className="qHeader_icon">
                    <HomeIcon/>
                </div>
                <div className="qHeader_icon">
                    <FeaturedPlayListOutlinedIcon/>
                </div>
                <div className="qHeader_icon">
                    <AssignmentTurnedInOutlinedIcon/>
                </div>
                <div className="qHeader_icon">
                    <PeopleAltOutlinedIcon/>
                </div>
                <div className="qHeader_icon">
                    < NotificationsOutlinedIcon />

                </div>
                <div className="qHeader_input">
                    <SearchIcon/>
                    <input type='text' placeholder='Search Quora'/>
                </div>
                <div className="qHeader_Rem">
                    <div className="qHeader_avatar">
                        <Avatar/>
                        
                    </div>
                    <LanguageIcon/>
                    <Button>Add Question</Button>
                </div>
            </div>
        </div>
        
    )
}

export default Navbar;
