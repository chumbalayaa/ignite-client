import React, { Component } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import {
  UserOutlined,
  LockOutlined,
} from "../../node_modules/@ant-design/icons";
import { userService } from "../_services/user.service";
import axios from "axios";

const FormItem = Form.Item;

export default class Login extends Component {
  constructor (props) {
    super(props);
  }

  handleFailedResponse () {
    console.log("hi");
  }

  handleSuccessResponse (res) {
    console.log(res);
  }

  onFinish(values) {
    const req = {
      email: values.email,
      password: values.password
    }
    return userService.getUser(req)
      .then((res) => this.handleSuccessResponse(res))
  }

  render() {
    return (
      <Form onFinish={this.onFinish} className="login-form">
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
          <a className="login-form-forgot" href="">
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
          Or <a href="">register now!</a>
        </FormItem>
      </Form>
    );
  }
}
