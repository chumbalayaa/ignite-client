import React, { Component, useState } from "react";
import { Alert, Form, Input, Button, Checkbox } from "antd";
import {
  UserOutlined,
  LockOutlined,
} from "../../node_modules/@ant-design/icons";
import { userService } from "../_services/user.service";
import axios from "axios";

import { history } from "../_helpers";

const FormItem = Form.Item;

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.handleResponse = this.handleResponse.bind(this);
    this.onFinish = this.onFinish.bind(this);
  }

  handleResponse(res) {
    console.log(res);
    if (res) {
      history.push("/");
      window.location.reload(true);
    } else {
      alert("Failure");
    }
  }

  onFinish(values) {
    const req = {
      email: values.email,
      password: values.password,
    };
    return userService
      .getUser(req)
      .then((result) => this.handleResponse(result))
      .catch((err) => console.log("heyo", err));
  }

  render() {
    return (
      <Form onFinish={this.onFinish} className="login-form" id="loginForm">
        <FormItem
          name="email"
          rules={[{ required: true, message: "Please input your email" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email address"
          />
        </FormItem>
        <FormItem
          name="password"
          rules={[{ required: true, message: "Please input your password" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </FormItem>
        <FormItem name="remember" valuePropName="checked" noStyle>
          <FormItem>
            <Checkbox>Remember me</Checkbox>
          </FormItem>
          <a className="forgot-password" href="">
            Forgot password
          </a>
        </FormItem>
        <FormItem>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          Or <a href="/sign-up">register now!</a>
        </FormItem>
      </Form>
    );
  }
}
