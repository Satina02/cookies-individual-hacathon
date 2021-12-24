import React, { useContext, useEffect } from "react";
import { Select, Slider } from "antd";
// import { brandsContext } from "../../contexts/brandsContext";

const Filters = ({ price, setPrice }) => {
  // const { getBrands, brands } = useContext(brandsContext);
  // useEffect(() => {
  //   getBrands();
  // }, []);
  return (
    <div style={{ marginTop: "20px", width:"50%", paddingLeft:"70px" }}>
      <Slider
        value={price}
        onChange={(e) => setPrice(e)}
        range
        defaultValue={[1, 100]}
        min={0}
        max={100}
        step={10}
      />
    </div>
  );
};

export default Filters;
