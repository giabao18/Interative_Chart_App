import React from 'react'
import Sidebar from '~/components/sidebar/Sidebar'
import Navbar from '~/components/navbar/Navbar'
import styles from './DefaultLayout.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

export default function DefaultLayout({ children }) {
    return (
        <div className={cx('Wrapper')}>
            <Sidebar />
            <div className={cx('Inner')}>
                <Navbar />
                {children}
            </div>
        </div>
    )
}
