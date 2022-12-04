import { Modal } from "react-bootstrap";
import { ListItem } from "../../components";
import { NetworkMock } from "../../mocks";
import "./network-modal.style.scss";
import { INetWorkModalProps } from "./network-modal.type";

const classNamePrefix = "toto-wui-single-site-zapper-network-modal";

export const NetworkModal: React.FC<INetWorkModalProps> = (props) => {
  const { isOpen, onClose } = props;
  return (
    <div className={classNamePrefix}>
      <Modal show={isOpen} fullscreen={true} onHide={onClose}>
        <Modal.Header className={`${classNamePrefix}__modal-header`}>
          <Modal.Title className={`${classNamePrefix}__modal-header-title`}>
            Select Network
          </Modal.Title>
          <i className="bi bi-x" onClick={onClose}></i>
        </Modal.Header>
        <Modal.Body className={`${classNamePrefix}__modal-body`}>
          <div className={`${classNamePrefix}__list-item-wrapper`}>
            {NetworkMock.map((item: any) => (
              <div className={`${classNamePrefix}__list-item`} key={item.id}>
                <ListItem logoUrl={item.logoUrl} leftTitle={item.name} />
              </div>
            ))}
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};
