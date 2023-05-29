import { useState } from "react";

import { Button, Table, Modal } from "antd";
import { useQuery } from "@tanstack/react-query";
import { instance } from "../../utils/axios";
import Loaders from "../../components/Loaders/loaders";
import Head from "../../components/head/head";

import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

async function getInfo() {
  return instance.get("/information");
}

const Info = () => {
  const { data: info, isLoading } = useQuery(["information"], getInfo);

  // console.log(info?.data?.data);

  if (isLoading) return <Loaders />;

  const columns = [
    {
      title: "Email",
      dataIndex: "email",
      width: 100,
    },
    {
      title: "telegram",
      dataIndex: "telegram",
      width: 100,
    },
    {
      title: "instagram",
      dataIndex: "instagram",
      width: 100,
    },
    {
      title: "address",
      dataIndex: "address",
      width: 100,
    },
    {
      title: "created date",
      dataIndex: "createdAt",
      width: 100,
      key: "name",
    },

    // {
    //   title: "addressMap",
    //   dataIndex: "addressMap",
    //   width: 100,
    // },

    {
      title: "phone",
      dataIndex: "phone",
      width: 250,
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
         <EditOutlined style={{ color: "blue", cursor: "pointer" }} />
            <DeleteOutlined style={{ color: "red ",cursor: "pointer" }} />
        </div>
      ),
    },
  ];

  return (
    <>
      <Head />
      <Table
        dataSource={info?.data?.data}
        columns={columns}
        // loading={loading}
        //   rowSelection={rowSelection}
        pagination={false}
        size="small"        
        bordered
      />
    </>
  );
};
export default Info;
