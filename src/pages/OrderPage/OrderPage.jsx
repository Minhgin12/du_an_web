import { Checkbox } from 'antd';
import imag from '../../assets/images/logo.png'
import { RiCoupon2Line } from "react-icons/ri";
import React from 'react'
import { WrapperCost, WrapperCostDetail, WrapperCostIn4, WrapperCountOrder, WrapperInforSell, WrapperItemOrder, WrapperListOrder, WrapperPriceDiscount, WrapperRight, WrapperStyleHeader, WrapperTotal, WrappperLeft } from './style';
import { DeleteOutlined,MinusOutlined,PlusOutlined } from '@ant-design/icons'
import { WrapperInputNumber } from '../../components/ProductDetailComponent/style';
import { useSelector } from 'react-redux';
import FooterComponent from '../../components/FooterComponent/FooterComponent';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';


const OrderPage = () => {
  const order = useSelector((state) => state.order)
  const onChange = (e) =>{
    console.log(`checked = ${e.target.value}`);
  };
  const handleChangeCount = () => {

  }
  const handleOnchangeCheckAll =() => {

  }
    return (
    <>
    <div style={{ background: '#f5f5fa', width: '100%',height: '100vh'}}>
      <div style={{ height: '100%', width: '1270px', margin: '0 auto'}}>
        <h3 style={{ margin: '15px 15px', padding: '10px 0 0px',}}>Giỏ hàng</h3>
        <div style={{ display: 'flex', justifyContent: 'center'}}>
          <WrappperLeft>
            <WrapperStyleHeader>
              <span style={{ display: 'inline-block', width: '390px'}}>
                <Checkbox onChange={handleOnchangeCheckAll}></Checkbox>
                <span> Tất cả ({order?.OrderItems?.lenth} sản phẩm)</span>
              </span>
              <div style={{ flec: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between',gap: '30px'}}>
                <span>Đơn giá</span>
                <span>Số lượng</span>
                <span>Thành tiền</span>
                <DeleteOutlined style={{cursor: 'pointer'}} />
              </div>
            </WrapperStyleHeader>
            <WrapperListOrder>
              
              {order?.orderItems?.map((order) => {
                console.log( 'map', order)
                return (
                  <WrapperItemOrder>
                  <div style={{ width: '390px', display: 'flex', alignItems: 'center', gap: 4}}>
                    <Checkbox onChange={onChange}></Checkbox>
                    <img src={imag} style={{ width: '77px', height: '79px', objectFit: 'cover'}}/>
                    <div>order?.name</div>
                  </div> 
                  <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                    <span>
                      <span style={{ fontSize: '13px', color: '#242424'}}> {order?.price} </span>
                      <WrapperPriceDiscount>
                        {order?.amount}
                      </WrapperPriceDiscount>
                    </span>
                    <WrapperCountOrder>
                      <button style={{ border: 'none', background: 'transparent', cursor: 'pointer'}} onClick={() => handleChangeCount(' decrease')}>
                        <MinusOutlined style={{ color: '#000', fontSixe:" 10px"}} />
                      </button>
                      <WrapperInputNumber onChange={onChange} defaultvalue={order?.amount} value={order?.amount} size="small" />
                      <button style={{ border: 'none', background: 'transparent', cursor: 'pointer'}} onClick={() => handleChangeCount('increase')}>
                        <PlusOutlined style={{ color: '#000', fontSixe:" 10px"}} />
                      </button>
                    </WrapperCountOrder>
                    <span style={{ color: 'rgb(255, 66, 78)', fontSIxe: '13px', fontWeight: 500}}>{order?.price * order?.amount}</span>
                    <DeleteOutlined style={{ cursor: 'poipnter'}} />
                  </div>
                </WrapperItemOrder>
                )  
              })}
                
            </WrapperListOrder>
          </WrappperLeft>
          <WrapperRight>
              <div style={{ width: '100%'}}>
                  <div style={{ borderRadius: '4px',marginBottom: '12px',backgroundColor: '#fff',paddingBottom: '15px'}}>
                    <div style={{ display: 'flex',alignItems: 'center',justifyContent: 'space-between',padding: '0 15px'}}>
                      <h3 style={{ color: '#808089'}}>Giao tới</h3>
                      <a href="#" style={{ textDecoration: 'none'}}>Thay đổi</a>
                    </div>
                    <WrapperInforSell>
                      <p> hhhhh</p>
                      <i style={{ display: 'block',
                                  width:' 1px',
                                  height: '20px',
                                  backgroundColor: 'rgb(235, 235, 240)',
                                  margin: '0px 8px'}}></i>
                      <p> 097785656</p>
                    </WrapperInforSell>
                    <div style={{ color: 'rgb(128, 128, 137)',fontWeight:' normal'}}>
                      <span style={{ color: 'rgb(0, 171, 86)',backgroundColor: 'rgb(239, 255, 244)',margin: '15px',borderRadius: '12px',padding: '3px'}}>Nhà</span>
                      Thôn ....., xã ......, huyện ......., tỉnh.......
                    </div>
                  </div>
                  <div style={{ padding: '5px 15px', backgroundColor: '#fff', borderRadius: '3px'}}>
                    <div style={{ display: 'flex', justifyContent: 'space-between',padding: '5px 10px 20px'}}>
                        <div stytle={{ color: 'rgb(36, 36, 36)',margin: '0px',textTransform: 'capitalize',fontWeight: '500'}}>TIKI khuyến mãi</div>
                        <div>Có thể chọn</div>
                    </div>
                    <div style={{ paddingBottom: '12px'}}>
                        <RiCoupon2Line style={{ color:'#0B74E5', margin: '0 10px',paddingBottom: '0px',alignItems: 'center' }}/>
                        <span style={{ color: '#0B74E5'}}>Chọn hoặc nhập Khuyến mãi khác</span>
                    </div>
                  </div>
                  <WrapperCost>
                    <WrapperCostDetail>
                      <li>
                        <WrapperCostIn4>Tạm tính</WrapperCostIn4>
                        <div>
                          0<sup>đ</sup> 
                        </div>            
                      </li>
                      <li>
                        <WrapperCostIn4>Giảm giá</WrapperCostIn4>
                        <div>
                          0<sup>đ</sup>
                        </div>
                      </li>
                    </WrapperCostDetail>
                    <WrapperTotal>
                        <span>Tổng tiền</span>
                        <div>
                          <div>Vui lòng chọn sản phẩm</div>
                          <span>(Đã bao gồm VAT nếu có)</span>
                        </div>
                    </WrapperTotal>
                  </WrapperCost>
                  <ButtonComponent
                    bordered={false}
                    size={20}
                    styleButton={{
                      background: "rgb(255, 57, 69)",
                      height: "48px",
                      width: "100%",
                      border: "none",
                      borderRadius: "4px",
                      marginTop: '12px'
                    }}
                    textButton={"Mua hàng"}
                    styleTextButton={{ color: "#fff", fontWeight: "700" }}
                  ></ButtonComponent>
              </div>
          </WrapperRight>
        </div>
      </div>
    </div>
    <div>
      <FooterComponent />
    </div>
    </>
  )
}

export default OrderPage