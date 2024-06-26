import { Card } from "antd";
import styled from "styled-components";

export const WrapperCardStyle = styled(Card)`
    width: 200px;
    & img {
        height: 200px;
        width: 200px;
    }
    position: relative;
`
export const WrapperImageStyle = styled.img`
    top: -1px;
    left: -1px;
    border-top-left-radius: 3px;
    position: absolute;
    height: 16px !important;
    width: 68px !important;
`
export const StyleNameProduct = styled.div`
    font-weight: 400px;
    font-size: 12px;
    line-height:16px;
    color: rgb(56, 56, 61)
`

export const WrapperReporText = styled.div`
    font-color: 10px;
    color: rgb(128, 128, 137);
    display: flex;
    align-items: center;
`

export const WrapperPriceText = styled.div`
    
    font-size: 16px;
    font-weight: 500px;
    margin: 6px 0 0px
`
export const WrapperDiscountText = styled.span`
    color: rgb(255, 66, 78);
    font-size: 12px;
    font-weight: 500px,
`
export const WrapperStyleTextSell = styled.span`
    font-size: 15px;
    line-height: 24px;
    color: rgb(120, 120, 120);
`


