import {Checkbox,IconButton } from '@material-ui/core'
import {   TitleOutlined } from '@material-ui/icons'
import React from 'react'
import './EmailRow.css'
import StarBorderOutLinedIcon from '@material-ui/icons/StarOutline';
import LabelImportantOutlinedIcon from '@material-ui/icons/LabelImportant';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectMail } from './features/mailSlice';
function EmailRow({id, title, subject, description, time}) {

    const history = useHistory();

    const dispatch = useDispatch();
        const openMail = () => {
            dispatch(selectMail({id, title, subject, description, time,}))
            history.push("/mail")
        }
    return (
        <div onClick = {openMail} className = "emailRow">
            <div className="emailRow__options">
            <Checkbox />
            <IconButton>
                <StarBorderOutLinedIcon />
            </IconButton>
            <IconButton>
                <LabelImportantOutlinedIcon />
            </IconButton>
            

            </div>

            <h3 className="emailRow__title">
            {title}
            </h3>

            <div className="emailRow__message">
                <h4>
                    {subject}{" "}
                    <span className = "emailRow__description">
                        {description}
                    </span>
                </h4>
            </div>

            <p className="emailRow__description">
                {time}
            </p>
        </div>
    )
}

export default EmailRow
