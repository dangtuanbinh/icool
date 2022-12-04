import { Modal } from "react-bootstrap";
import { ListItem } from "../../components";
import { WalletMock } from "../../mocks/wallet.mock";
import "./connect-wallet-modal.style.scss";
import { IConnectWalletModalProps } from "./connect-wallet-modal.type";

const classNamePrefix = "toto-wui-single-site-zapper-connect-wallet-modal";

export const ConnectWalletModal: React.FC<IConnectWalletModalProps> = (props) => {
  const { isOpen, onClose } = props;
  return (
    <div className={classNamePrefix}>
      <Modal show={isOpen} fullscreen={true} onHide={onClose}>
        <Modal.Header className={`${classNamePrefix}__modal-header`}>
          <Modal.Title className={`${classNamePrefix}__modal-header-title`}>
            Available Wallets
          </Modal.Title>
          <i className="bi bi-x" onClick={onClose}></i>
        </Modal.Header>
        <Modal.Body className={`${classNamePrefix}__modal-body`}>
          <div className={`${classNamePrefix}__list-item-wrapper`}>
            {WalletMock.map((item: any) => (
              <div className={`${classNamePrefix}__list-item`} key={item.id}>
                <ListItem logoUrl='https://1000logos.net/wp-content/uploads/2022/05/WalletConnect-Logo.png' leftTitle={item.name} />
              </div>
            ))}
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};
