import { useState } from "react";

import { Spin, Table } from "antd";
import { useQuery } from "@tanstack/react-query";
import { instance } from "../../utils/axios";
import { Loader } from "../../components";
import Loaders from "../../components/Loaders/loaders";

const Users = () => {
  // const [loading, setLoading] = useState(true);

  async function getUsers() {
    return instance.get("/user")
    // .then(() => setLoading(!loading));
  }

  const { data: users, isLoading } = useQuery(["users"], getUsers);

  // console.log(users?.data);

  if (isLoading) return <Loaders />;

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      width: 100,
    },
    {
      title: "Name",
      dataIndex: "name",
      width: 150,
    },

    {
      title: "Email",
      dataIndex: "email",
      width: 100,
    },
  ];

  return (
    <>
      <Table
        dataSource={users?.data}
        columns={columns}
        // loading={loading}
        //   rowSelection={rowSelection}
        // pagination={pagination}
        size="small"
        bordered
      />
    </>
  );
};
export default Users;
