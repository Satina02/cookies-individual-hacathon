import React from "react";
import { Row, Col } from "antd";

// import AddBrandModal from "../components/AddBrandModal/AddBrandModal";
import AddProductModal from "../components/AddProductModal/AddProductModal";
// import AdminBrandsList from "../components/AdminBrandsList/AdminBrandsList";
import AdminProductsList from "../components/AdminProductsList/AdminProductsList";

const AdminPage = () => {
  return (
    <div className="container" style={{ marginTop: "15px" }}>
            <AddProductModal />
            <AdminProductsList />
    </div>
  );
};

export default AdminPage;
