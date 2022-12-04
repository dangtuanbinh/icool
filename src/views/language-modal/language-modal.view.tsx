import { Modal } from "react-bootstrap";
import { ListItem } from "../../components";
import "./language-modal.style.scss";
import { ILanguageModalProps } from "./languague-modal.type";
import { LanguageMock } from "../../mocks/language.mock";

const classNamePrefix = "toto-wui-single-site-zapper-language-modal";

export const LanguageModal: React.FC<ILanguageModalProps> = (props) => {
  const { isOpen, onClose } = props;
  return (
    <div className={classNamePrefix}>
      <Modal show={isOpen} fullscreen={true} onHide={onClose}>
        <Modal.Header className={`${classNamePrefix}__modal-header`}>
          <Modal.Title className={`${classNamePrefix}__modal-header-title`}>
            Select Currency
          </Modal.Title>
          <i className="bi bi-x" onClick={onClose}></i>
        </Modal.Header>
        <Modal.Body className={`${classNamePrefix}__modal-body`}>
          <div className={`${classNamePrefix}__list-item-wrapper`}>
            {LanguageMock.map((item: any) => (
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
