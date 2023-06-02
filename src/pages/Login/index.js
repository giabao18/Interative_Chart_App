
import React from 'react'
import { Row, Col, Button, Typography, Checkbox, Form, Input } from 'antd'
import classNames from 'classnames'
import { serverTimestamp, query, auth, db, FacebookAuthProvider, GoogleAuthProvider, signInWithPopup, getAdditionalUserInfo, collection, doc, getDoc, addDoc } from "~/firebase/config.js"
import { addDocument } from '~/firebase/service'
import styles from './Login.module.scss'
import { FacebookFilled, GoogleOutlined } from '@ant-design/icons';


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
        <div>
            <Row span={8} style={{ display: 'flex', justifyContent: 'center', margin: '100px 0 0 0 ' }}>
                <Col span={8}>
                    <Title style={{ textAlign: 'center', fontFamily: "nunito, sans-serif", fontWeight: 800, color: "#6439ff" }} level={3}>
                        Interactive Chart App By GiaBao
                    </Title>

                    <Form
                        name="basic"

                        style={{
                            maxWidth: 600,
                        }}
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                        layout='vertical'
                    >


                        <Form.Item
                            label="Username"
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
                            label="Password"
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
                            <Checkbox>Remember me</Checkbox>
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
                </Col>
            </Row>
        </div>
    )
}


