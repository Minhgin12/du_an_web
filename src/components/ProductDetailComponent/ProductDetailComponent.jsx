import { Col, Image, Row } from "antd";
import React from "react";
import i100knst from "../../assets/images/i1000knst.webp";
import small100knst from "../../assets/images/small100knst.png";
import {
  WrapperAddressProduct,
  WrapperInputNumber,
  WrapperPriceProduct,
  WrapperPriceTextProduct,
  WrapperQualityProduct,
  WrapperStyleColImage,
  WrapperStyleImageSmall,
  WrapperStyleNameProduct,
  WrapperStyleTextSell,
} from "./style";
import { StarFilled, PlusOutlined, MinusOutlined } from "@ant-design/icons";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
//import ButtonComponent from '../ButtonComponent/ButtonComponent'

const ProductDetailComponent = () => {
  const onChange = () => {};
  return (
    <Row style={{ padding: "16px", background: "#fff", borderRadius: "4px" }}>
      <Col
        span={10}
        style={{ borderRadius: "1px solid #e5e5e5", paddingRight: "8px" }}
      >
        <Image src={i100knst} alt="i100knst" preview={false} />
        <Row style={{ paddingTop: "10px", justifyContent: "space-between" }}>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall src={small100knst} alt="" preview={false} />
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall src={small100knst} alt="" preview={false} />
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall src={small100knst} alt="" preview={false} />
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall src={small100knst} alt="" preview={false} />
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall src={small100knst} alt="" preview={false} />
          </WrapperStyleColImage>
        </Row>
      </Col>
      <Col span={14} style={{ paddingLeft: "6px" }}>
        <WrapperStyleNameProduct>100 Kỹ năng sinh tồn</WrapperStyleNameProduct>
        <div>
          <StarFilled
            style={{ fontSize: "12px", color: "rgb(253, 216, 54)" }}
          />
          <StarFilled
            style={{ fontSize: "12px", color: "rgb(253, 216, 54)" }}
          />
          <StarFilled
            style={{ fontSize: "12px", color: "rgb(253, 216, 54)" }}
          />
          <WrapperStyleTextSell> | Đã bán 10000+</WrapperStyleTextSell>
        </div>
        <WrapperPriceProduct>
          <WrapperPriceTextProduct>200.000 Đ</WrapperPriceTextProduct>
          <WrapperAddressProduct>
            <span>Giao đến </span>
            <span className="address">TP.Thái Bình</span> -
            <span className="change-address">Đổi địa chỉ</span>
          </WrapperAddressProduct>
          <div
            style={{
              margin: "10px 0 20px",
              borderTop: "1px solid #e5e5e5",
              borderBottom: "1px solid #e5e5e5",
              padding: "10px 0",
            }}
          >
            <div style={{ marginBottom: "5px" }}>Số lượng</div>
            <WrapperQualityProduct>
              <button style={{ border: "none", background: "transparent" }}>
                <MinusOutlined style={{ color: "#000", fontSize: "20px" }} />
              </button>
              <WrapperInputNumber defaultValue={0} onChange={onChange} />
              <button style={{ border: "none", background: "transparent" }}>
                <PlusOutlined style={{ color: "#000", fontSize: "20px" }} />
              </button>
            </WrapperQualityProduct>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <ButtonComponent
              bordered={false}
              size={20}
              styleButton={{
                background: "rgb(255, 57, 69)",
                height: "48px",
                width: "220px",
                border: "none",
                borderRadius: "4px",
              }}
              textButton={"Chọn mua"}
              styleTextButton={{ color: "#fff", fontWeight: "700" }}
            ></ButtonComponent>
            <ButtonComponent
              bordered={false}
              size={20}
              styleButton={{
                background: "#fff",
                height: "48px",
                width: "220px",
                border: "1px solid blue",
                borderRadius: "4px",
              }}
              textButton={"Mua trước trả sau"}
              styleTextButton={{ color: "rgb(13, 92 ,182)", fontsize: "16px" }}
            ></ButtonComponent>
          </div>
        </WrapperPriceProduct>
      </Col>
    </Row>
  );
};

export default ProductDetailComponent;
