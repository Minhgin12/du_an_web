import React from 'react'
import {Col } from 'antd'
import { WrapperHeader, WrapperHeaderAccount, WrapperTextHeader, WrapperTextHeaderSmall } from './style'
import Search from 'antd/lib/transfer/search'
import {
  SmileOutlined,CaretDownOutlined,ShoppingCartOutlined
} from '@ant-design/icons';

const HeaderComponent = () => {
  return (    // <WrapperHeader gutter={16}> kh cách giữa user and search
    <div>
        <WrapperHeader> 
            <Col span={4}>
              <WrapperTextHeader>TIKI</WrapperTextHeader>
            </Col>
            <Col span={12}>
            
                <Search
                  placeholder="input search text"
                  //allowClear
                  enterButton="Search"
                  size="large"
                  //onSearch={onSearch}
                  />
            </Col>
            <Col span={8} style={{ display: 'flex',left :'60px',gap :'20px'}}>
              <WrapperHeaderAccount>
                <div>
                  <SmileOutlined style={{fontSize:'25px'}}/>
                </div>
                <div>
                  <WrapperTextHeaderSmall>Đăng nhập/Đăng kí</WrapperTextHeaderSmall>
                  <div>
                    <WrapperTextHeaderSmall>Tài khoản</WrapperTextHeaderSmall>
                    <CaretDownOutlined />
                  </div>
                </div>
              </WrapperHeaderAccount>
              <div>
                  <ShoppingCartOutlined style={{fontSize: '30px', color: '#fff'}}/>
                  <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>
              </div>
            </Col>
        </WrapperHeader>

    </div>
  )
}

export default HeaderComponent