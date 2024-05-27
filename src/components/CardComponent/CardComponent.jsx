import React from 'react'
import { StyleNameProduct, WrapperCardStyle, WrapperDiscountText, WrapperImageStyle, WrapperPriceText, WrapperReporText } from './style'
import { StarFilled } from '@ant-design/icons'
import logo from '../../assets/images/logo.png'
import topdeal from '../../assets/images/topdeal.png'
import { Image } from 'antd'

const CardComponent = () => {
  return (
        <WrapperCardStyle
          hoverable
          headStyle={{ width: '200px', height: '200px'}}
          style={{ width: 196 }}
          bodyStyle={{ padding: '10px'}}
          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
          <WrapperImageStyle src={topdeal} alt="topdeal" />
          <Image src={logo} style={{ width: '80px', position: 'absolute', top: -20, left: 0 }} />
          <StyleNameProduct>Iphone</StyleNameProduct>
          <WrapperReporText>
            <span style={{ marginRight: '4px'}}>
                <span>4.96</span> <StarFilled style={{ fontSize: '12px', color: 'yellow'}} />
            </span>
            <span> | Đã bán 1000+</span>
          </WrapperReporText>
          <WrapperPriceText>
            1.234.567
            <WrapperDiscountText>
                -5%
            </WrapperDiscountText>
          </WrapperPriceText>
        </WrapperCardStyle>
  )
}

export default CardComponent