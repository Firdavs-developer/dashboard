import { useState } from "react";

import { Button, Table, Modal } from "antd";
import { useQuery } from "@tanstack/react-query";
import { instance } from "../../utils/axios";
import Loaders from "../../components/Loaders/loaders";
import Head from "../../components/head/head";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

async function getMessage() {
  return instance.get("/message");
}

const Message = () => {
  const { data: message, isLoading } = useQuery(["message"], getMessage);

  console.log(message?.data?.data);

  if (isLoading) return <Loaders />;
  const columns = [
    {
      title: "createdAt",
      dataIndex: "createdAt",
      width: 100,
    },
    {
      title: "phone",
      dataIndex: "phone",
      width: 100,
    },

    {
      title: "subject",
      dataIndex: "subject",
      width: 100,
    },
    {
      title: "message",
      dataIndex: "message",
      width: 100,
    },
    {
      title: "status",
      dataIndex: "status",
      width: 100,
      key: "name",
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
            <DeleteOutlined style={{ color: "red ",cursor: "pointer" }} />
        </div>
      ),
    },
  ];

  return (
    <>
      <Head />
      <Table
        dataSource={message?.data?.data}
        columns={columns}
        size="small"
        // scroll={{
        //   x: 1500,
        //   y: 480,
        // }}
        bordered
      />
    </>
  );
};
export default Message;
