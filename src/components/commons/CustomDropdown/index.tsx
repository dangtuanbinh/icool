import { Typography } from "antd";
import "./styles.scss";

interface Props {
  collapse: boolean;
  items?: any;
  label?: string;
}

const CustomDropdown = ({ collapse, items, label }: Props) => {
  console.log(items);

  return (
    <div>
      {collapse && (
        <div className="dropdown">
          {items?.map((item: any, index: any) => (
            <div onClick={item.action} key={index} className="dropdown__item">
              <Typography>{item ? item.label : label}</Typography>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
