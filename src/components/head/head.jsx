import { useMutation } from "@tanstack/react-query";
import { Button, Modal, Select, Upload } from "antd";
import Input from "antd/es/input/Input";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { instance } from "../../utils/axios";
import { UploadOutlined } from "@ant-design/icons";

import "./style.scss";
import { useAuthToken } from "../../context/context";
import { Link } from "react-router-dom";

const Head = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();

  const { token } = useAuthToken();

  const props = {
    name: "file",
    action: "http://3.138.204.20/upload/upload",
    headers: { Authorization: `Bearer ${token}` },
  };

  const mutation = useMutation((postdata) => {
    return instance.post("/auth/signup", postdata);
  });

  const onSubmitForm = (data) => {
    console.log(data);    
  };

  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };
  return (
    <div className="head">
      <div>
        <Input placeholder="Basic usage" />
      </div>
      <Link to="/create">
        <Button type="primary" style={{background: "rgb(47, 255, 203)", color: "black"}}>Add</Button>
      </Link>

      <Modal
        title="Title"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        width={600}
      >
        <div className="form-login4">
          <form action="" onSubmit={handleSubmit(onSubmitForm)}>
            <div className="uch-flex">
              <div>
                <label htmlFor="exampleInputEmail2">name_Uz :</label>
                <div>
                  <Controller
                    name="name_Uz"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => <Input {...field} />}
                  />
                  
                </div>
                {errors.name_Uz?.type == "required" && (
                  <span className="warning">This field is required</span>
                )}
                {errors.name_Uz?.type == "minLength" && (
                  <span className="warning"> minLength 4</span>
                )}
              </div>

              <div>
                <label htmlFor="exampleInputEmail2">name_Ru :</label>
                <div>
                  <Controller
                    name="name_Ru"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => <Input {...field} />}
                  />
                </div>
                {errors.name_Ru?.type == "required" && (
                  <span className="warning">This field is required</span>
                )}
                {errors.name_Ru?.type == "minLength" && (
                  <span className="warning"> minLength 4</span>
                )}
              </div>

              <div>
                <label htmlFor="exampleInputEmail2">name_En :</label>
                <div>
                  <Controller
                    name="name_En"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => <Input {...field} />}
                  />

                  
                </div>
                {errors.name_En?.type == "required" && (
                  <span className="warning">This field is required</span>
                )}
                {errors.name_En?.type == "minLength" && (
                  <span className="warning"> minLength 4</span>
                )}
              </div>
            </div>

            <div className="uch-flex">
              <div>
                <label htmlFor="exampleInputEmail2">description_Uz:</label>
                <div>
                  <Controller
                    name="description_Uz"
                    placeholder="description_Uz"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => <Input {...field} />}
                  />
                </div>
                {errors.description_Uz?.type == "required" && (
                  <span className="warning">This field is required</span>
                )}
                {errors.description_Uz?.type == "minLength" && (
                  <span className="warning"> minLength 4</span>
                )}
              </div>

              <div>
                <label htmlFor="exampleInputEmail2">description_Ru:</label>
                <div>
                  <Controller
                    name="description_Ru"
                    placeholder="description_Ru"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => <Input {...field} />}
                  />

                </div>
                {errors.description_Ru?.type == "required" && (
                  <span className="warning">This field is required</span>
                )}
                {errors.description_Ru?.type == "minLength" && (
                  <span className="warning"> minLength 4</span>
                )}
              </div>

              <div>
                <label htmlFor="exampleInputEmail2">description_En:</label>
                <div>
                  <Controller
                    name="description_En"
                    placeholder="description_En"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => <Input {...field} />}
                  />

                  
                </div>
                {errors.description_En?.type == "required" && (
                  <span className="warning">This field is required</span>
                )}
                {errors.description_En?.type == "minLength" && (
                  <span className="warning"> minLength 4</span>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="exampleInputPassword2">Category:</label>
              <div>
                <Controller
                  name="category"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Select
                      {...field}
                      showSearch
                      placeholder="Select a category"
                      optionFilterProp="children"
                      onChange={onChange}
                      onSearch={onSearch}
                      filterOption={(input, option) =>
                        (option?.label ?? "")
                          .toLowerCase()
                          .includes(input.toLowerCase())
                      }
                      options={[
                        {
                          value: "category1",
                          label: "category1",
                        },
                        {
                          value: "category2",
                          label: "category3",
                        },
                        {
                          value: "category3",
                          label: "category3",
                        },
                      ]}
                    />
                  )}
                />
              </div>
              {errors.category?.type == "required" && (
                <span className="warning">This field is required</span>
              )}
              {errors.category?.type == "minLength" && (
                <span className="warning"> minLength 4</span>
              )}
            </div>

            <div>
              <label htmlFor="exampleInputPassword2">color:</label>
              <div>
                <Controller
                  name="color"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => <Input {...field} />}
                />

              </div>
              {errors.color?.type == "required" && (
                <span className="warning">This field is required</span>
              )}
              {errors.color?.type == "minLength" && (
                <span className="warning"> minLength 4</span>
              )}
            </div>

            <div>
              <label htmlFor="exampleInputPassword2">Size:</label>
              <div>
                <Controller
                  name="size"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => <Input {...field} />}
                />

              </div>
              {errors.size?.type == "required" && (
                <span className="warning">This field is required</span>
              )}
              {errors.size?.type == "minLength" && (
                <span className="warning"> minLength 4</span>
              )}
            </div>

            <div>
              <label htmlFor="exampleInputPassword2">gender:</label>
              <div>
                <Controller
                  name="gender"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => <Input {...field} />}
                />

              </div>
              {errors.gender?.type == "required" && (
                <span className="warning">This field is required</span>
              )}
              {errors.gender?.type == "minLength" && (
                <span className="warning"> minLength 4</span>
              )}
            </div>

            <div>
              <label htmlFor="exampleInputPassword2">Photo:</label>
              <div>
                <Controller
                  name="photo"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Upload {...props} {...field}>
                      <Button icon={<UploadOutlined />}>
                        Click to Upload Image
                      </Button>
                    </Upload>
                  )}
                />

                
              </div>
              {errors.photo?.type == "required" && (
                <span className="warning">This field is required</span>
              )}
              {errors.photo?.type == "minLength" && (
                <span className="warning"> minLength 4</span>
              )}
            </div>
            <Button type="primary">Send</Button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default Head;
