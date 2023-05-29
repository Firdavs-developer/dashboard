import { useState } from "react";

import { Button, Table, Modal } from "antd";
import { useQuery } from "@tanstack/react-query";
import { instance } from "../../utils/axios";
import Loaders from "../../components/Loaders/loaders";
import Head from "../../components/head/head";

import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

async function getCategory() {
  return instance.get("/category");
}

const Category = () => {
  const { data: category, isLoading } = useQuery(["category"], getCategory);

  // console.log(users?.data?.data?.data);

  if (isLoading) return <Loaders />;

  const columns2 = [
    {
      title: "Photo",
      dataIndex: "photo",
      width: 100,
      key: "id",
      render: (data, index) => {
        console.log(data?.path);
        return (
          <img
            width={100}
            src={`http://3.138.204.20/upload/${data?.path}`}
            alt="category photo"
          />
          // <img
          //   src="http://3.138.204.20/upload/1685085370598%2074506377.png"
          //   alt=""
          //   width={40}
          //   // height={40}
          // />
        );
      },
    },
    {
      title: "Name_Uz",
      dataIndex: "name_Uz",
      width: 200,
      key: "id",
    },
    {
      title: "name_Ru",
      dataIndex: "name_Ru",
      width: 200,
      key: "id",
    },
    {
      title: "name_En",
      dataIndex: "name_En",
      width: 200,
      key: "id",
    },

    {
      title: "Action",
      key: "operation1",
      fixed: "left",
      width: 100,
      render: (data, index) => (
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            fontSize: "22px",
          }}
        >
          <EditOutlined style={{ color: "green", cursor: "pointer" }} />
          <DeleteOutlined style={{ color: "red ", cursor: "pointer" }} />
        </div>
      ),
    },
  ];

  return (
    <>
      <Head />
      <Table
        dataSource={category?.data?.data}
        columns={columns2}
        size="small"        
        bordered
        
      />
    </>
  );
};
export default Category;
