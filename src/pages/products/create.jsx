import { useMutation, useQuery } from "@tanstack/react-query";
import { Button, Modal, Select, Upload } from "antd";
import Input from "antd/es/input/Input";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { instance } from "../../utils/axios";
import { UploadOutlined } from "@ant-design/icons";

import "./style.scss";
import { useAuthToken } from "../../context/context";
import {  useParams } from "react-router-dom";
import TextArea from "antd/es/input/TextArea";

async function getCategory() {
  return instance.get(`/category`);
}


export default function CreateProduct() {
 
async function editProduct() {
  return instance.get(`/category`);
}

  const { id } = useParams();
  console.log("id", id);

  const { data: category, isLoading:loading } = useQuery(
    ["category", ],
    getCategory,
   
  );

  const { data: products,  } = useQuery(
    ["category", ],
    getCategory,
   
  );
  console.log(category,category );

  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");
  const {
    // register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
    setValue,
  } = useForm();

  const { token } = useAuthToken();

  const props = {
    name: "file",
    action: "http://3.138.204.20/upload/upload",
    headers: { Authorization: `Bearer ${token}` },
  };

  const mutation = useMutation((postdata) => {
    return instance.post("/products", postdata);
  });

  const onSubmitForm = (dataForm) => {
    // console.log(dataForm);
    // discount, photoId, categoryId, price, discount, active
    // console.log(typeof +dataForm?.discount);

    mutation.mutate(
      {
        ...dataForm,
        discount: +dataForm?.discount,
        price: +dataForm.price,
        active: !!dataForm?.active,
        photoId: dataForm?.photo?.file?.response?.id,
        categoryId: dataForm?.category,
      },
      {
        onSuccess: (res) => {
          console.log("ondata", res);
          toast.success("Added Product");
          // setTimeout(() => {
          //   nav("/");
          // }, 1500);
        },
        onError: (error) => {
          console.log("query error", error);
          toast.error("Product not added ");
        },
      }
    );
  };

  return (
    <div className="head">
      <div className="form-login4">
        <form action="" onSubmit={handleSubmit(onSubmitForm)}>
          {/* name_Uz, Ru, En */}
          <div className="uch-flex">
            <div>
              <label htmlFor="exampleInputEmail2">name_Uz :</label>
              <div>
                <Controller
                  name="name_Uz"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Input {...field} placeholder="name_Uz" />
                  )}
                />

                {/* <input
                type="text"
                id="exampleInputEmail2"
                placeholder="Enter username"
                // className="form-control input-email2"
                // required
                // ref={username}

                {...register("name", { required: true, minLength: 4 })}
              /> */}
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
                  render={({ field }) => (
                    <Input {...field} placeholder="name_Ru" />
                  )}
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
                  render={({ field }) => (
                    <Input {...field} placeholder="name_En" />
                  )}
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
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <TextArea
                      rows={4}
                      {...field}
                      placeholder="description_Uz"
                    />
                  )}
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
                  render={({ field }) => (
                    <TextArea
                      rows={4}
                      {...field}
                      placeholder="description_Ru"
                    />
                  )}
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
                  render={({ field }) => (
                    <TextArea
                      rows={4}
                      {...field}
                      placeholder="description_En"
                    />
                  )}
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

          {/* Category and gender and Upload*/}
          <div className="besh-flex">
            {/*  Category*/}
            <div>
              <label htmlFor="exampleInputPassword2">Category:</label>
              <div>
                <Controller
                  name="category"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Select {...field}>
                      {category?.data?.data?.map((item, index) => (
                        <Select.Option value={item.id}>
                          {item.name_Uz}
                        </Select.Option>
                      ))}
                    </Select>
                  )}
                />

                {/* <input
              type="text"
              id="exampleInputPassword2"
              placeholder="Password"
              // className="form-control input-password2"
              // required
              // ref={password}

              {...register("password", { required: true, minLength: 4 })}
            /> */}
              </div>
              {errors.category?.type == "required" && (
                <span className="warning">This field is required</span>
              )}
              {errors.category?.type == "minLength" && (
                <span className="warning"> minLength 4</span>
              )}
            </div>

            {/* gender */}
            <div>
              <label htmlFor="exampleInputPassword2">Gender:</label>
              <div>
                <Controller
                  name="gender"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Select {...field}>
                      <Select.Option value="MALE">Male</Select.Option>
                      <Select.Option value="FEMALE">Female</Select.Option>
                      <Select.Option value="BOTH">Both</Select.Option>
                    </Select>
                  )}
                />

                {/* <input
              type="text"
              id="exampleInputPassword2"
              placeholder="Password"
              // className="form-control input-password2"
              // required
              // ref={password}
              {...register("password", { required: true, minLength: 4 })}
            /> */}
              </div>
              {errors.gender?.type == "required" && (
                <span className="warning">This field is required</span>
              )}
              {errors.gender?.type == "minLength" && (
                <span className="warning"> minLength 4</span>
              )}
            </div>

            {/* Active */}
            <div>
              <label htmlFor="exampleInputPassword2">Active:</label>
              <div>
                <Controller
                  name="active"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Select {...field}>
                      <Select.Option value="1">True</Select.Option>
                      <Select.Option value="0">false</Select.Option>
                    </Select>
                  )}
                />

                {/* <input
              type="text"
              id="exampleInputPassword2"
              placeholder="Password"
              // className="form-control input-password2"
              // required
              // ref={password}
              {...register("password", { required: true, minLength: 4 })}
            /> */}
              </div>
              {errors?.active?.type == "required" && (
                <span className="warning">This field is required</span>
              )}
              {errors?.active?.type == "minLength" && (
                <span className="warning"> minLength 4</span>
              )}
            </div>

            {/* Type */}
            <div>
              <label htmlFor="exampleInputPassword2">Type:</label>
              <div>
                <Controller
                  name="type"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Input {...field} placeholder="type " />
                  )}
                />

                {/* <input
              type="text"
              id="exampleInputPassword2"
              placeholder="Password"
              // className="form-control input-password2"
              // required
              // ref={password}

              {...register("password", { required: true, minLength: 4 })}
              /> */}
              </div>
              {errors?.type?.type == "required" && (
                <span className="warning">This field is required</span>
              )}
              {errors.type?.type == "minLength" && (
                <span className="warning"> minLength 4</span>
              )}
            </div>

            {/* Upload */}
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

                {/* <input
              type="text"
              id="exampleInputPassword2"
              placeholder="Password"
              // className="form-control input-password2"
              // required
              // ref={password}

              {...register("password", { required: true, minLength: 4 })}
            /> */}
              </div>
              {errors.photo?.type == "required" && (
                <span className="warning">This field is required</span>
              )}
              {errors.photo?.type == "minLength" && (
                <span className="warning"> minLength 4</span>
              )}
            </div>
          </div>

          {/* Color and size */}
          <div className="turt-flex">
            {/* color */}
            <div>
              <label htmlFor="exampleInputPassword2">Color:</label>
              <div>
                <Controller
                  name="color"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Input {...field} placeholder="color" />
                  )}
                />

                {/* <input
              type="text"
              id="exampleInputPassword2"
              placeholder="Password"
              // className="form-control input-password2"
              // required
              // ref={password}

              {...register("password", { required: true, minLength: 4 })}
            /> */}
              </div>
              {/* {errors.color?.type == "required" && (
                <span className="warning">This field is required</span>
              )}
              {errors.color?.type == "minLength" && (
                <span className="warning"> minLength 4</span>
              )} */}
            </div>

            {/* size */}
            <div>
              <label htmlFor="exampleInputPassword2">Size:</label>
              <div>
                <Controller
                  name="size"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Input {...field} placeholder="size" />
                  )}
                />

                {/* <input
              type="text"
              id="exampleInputPassword2"
              placeholder="Password"
              // className="form-control input-password2"
              // required
              // ref={password}

              {...register("password", { required: true, minLength: 4 })}
            /> */}
              </div>
              {/* {errors.size?.type == "required" && (
                <span className="warning">This field is required</span>
              )}
              {errors.size?.type == "minLength" && (
                <span className="warning"> minLength 4</span>
              )} */}
            </div>

            {/* Price */}
            <div>
              <label htmlFor="exampleInputPassword2">Price:</label>
              <div>
                <Controller
                  name="price"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Input {...field} placeholder="price" />
                  )}
                />

                {/* <input
              type="text"
              id="exampleInputPassword2"
              placeholder="Password"
              // className="form-control input-password2"
              // required
              // ref={password}

              {...register("password", { required: true, minLength: 4 })}
              /> */}
              </div>
              {/* {errors?.price?.type == "required" && (
                <span className="warning">This field is required</span>
              )}
              {errors?.price?.type == "minLength" && (
                <span className="warning"> minLength 4</span>
              )} */}
            </div>

            {/* discount */}
            <div>
              <label htmlFor="exampleInputPassword2">discount:</label>
              <div>
                <Controller
                  name="discount"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Input {...field} placeholder="discount" />
                  )}
                />

                {/* <input
              type="text"
              id="exampleInputPassword2"
              placeholder="Password"
              // className="form-control input-password2"
              // required
              // ref={password}

              {...register("password", { required: true, minLength: 4 })}
              /> */}
              </div>
              {/* {errors?.discount?.type == "required" && (
                <span className="warning">This field is required</span>
              )}
              {errors?.discount?.type == "minLength" && (
                <span className="warning"> minLength 4</span>
              )} */}
            </div>
          </div>

          <Button
            type="primary"
            htmlType="submit"
            style={{ backgroundColor: "green" }}
          >
            Add product
          </Button>
        </form>
      </div>
    </div>
  );
}
