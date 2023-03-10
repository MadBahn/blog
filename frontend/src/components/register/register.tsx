import React from 'react';

import axios from "axios";

import {Button, Form, Input} from "antd";

function Register(props) {

    const onFinish = (values : any) => {
        console.log(values);

//        异步请求
        axios({
            url: "/user/register",
            method: "post",
            data: {
                register_form: values
            }
        }).then(res => {
            console.log(res);
        });
    };

    return (
         <div>
             <Form name="register" onFinish={onFinish}>
                 <Form.Item name="username">
                    <Input placeholder="用户名" />
                 </Form.Item>
                 <Form.Item name="password">
                    <Input.Password placeholder="密码"/>
                 </Form.Item>
                 <Form.Item name="confirm_password">
                    <Input.Password placeholder="确认密码"/>
                 </Form.Item>
                 <Form.Item>
                     <Button type="primary" htmlType="submit">注册</Button>
                 </Form.Item>
             </Form>
         </div>
    );
}

export default Register;