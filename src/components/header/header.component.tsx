import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "./header.style.scss";
import Nav from "react-bootstrap/Nav";
import { useNavigate } from "react-router-dom";
import { ListItem } from "../list-item";
import { Offcanvas } from "react-bootstrap";
import { Sidebar } from "../sidebar";
import { IHeaderComponentProps } from "..";

const classNamePrefix = "toto-wui-single-site-zapper-header";

const NavigationLinksMock = [
  {
    id: 1,
    title: "Address Book",
    icon: "bi bi-book-fill",
    endIcon: undefined,
  },
  {
    id: 2,
    title: "Settings",
    icon: "bi bi-gear-fill",
    endIcon: undefined,
  },
  {
    id: 3,
    title: "Developers",
    icon: "bi bi-code-square",
    endIcon: "bi bi-chevron-right",
  },
  {
    id: 4,
    title: "Contact & Support",
    icon: "bi bi-question-circle-fill",
    endIcon: "bi bi-chevron-right",
  },
  {
    id: 5,
    title: "More",
    icon: "bi bi-three-dots",
    endIcon: "bi bi-chevron-right",
  },
  {
    id: 6,
    title: "Theme",
    icon: "bi bi-moon-fill",
    endIcon: "bi bi-chevron-right",
  },
  {
    id: 7,
    title: "Base Currency",
    icon: "bi bi-currency-exchange",
    endIcon: "bi bi-translate",
  },
  {
    id: 8,
    title: "Connect",
    icon: "bi bi-paperclip",
    endIcon: undefined,
  },
];

export const Header: React.FC<IHeaderComponentProps> = () => {
  const navigate = useNavigate();

  const [profileTabSelected, setProfileTabSelected] = useState<any>("wallets");
  const [showToggleSidebar, setShowToggleSidebar] = useState<any>(false);

  return (
    <div className={classNamePrefix}>
      <div className={`${classNamePrefix}__hamburger-menu`}>
        <i
          className="bi bi-list"
          onClick={() => setShowToggleSidebar(true)}
        ></i>

        <Offcanvas
          className={`${classNamePrefix}__canvas`}
          show={showToggleSidebar}
          onHide={() => setShowToggleSidebar(false)}
        >
          <Offcanvas.Body className={`${classNamePrefix}__canvas-body`}>
            <Sidebar />
          </Offcanvas.Body>
        </Offcanvas>
      </div>

      <img
        className={`${classNamePrefix}__image`}
        src="https://studio.zapper.fi/img/logo.png"
        alt=""
        onClick={() => navigate("/")}
      />

      <div className={`${classNamePrefix}__responsive-search`}>
        <i className="bi bi-search"></i>
      </div>

      <div className={`${classNamePrefix}__search-group`}>
        <div className={`${classNamePrefix}__search-input-wrapper`}>
          <div className={`${classNamePrefix}__search-icon`}>@</div>
          <input
            className={`${classNamePrefix}__search-input`}
            placeholder="Search accounts, NFTs, DAOs, tokens..."
          />
          <div className={`${classNamePrefix}__search-end-icon`}>/</div>
        </div>
      </div>

      <div className={`${classNamePrefix}__navigation-group`}>
        <div className={`${classNamePrefix}__connect-wallet`}>
          Connect Wallet
        </div>

        <div className={`${classNamePrefix}__connect-profile`}>
          <div className={`${classNamePrefix}__connect-profile-wrapper`}>
            <Dropdown
              className={`${classNamePrefix}__dropdown`}
              autoClose={false}
            >
              <Dropdown.Toggle
                className={`${classNamePrefix}__dropdown-button`}
              >
                <div className={`${classNamePrefix}__profile-button`}>
                  <i className="bi bi-person-lines-fill" />
                </div>
              </Dropdown.Toggle>

              <Dropdown.Menu
                className={`${classNamePrefix}__dropdown-menu-profile`}
              >
                <div className={`${classNamePrefix}__profile-nav-header`}>
                  <Nav
                    className={`${classNamePrefix}__profile-nav`}
                    justify
                    activeKey={profileTabSelected}
                    onSelect={(selectedKey: any) =>
                      setProfileTabSelected(selectedKey)
                    }
                  >
                    <Nav.Item
                      className={`${classNamePrefix}__profile-nav-item`}
                    >
                      <Nav.Link
                        className={
                          profileTabSelected === "wallets"
                            ? `${classNamePrefix}__profile-nav-link-active`
                            : `${classNamePrefix}__profile-nav-link`
                        }
                        eventKey="wallets"
                      >
                        Wallets
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link
                        className={
                          profileTabSelected === "bundles"
                            ? `${classNamePrefix}__profile-nav-link-active`
                            : `${classNamePrefix}__profile-nav-link`
                        }
                        eventKey="bundles"
                      >
                        Bundles
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>
                {profileTabSelected === "wallets" ? (
                  <div>
                    <div
                      className={`${classNamePrefix}__profile-wallet-content`}
                    >
                      <div
                        className={`${classNamePrefix}__profile-wallet-connect`}
                      >
                        <i className="bi bi-wallet2"></i>
                      </div>
                      <span>Wallet not connected</span>
                    </div>

                    <div
                      className={`${classNamePrefix}__profile-wallet-button`}
                    >
                      Connect Wallet
                    </div>
                  </div>
                ) : (
                  <div className={`${classNamePrefix}__profile-bundle-content`}>
                    <div
                      className={`${classNamePrefix}__profile-bundle-header`}
                    >
                      <span>My Bundles</span>
                      <div className={`${classNamePrefix}__profile-bundle-add`}>
                        + Add
                      </div>
                    </div>

                    <div className={`${classNamePrefix}__profile-bundle-list`}>
                      No bundles found
                    </div>
                  </div>
                )}
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>

        <div className={`${classNamePrefix}__navigation-link`}>
          <div className={`${classNamePrefix}__navigation-wrapper`}>
            <Dropdown
              className={`${classNamePrefix}__dropdown-navigation`}
              autoClose={false}
            >
              <Dropdown.Toggle
                className={`${classNamePrefix}__dropdown-button`}
              >
                <div className={`${classNamePrefix}__navigation-button`}>
                  <i className="bi bi-caret-down-fill"></i>
                </div>
              </Dropdown.Toggle>

              <Dropdown.Menu
                className={`${classNamePrefix}__dropdown-menu-navigation`}
              >
                <div>
                  {NavigationLinksMock.map((item) => (
                    <Dropdown.Item
                      className={`${classNamePrefix}__dropdown-navigation-item`}
                      key={item.id}
                      href="#/action-1"
                    >
                      <div className={`${classNamePrefix}__list-item`}>
                        <ListItem
                          styledIcon
                          icon={item.icon}
                          leftTitle={item.title}
                          endIcon={item.endIcon}
                        />
                      </div>
                    </Dropdown.Item>
                  ))}
                </div>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
};
