import React from 'react';
import Login from '~/pages/Login';
import classNames from 'classnames/bind';
import styles from './loginLayout.module.scss';

const cx = classNames.bind(styles)

export default function LoginLayout() {
    return (
        <div classNames={cx('wrapper')}>
            <Login />
        </div>
    )
}
