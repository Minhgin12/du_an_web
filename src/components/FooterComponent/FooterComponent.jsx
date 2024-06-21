import React from 'react'
import { WrapperFooter, WrapperFooterDetailLink, WrapperFooterHead, WrapperFooterLink, WrapperFooterSepar, WrapperFooterTopicLink } from './style'
import tikinow from '../../assets/images/tikinow.png'
import { Image } from 'antd'

const FooterComponent = () => {
  return (
    <div style={{ width: '100%',display: 'flex', justifyContent: 'center', gap: '20px', padding: '0 16px' }} >
      <WrapperFooter> 
        <div style={{ width: '100%',display: 'flex', justifyContent: 'center', gap: '20px', padding: '0 16px' }} >
          <WrapperFooterLink span={5} >
            <WrapperFooterHead>Hỗ trợ khách hàng</WrapperFooterHead>
            <p class="hotline" style={{ marginTop:'3px'}}>Hotline: 
              <a href="tel:1900-6035">1900-6035</a>
              <span class="small-text"><br/>(1000 đ/phút, 8-21h kể cả T7, CN)</span>
            </p>
            <a rel="noreferrer" href="" class="small-text" target="_blank">Các câu hỏi thường gặp</a>
            <a rel="noreferrer" href="" class="small-text" target="_blank">Gửi yêu cầu hỗ trợ</a>
            <a rel="noreferrer" href="" class="small-text" target="_blank">Hướng dẫn đặt hàng</a>
            <a rel="noreferrer" href="" class="small-text" target="_blank">Phương thức vận chuyển</a>
            <a rel="noreferrer" href="" class="small-text" target="_blank">Chính sách đổi trả</a>
            <a rel="noreferrer" href="" class="small-text" target="_blank">Hướng dẫn trả góp</a>
            <a rel="noreferrer" href="" class="small-text" target="_blank">Chính sách hàng nhập khẩu</a>
            <p class="security" style={{margin: '8px 0'}}>Hỗ trợ khách hàng: <a href="mailto:hotro@tiki.vn">hotro@tiki.vn</a></p>
            <p class="security" style={{margin: '0 0 10px'}}>Báo lỗi bảo mật: <a href="mailto:security@tiki.vn">security@tiki.vn</a></p>

          </WrapperFooterLink>
          <WrapperFooterLink span={5} >
            <WrapperFooterHead class="styles__FooterHeading-sc-32ws10-4 fdMvyN">Về Tiki</WrapperFooterHead>
            <p style={{ marginTop:'3px'}}>Giới thiệu Tiki</p>
            <a rel="noreferrer" href="" class="small-text" target="_blank">Tiki Blog</a>
            <a rel="nofollow noreferrer" href="" class="small-text" target="_blank">Tuyển dụng</a>
            <a rel="noreferrer" href="" class="small-text" target="_blank">Chính sách bảo mật thanh toán</a>
            <a rel="noreferrer" href="" class="small-text" target="_blank">Chính sách bảo mật thông tin cá nhân</a>
            <a rel="nofollow noreferrer" href="" class="small-text" target="_blank">Chính sách giải quyết khiếu nại</a>
            <a rel="nofollow noreferrer" href="" class="small-text" target="_blank">Điều khoản sử dụng</a>
            <a rel="nofollow noreferrer" href="" class="small-text" target="_blank">Giới thiệu Tiki Xu</a>


          </WrapperFooterLink>
          <WrapperFooterLink span={5} >
            <WrapperFooterHead>Hợp tác và liên kết</WrapperFooterHead>
            <a rel="noreferrer" href="" class="small-text" target="_blank">Quy chế hoạt động Sàn GDTMĐT</a>
            <a rel="noreferrer" href="" class="small-text" target="_blank">Bán hàng cùng Tiki</a>
            <WrapperFooterHead class="styles__FooterHeading-sc-32ws10-4 fdMvyN">Chứng nhận bởi</WrapperFooterHead>
          </WrapperFooterLink>
          <WrapperFooterLink span={5} style={{ display: 'flex',flexDirection: 'column'}} >
            <WrapperFooterHead>Phương thức thanh toán</WrapperFooterHead>
            <WrapperFooterHead>Dịch vụ giao hàng</WrapperFooterHead>
            <Image src={tikinow} alt="tiki now" preview={false} style={{width: '100px',margin: '0',}}/>
          </WrapperFooterLink>
          <WrapperFooterLink span={4} >
            <WrapperFooterHead>Kết nối với chúng tôi</WrapperFooterHead>
            <a rel="nofollow noreferrer" href="https://www.facebook.com/tiki.vn/" class="icon" target="_blank" title="Facebook">
              <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 16.6665C0 7.82995 7.16344 0.666504 16 0.666504C24.8366 0.666504 32 7.82995 32 16.6665C32 25.5031 24.8366 32.6665 16 32.6665C7.16344 32.6665 0 25.5031 0 16.6665Z" fill="#3B5998"></path>
                <path d="M17.6676 26.0742V17.3693H20.0706L20.389 14.3696H17.6676L17.6717 12.8682C17.6717 12.0858 17.7461 11.6666 18.8698 11.6666H20.372V8.6665H17.9687C15.082 8.6665 14.066 10.1217 14.066 12.5689V14.3699H12.2666V17.3696H14.066V26.0742H17.6676Z" fill="white"></path>
              </svg>
            </a>
            <WrapperFooterHead>Tải ứng dụng trên điện thoại</WrapperFooterHead>
          </WrapperFooterLink>
        </div>
        <WrapperFooterSepar></WrapperFooterSepar>
        <div style={{ width: '100%', padding: '0 16px 20px' }} >
          <div style={{ margin: '0 -40px', marginBottom: '-5px'}} >
            <WrapperFooterHead>Danh mục sản phẩm</WrapperFooterHead>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }} >
            <WrapperFooterDetailLink span={5} >
              <WrapperFooterTopicLink>Điện thoại - Máy tính bảng<br/></WrapperFooterTopicLink>
              <a rel="noreferrer" href="" class="small-text" target="_blank">Điện thoại Smartphone</a>&nbsp;/&nbsp;
              <a rel="noreferrer" href="" class="small-text" target="_blank">Điện thoại bàn</a>&nbsp;/&nbsp;
              <a rel="noreferrer" href="" class="small-text" target="_blank">Điện thoại phổ thông</a>&nbsp;/&nbsp;
              <a rel="noreferrer" href="" class="small-text" target="_blank">Máy đọc sách</a>&nbsp;/&nbsp;
              <a rel="noreferrer" href="" class="small-text" target="_blank">Máy tính bảng</a>
            </WrapperFooterDetailLink>
            <WrapperFooterDetailLink span={5} >
              <WrapperFooterTopicLink>Laptop<br/></WrapperFooterTopicLink>
              <a rel="noreferrer" href="" class="small-text" target="_blank">Deal Sốc</a>&nbsp;/&nbsp;
              <a rel="noreferrer" href="" class="small-text" target="_blank">Gameing</a>&nbsp;/&nbsp;
              <a rel="noreferrer" href="" class="small-text" target="_blank">MacBook</a>&nbsp;/&nbsp;
              <a rel="noreferrer" href="" class="small-text" target="_blank">Học tập, văn phòng</a>&nbsp;/&nbsp;
              <a rel="noreferrer" href="" class="small-text" target="_blank">Đồ họa, kĩ thuật</a>&nbsp;/&nbsp;
              <a rel="noreferrer" href="" class="small-text" target="_blank">Mỏng, nhẹ</a>&nbsp;/&nbsp;
              <a rel="noreferrer" href="" class="small-text" target="_blank">Cao cấp, sang trọng</a>

            </WrapperFooterDetailLink>
            <WrapperFooterDetailLink span={5} >
              <WrapperFooterTopicLink>Đồng hồ<br/></WrapperFooterTopicLink>
              <a rel="noreferrer" href="" class="small-text" target="_blank">FlashSale</a>&nbsp;/&nbsp;
              <a rel="noreferrer" href="" class="small-text" target="_blank">Đồng hồ nam</a>&nbsp;/&nbsp;
              <a rel="noreferrer" href="" class="small-text" target="_blank">Đồng hồ nữ</a>&nbsp;/&nbsp;
              <a rel="noreferrer" href="" class="small-text" target="_blank">Đồng hồ trẻ em</a>&nbsp;/&nbsp;
              <a rel="noreferrer" href="" class="small-text" target="_blank">Cao cấp</a>&nbsp;/&nbsp;
              <a rel="noreferrer" href="" class="small-text" target="_blank">Sét quà,lắc tay</a>&nbsp;/&nbsp;
              <a rel="noreferrer" href="" class="small-text" target="_blank">SmartWatch</a>&nbsp;/&nbsp;
              <a rel="noreferrer" href="" class="small-text" target="_blank">Đồng hồ số</a>&nbsp;/&nbsp;
              <a rel="noreferrer" href="" class="small-text" target="_blank">Đồng hồ kim</a>&nbsp;/&nbsp;
              <a rel="noreferrer" href="" class="small-text" target="_blank">Bản giới hạn</a>
            </WrapperFooterDetailLink>
            <WrapperFooterDetailLink span={5}  >
              <WrapperFooterTopicLink>PC<br/></WrapperFooterTopicLink>
              <a rel="noreferrer" href="" class="small-text" target="_blank">PC Gaming</a>&nbsp;/&nbsp;
              <a rel="noreferrer" href="" class="small-text" target="_blank">PC Văn phòng</a>&nbsp;/&nbsp;
              <a rel="noreferrer" href="" class="small-text" target="_blank">PC Đồ họa</a>&nbsp;/&nbsp;
              <a rel="noreferrer" href="" class="small-text" target="_blank">Màn hình</a>&nbsp;/&nbsp;
              <a rel="noreferrer" href="" class="small-text" target="_blank">iMac</a>
              
            </WrapperFooterDetailLink>
            <WrapperFooterDetailLink span={4} >
              <WrapperFooterTopicLink>Phụ kiện<br/></WrapperFooterTopicLink>
              <a rel="noreferrer" href="" class="small-text" target="_blank">Phụ kiện di dộng</a>&nbsp;/&nbsp;
              <a rel="noreferrer" href="" class="small-text" target="_blank">Phụ kiện âm thanh</a>&nbsp;/&nbsp;
              <a rel="noreferrer" href="" class="small-text" target="_blank">Phụ kiện laptop</a>&nbsp;/&nbsp;
              <a rel="noreferrer" href="" class="small-text" target="_blank">Thương hiệu hàng đầu</a>&nbsp;/&nbsp;
              <a rel="noreferrer" href="" class="small-text" target="_blank">Thiết bị lưu trữ</a>&nbsp;/&nbsp;
              <a rel="noreferrer" href="" class="small-text" target="_blank">Thiết bị nhà thông minh</a>
              
            </WrapperFooterDetailLink>
          </div>
        </div>
      </WrapperFooter>
    </div>
  )
}

export default FooterComponent
