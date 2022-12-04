import { Nav } from "react-bootstrap";
import "./styled-tab.style.scss";
import { IStyledTabProps, Tab } from "./styled-tab.type";

const classNamePrefix = "toto-wui-single-site-zapper-styled-tab";

export const StyledTab: React.FC<IStyledTabProps> = (props) => {
  const { tabs, tabSelected, setTabSelected } = props;
  return (
    <div className={classNamePrefix}>
      <Nav
        className={`${classNamePrefix}__navbar`}
        activeKey={tabSelected}
        onSelect={(selectedKey: any) => setTabSelected(selectedKey)}
      >
        {tabs?.map((item: Tab) => (
          <Nav.Item className={`${classNamePrefix}__navbar-item`} key={item.id}>
            <Nav.Link
              className={
                tabSelected === item.title
                  ? `${classNamePrefix}__navbar-link-active`
                  : `${classNamePrefix}__navbar-link`
              }
              eventKey={item.title}
            >
              {item.title}
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
    </div>
  );
};
