import React, { Component, useState } from "react";
import { Layout, Form, Input, Select, Card, Button, Checkbox, Row } from "antd";
import { artistService } from "../_services/artist.service";
import { authenticationService } from "../_services/";

import { history } from "../_helpers";

const { Header, Sider, Content, Footer } = Layout;
const FormItem = Form.Item;

const CustomizedForm = ({ fields, disabled, onChange, onSubmit }) => (
  <Form
    name="artistProfile"
    layout="inline"
    fields={fields}
    onFieldsChange={(changedFields, allFields) => {
      onChange(allFields);
    }}
  >
    <FormItem
      name="name"
      label="Artist Name"
      rules={[
        {
          required: true,
          message: "Username is required!",
        },
      ]}
    >
      <Input disabled={disabled} />
    </FormItem>
    <FormItem
      name="type"
      label="Type"
      rules={[
        {
          required: true,
          message: "Type is required!",
        },
      ]}
    >
      <Input disabled={disabled} />
    </FormItem>
    <FormItem
      name="instrument"
      label="Instrument"
      rules={[
        {
          required: true,
          message: "Instrument is required!",
        },
      ]}
    >
      <Input disabled={disabled} />
    </FormItem>
    {/*
    <FormItem
      name='videoLinks'
      label='Links'
    >
      <Input
        disabled={disabled}
      />
    </FormItem>
    */}
  </Form>
);

export default class ArtistProfileComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: authenticationService.currentUserValue,
      initLoading: true,
      confirmLoading: false,
      showEdit: false,
      showSave: false,
      artistFormVisible: false,
      artistFormDisabled: true,
      isArtist: false,
      artistData: {
        name: null,
        type: null,
        instrument: null,
        videoLinks: [null],
      },
    };

    this.handleInitLoad = this.handleInitLoad.bind(this);
    this.artistFormChange = this.artistFormChange.bind(this);
    this.onCheckboxChange = this.onCheckboxChange.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.onSave = this.onSave.bind(this);
    this.updateArtistDataInView = this.updateArtistDataInView.bind(this);
  }

  componentDidMount() {
    const req = {
      email: this.state.currentUser.email,
      password: this.state.currentUser.password,
    };
    return artistService
      .getArtistData(req)
      .then((result) => this.handleInitLoad(result))
      .catch((err) => console.log(err));
  }

  handleInitLoad(user) {
    console.log(user);
    if (user.isArtist) {
      this.setState({
        initLoading: false,
        showEdit: true,
        artistFormVisible: true,
        isArtist: true,
        artistData: {
          name: user.artistData.name,
          type: user.artistData.type,
          instrument: user.artistData.instrument,
          //videoLinks: user.artist.videoLinks,
        },
      });
    } else {
      this.setState({
        initLoading: false,
      });
    }
  }

  onCheckboxChange() {
    this.setState({
      artistFormVisible: !this.state.artistFormVisible,
      artistFormDisabled: !this.state.artistFormDisabled,
      showSave: !this.state.showSave,
    });
  }

  artistFormChange(newFields) {
    this.setState({
      artistData: {
        name: newFields[0].value,
        type: newFields[1].value,
        instrument: newFields[2].value,
        //videoLinks: newFields[3].value,
      },
    });
  }

  onEdit() {
    this.setState({
      showEdit: false,
      showSave: true,
      artistFormDisabled: false,
    });
  }

  onSave() {
    this.setState({
      confirmLoading: true,
    });
    console.log(this.state.artistData);
    const req = {
      email: this.state.currentUser.email,
      password: this.state.currentUser.password,
      name: this.state.artistData.name,
      type: this.state.artistData.type,
      instrument: this.state.artistData.instrument,
    };
    artistService
      .updateArtist(req)
      .then((result) => this.updateArtistDataInView(result))
      .catch((err) => console.log(err));
  }

  updateArtistDataInView(artistData) {
    this.setState({
      confirmLoading: false,
      showEdit: true,
      showSave: false,
      artistFormVisible: true,
      artistFormDisabled: true,
      isArtist: true,
      artistData: {
        name: artistData.name,
        type: artistData.type,
        instrument: artistData.instrument,
        videoLinks: [null],
      },
    });
  }

  render() {
    const {
      showEdit,
      showSave,
      artistFormVisible,
      artistFormDisabled,
      isArtist,
      artistData,
    } = this.state;
    let artistCheckbox, editButton, saveButton, artistForm;
    if (isArtist) {
      artistCheckbox = (
        <div>
          <Checkbox defaultChecked disabled>
            Already registered as Artist
          </Checkbox>
        </div>
      );
    } else {
      artistCheckbox = (
        <div>
          <Checkbox onChange={this.onCheckboxChange}>
            Register as Artist
          </Checkbox>
        </div>
      );
    }
    if (showEdit) {
      editButton = (
        <div
          style={{
            textAlign: "center",
            marginTop: 12,
            height: 32,
            lineHeight: "32px",
          }}
        >
          <Button onClick={this.onEdit}>Edit</Button>
        </div>
      );
    } else {
      editButton = null;
    }
    if (showSave) {
      saveButton = (
        <div
          style={{
            textAlign: "center",
            marginTop: 12,
            height: 32,
            lineHeight: "32px",
          }}
        >
          <Button onClick={this.onSave}>Save</Button>
        </div>
      );
    } else {
      saveButton = null;
    }
    if (artistFormVisible) {
      artistForm = (
        <CustomizedForm
          fields={[
            { name: ["name"], value: artistData.name },
            { name: ["type"], value: artistData.type },
            { name: ["instrument"], value: artistData.instrument },
            //{name: ['videoLinks'], value: artistData.videoLinks.toString()},
          ]}
          disabled={artistFormDisabled}
          onChange={(newFields) => {
            this.artistFormChange(newFields);
          }}
          onSubmit={console.log("DOPE")}
        />
      );
    } else {
      artistForm = null;
    }

    return (
      <div id="artistProfileMain">
        <Row>{artistCheckbox}</Row>
        <Row>
          {artistForm}
          {editButton}
          {saveButton}
        </Row>
      </div>
    );
  }
}
