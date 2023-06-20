
import React from 'react'
import { ColorPicker, Row, Col, Button, Typography, Checkbox, Form, Input } from 'antd'
import classNames from 'classnames/bind'
import { serverTimestamp, query, auth, db, FacebookAuthProvider, GoogleAuthProvider, signInWithPopup, getAdditionalUserInfo, collection, doc, getDoc, addDoc } from "~/firebase/config.js"
import { addDocument } from '~/firebase/service'
import { FacebookFilled, GoogleOutlined } from '@ant-design/icons';
import { images } from '~/assets/index.js'
import styles from './login.module.scss'

const cx = classNames.bind(styles)
const { Title } = Typography
var fbProvider = new FacebookAuthProvider(auth);
var ggProvider = new GoogleAuthProvider(auth)

export default function Login() {

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const handleFbLogin = async () => {

        const userCheck = await signInWithPopup(auth, fbProvider)

        if (getAdditionalUserInfo(userCheck).isNewUser) {
            const { user, providerId } = userCheck

            addDocument('users', {
                displayName: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
                uid: user.uid,
                providerId: providerId
            })
        }
    }

    const handleGgLogin = async () => {

        const userCheck = await signInWithPopup(auth, ggProvider)
        if (getAdditionalUserInfo(userCheck).isNewUser) {
            const { user, providerId } = userCheck

            addDocument('users', {
                displayName: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
                uid: user.uid,
                providerId: providerId
            })
        }
    }


    return (
        <div className={cx('login')} >

            <div className={cx('login_logo')}>
                <div className={cx('login_logo_img')}>
                    <img styles={{ maxWidth: '100px' }} src={images.logo} alt='logo' />
                </div>
            </div>


            <div className={cx('login_form')}>
                <div className={cx('login_form_layout')}>
                    <Title style={{ textAlign: 'center', fontFamily: "nunito, sans-serif", fontWeight: 800, color: "#6439ff" ,margin: "0 0 40px 0"}} level={1}>
                        Interactive Chart App
                    </Title>

                    <Form
                        name="basic"
                        size='large'
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                        layout='vertical'
                    >


                        <Form.Item
                            label={
                                <p className={cx('form_label')}>UserName</p>
                            }
                            style={{ color: '#6439ff' }}
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label={
                                <p className={cx('form_label')}>Password</p>
                            }
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item
                            name="remember"
                            valuePropName="checked"
                        >
                            <Checkbox>
                                {<p className={cx('form_label_small')}>Remember me</p>}
                            </Checkbox>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" color='#6439ff'>
                                Submit
                            </Button>
                        </Form.Item>

                        <Form.Item>
                            <div style={{ display: 'flex', justifyContent: 'space-between', margin: '0 20px 0 20px' }}>
                                <Button icon={<GoogleOutlined />} onClick={() => handleGgLogin()}>
                                    Login by Google
                                </Button >

                                <Button icon={<FacebookFilled />} onClick={() => handleFbLogin()}>
                                    Login by Facebook
                                </Button>
                            </div>
                        </Form.Item>


                    </Form>
                </div>
            </div>
        </div>
    )
}


