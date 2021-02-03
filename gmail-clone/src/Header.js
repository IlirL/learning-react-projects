import React from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import {Avatar,  IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AppIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { logout, selectUser } from './features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase';
function Header() {
   
    const user = useSelector(selectUser)
   const dispatch = useDispatch();
        const signOut = () => {
            auth.signOut().then(() => {
                dispatch(logout())

            })
        }
    return (
        <div className = "header">
            {/* <h1>This is the header</h1>dasdasd */}
            <div className="header__left">
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <img src="https://cdn.vox-cdn.com/thumbor/KR-xy8mq5tcusdVMtHKQmkekOVk=/0x0:1320x880/920x613/filters:focal(555x335:765x545):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/67798829/newgmaillogo.0.jpg" alt="GmailLogo"/>
            </div>

            <div className="header__middle">
                <SearchIcon />
                <input type="text" placeholder = "Search mail"/>
                <ArrowDropDownIcon className = "header__inputCaret" />
            </div>
       
            <div className="header__right">
                <IconButton>
                    <AppIcon />
                </IconButton>
                <IconButton>
                    <NotificationsIcon />
                </IconButton>

                <Avatar src = {user?.photoUrl} onClick = {signOut}/>
            </div>
       
       
        </div>

    )
}

export default Header
