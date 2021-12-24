// import React, { useContext, useEffect } from "react";
// import { List, Avatar } from "antd";
// import { brandsContext } from "../../contexts/brandsContext";

// const AdminBrandsList = () => {
//   const { getBrands, deleteBrand, brands } = useContext(brandsContext);
//   useEffect(() => {
//     getBrands();
//   }, []);
//   return (
//     <List
//       className="demo-loadmore-list items-list"
//       itemLayout="horizontal"
//       dataSource={brands}
//       renderItem={(item) => (
//         <List.Item
//           actions={[
//             <a key="list-loadmore-edit" onClick={() => deleteBrand(item.id)}>
//               delete
//             </a>,
//           ]}
//         >
//           <List.Item.Meta
//             avatar={<Avatar src={item.logo} />}
//             title={<a>{item.brand}</a>}
//           />
//         </List.Item>
//       )}
//     />
//   );
// };

// export default AdminBrandsList;
