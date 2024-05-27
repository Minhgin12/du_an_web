import React from "react";
import { WapperLableText, WapperTextPrice, WrapperContent, WrapperTextValue } from "./style";
import { Checkbox, Rate} from "antd";

const NavbarComponent = () => {
  const onChange = () => {};
  const readerContent = (type, options) => {
    switch (type) {
      case 'text':
        return options.map((option) => {
          return <WrapperTextValue>{option}</WrapperTextValue>;
        });
      case 'checkbox':
        return (
          <Checkbox.Group style={{ width: "100%", display: 'flex', flexDirection: 'Column', gap: '10px' }} onChange={onChange}>
            {
                options.map((option) => {
                    return (
                        <Checkbox value={option.value} >{option.label}</Checkbox>
                    )
                })
            }
            
          </Checkbox.Group>
        )
        case 'star':
            return options.map((option) => {
                //console.log('check',option)
                return (
                    <div style={{ display: 'flex', gap: '12px'}}>
                        <Rate style={{ fontSize: '12px'}} disabled defaultValue={option}/>
                        <span>{`từ ${option} sao`}</span>
                    </div>
                )
            })
        case 'price':
            return options.map((option) => {
                return (
                    <WapperTextPrice>
                        {option}
                    </WapperTextPrice>
                )
            })
      default:
        return {};
    }
  };

  return (
    <div>
      <WapperLableText>Lable</WapperLableText>
      <WrapperContent>
        {readerContent("text", ["Tu lanh", "TV", "May Giat"])}
      </WrapperContent>
      <WrapperContent>
        {readerContent('checkbox', [
                { value: 'a', label: 'A'},
                { value: 'b', label: 'B'}
            ])}
      </WrapperContent>
      <WrapperContent>
        {readerContent('star', [3, 4, 5])}
      </WrapperContent>
      <WrapperContent>
        {readerContent('price', ['dưới 5000', 'trên 5000'])}
      </WrapperContent>
    </div>
  );
};

export default NavbarComponent;
