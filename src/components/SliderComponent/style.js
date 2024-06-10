
import Slider  from "react-slick";
import styled from "styled-components";

export const WrapperSliderStyle = styled(Slider)`
    
    .slick-arrow.slick-prev {
        left: 10px;
        top: 50%;
        z-index: 10;
        &::before {
            font-size: 40px;
            color: #fff;
        }
    }
    & .slick-arrow.slick-next {
        right: 35px;
        top: 50%;
        z-index: 10;
        &::before {
            font-size: 40px;
            color: #fff;
        }
    }
    & .slick-dots {
        z-index: 10;
        bottom: -2px !important;
        li {
            button {
                &::before {
                    color:rgb(255, 255,0.5);
                }
            }
        }
        li.active {
            botton {
                &::before {
                    color: #fff;
                }
            }
        }
    }
    
`
export const WrapperImageStyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`