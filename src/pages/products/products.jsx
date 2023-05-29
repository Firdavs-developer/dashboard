
import {  Table } from "antd";
import { useMutation, useQuery } from "@tanstack/react-query";
import { instance } from "../../utils/axios";
import Loaders from "../../components/Loaders/loaders";
import Head from "../../components/head/head";
import { Link, useNavigate } from "react-router-dom";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { toast } from "react-toastify";

async function getProducts() {
  return instance.get("/products");
}

const Products = () => {
  const { data: products, isLoading } = useQuery(["products"], getProducts);

  const deleteProduct = useMutation((id) => {
    return instance.delete(`/products/${id}`);
  });
  // console.log(users?.data?.data?.data);
  const nav = useNavigate();

  if (isLoading) return <Loaders />;

  const editProduct = () => {
    console.log("editProduct");
  };

  const deletePro = (product) => {
    console.log("deleteProduct", product);
    deleteProduct.mutate(product.id, {
      onSuccess: (res) => {
        console.log("deletedata", res);
        toast.error("Deleted Product");
        setTimeout(() => {
          nav("/products");
        }, 1500);
        getProducts();
      },
      onError: (error) => {
        console.log("delete error", error);
        // toast.error("Register failed ");
      },
    });
  };

  const columns2 = [
    {
      title: "Photo",
      dataIndex: "photo",
      width: 100,
      key: "id",
      render: (data) => {
        // console.log(data);
        return (
          <img
            src={`http://3.138.204.20/upload/${data?.path}`}
            alt=""
            width={60}
          />
        );
      },
    },
    {
      title: "Name_Uz",
      dataIndex: "name_Uz",
      width: 100,
      key: "id",
    },
    {
      title: "Description_Uz",
      dataIndex: "description_Uz",
      width: 100,
      key: "id",
    },
    {
      title: "Category",
      dataIndex: "Category",
      width: 100,
      key: "id",
      render: (data) => {
        console.log(data);
        return <>{data?.name_Uz}</>;
      },
    },

    {
      title: "Gender",
      key: "gender",
      dataIndex: "gender",
      width: 70,
      key: "id",
    },
    {
      title: "Color",
      dataIndex: "color",
      width: 50,
      key: "id",
    },
    {
      title: "Size",
      dataIndex: "size",
      width: 60,
      key: "id",
    },
   
    {
      title: "Price",
      dataIndex: "price",
      width: 50,
    },
    {
      title: "discount",
      dataIndex: "discount",
      width: 80,
    },
    {
      title: "Action",
      key: "operation1",
      fixed: "left",
      width: 100,
      render: (data) => {
        // console.log(data);
        return (
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              fontSize: "22px",
            }}
          >
            <Link to={`/create/${data.id}`}>
              <EditOutlined
                style={{ color: "blue", cursor: "pointer" }}
                // onClick={() => console.log(data)}
              />
            </Link>
            <Link>
              <DeleteOutlined
                style={{ color: "red ", cursor: "pointer" }}
                onClick={() => deletePro(data)}
              />
            </Link>
          </div>
        );
      },
    },
  ];

  return (
    <>
      <Head />
      <Table
        dataSource={products?.data?.data}
        columns={columns2}
        size="small"        
        bordered        
      />
    </>
  );
};
export default Products;
