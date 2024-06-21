import { Col, Row } from "antd";
import styled from "styled-components";
export const WrapperFooter=styled(Row)`
    margin-top: 16px;
    
    color: rgb(128, 128, 137);
    background-color: white;
    width: 1270px;
`

export const WrapperFooterHead=styled.h4`
    color: #000;
    font-size: 17px;
`
export const WrapperFooterLink=styled(Col)`
    display: flex;
    flex-direction: column;
    font-size: 13px;
    & a{
        color: rgb(128, 128, 137); 
        margin-bottom: 8px;
    }
`
export const WrapperFooterSepar = styled.div`
    content: " ";
    height: 1px;
    background-color: rgb(235, 235, 240);
    width: 1270px;
    
`
export const WrapperFooterTopicLink=styled.a`
    font-size: 15px;
    line-height: 20px;
    font-weight: 500;
    color: rgb(56, 56, 61);
    margin-bottom: 4px;
    margin-top: 0px;
`

export const WrapperFooterDetailLink=styled(Col)`
    font-size: 13px;
    & a{
        color: rgb(128, 128, 137); 
    }
`