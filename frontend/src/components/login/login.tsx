import React from 'react';

import axios from 'axios';

import {Button, Form, Input} from "antd";
import { createFromIconfontCN } from "@ant-design/icons";


function Login(props) {

    const onFinish = (values: any) => {
        console.log(values);

        axios({
            url: "/user/login",
            method: "post",
            data: {
                login_form: values
            }
        }).then();
    }

    return (
         <div>
             <Form
                name="login"
                onFinish={onFinish}
             >
                <Form.Item name="username">
                    <Input placeholder="用户名"/>
                </Form.Item>
                 <Form.Item name="password">
                    <Input.Password placeholder="密码"/>
                </Form.Item>
                 <Form.Item>
                     <Button type="primary" htmlType="submit">
                         登录
                     </Button>
                 </Form.Item>
             </Form>
         </div>
    );
}

export default Login;