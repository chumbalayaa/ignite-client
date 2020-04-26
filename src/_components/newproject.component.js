import React, { Component } from "react";
import { Modal, Form, Input, Radio } from "antd";
import { projectService } from "../_services/project.service";

import { history } from "../_helpers";

const FormItem = Form.Item;
const RadioGroup = Radio.Group;

const NewProjectModal = ({ visible, handleCreate, handleCancel }) => {
  const [form] = Form.useForm();
  return (
    <Modal
      title="Create a new project"
      visible={visible}
      okText="Create"
      cancelText="Cancel"
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            handleCreate(values);
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
      onCancel={handleCancel}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{ type: "Wedding" }}
      >
        <FormItem
          name="title"
          label="Title"
          rules={[{ required: true, message: "Please input project title" }]}
        >
          <Input />
        </FormItem>
        <FormItem name="type">
          <RadioGroup>
            <Radio value="Wedding">Wedding</Radio>
            <Radio value="Live Show">Live Show</Radio>
            <Radio value="Collaboration">Collaboration</Radio>
          </RadioGroup>
        </FormItem>
        <FormItem
          name="requirements"
          label="Requirements"
          rules={[{ required: true, message: "What do you need?" }]}
          style={{ marginBottom: "0" }}
        >
          <Input />
        </FormItem>
      </Form>
    </Modal>
  );
};

export default NewProjectModal;
