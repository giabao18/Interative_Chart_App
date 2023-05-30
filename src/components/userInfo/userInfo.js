import { Button, Typography, Avatar } from 'antd'
import React, { useEffect, useContext } from 'react'
import styles from './userInfo.module.scss'
import classNames from 'classnames/bind'
import { auth } from '~/Firebase/config'
import { AuthContext } from '~/Context/AuthProvider'

const cx = classNames.bind(styles)


export default function UserInfo() {

    const { user: {
        displayName,
        photoURL,
    } } = useContext(AuthContext)

    return (
        <div
            className={cx('user_Info')}
        >
            <div>
                <Avatar
                    src={photoURL}
                >
                    {photoURL ? '' : displayName?.charAt(0)?.toUpperCase()}
                </Avatar>
                <Typography.Text className={cx('user_name')}>{displayName}</Typography.Text>
            </div>
            <Button onClick={() => auth.signOut()} ghost>Log Out</Button>
        </div>
    )
}
