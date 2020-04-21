import React, { Component } from "react";
import { Form, Input, Button } from "antd";

import { userService } from "../_services/user.service";

import { history } from "../_helpers";

const FormItem = Form.Item;

export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.handleResponse = this.handleResponse.bind(this);
    this.onFinish = this.onFinish.bind(this);
  }

  handleResponse(res) {
    if (res) {
      history.push("/");
      window.location.reload(true);
    } else {
      alert("Not authorized, please try again");
    }
  }

  onFinish(values) {
    const newUser = {
      firstName: values.formFirstName,
      lastName: values.formLastName,
      email: values.formEmail,
      password: values.formPassword,
    };
    console.log(newUser);
    return userService
      .createNewUser(newUser)
      .then((result) => this.handleResponse(result))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <Form onFinish={this.onFinish} className="signup-form">
        <FormItem
          name="formFirstName"
          rules={[{ required: true, message: "Please input your first name!" }]}
        >
          <Input placeholder="First name" />
        </FormItem>
        <FormItem
          name="formLastName"
          rules={[{ required: true, message: "Please input your last name!" }]}
        >
          <Input placeholder="Last name" />
        </FormItem>
        <FormItem
          name="formEmail"
          rules={[
            { type: "email", message: "The input is not a value E-mail" },
            { required: true, message: "Please input your E-mail!" },
          ]}
        >
          <Input placeholder="Email address" />
        </FormItem>
        <FormItem
          name="formPassword"
          rules={[{ required: true, message: "please input your password!" }]}
          hasFeedback
        >
          <Input.Password placeholder="Password" />
        </FormItem>
        <FormItem
          name="confirm"
          dependencies={["formPassword"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                if (!value || getFieldValue("formPassword") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  "The two passwords that you entered do not match!"
                );
              },
            }),
          ]}
        >
          <Input.Password placeholder="Confirm password" />
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit">
            Sign Up
          </Button>
        </FormItem>
      </Form>
    );
  }
}
