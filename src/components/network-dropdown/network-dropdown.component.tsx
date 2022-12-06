import { Dropdown } from 'react-bootstrap'
import { NetworkMock } from '../../mocks'
import { INetWorkModalProps } from '../../views'
import { ListItem } from '../list-item'
import './network-dropdown.style.scss'

const classNamePrefix = 'toto-wui-single-site-network-dropdown'

export const NetworkDropdown: React.FC<INetWorkModalProps> = () => {
    return (
        <div className={`${classNamePrefix}__dropdown-network-wrapper`}>
        <Dropdown className={`${classNamePrefix}__dropdown-network`}>
          <Dropdown.Toggle
            className={`${classNamePrefix}__dropdown-toggle-network`}
          >
            <div className={`${classNamePrefix}__network-button`}>
              <span>All Networks</span>
              <i className="bi bi-chevron-down" />
            </div>
          </Dropdown.Toggle>

          <Dropdown.Menu
            className={`${classNamePrefix}__dropdown-menu-network`}
          >
            <ListItem leftTitle="All network" icon="bi bi-grid" />
            {NetworkMock.map((item: any) => (
              <div className={`${classNamePrefix}__list-item`} key={item.id}>
                <ListItem logoUrl={item.logoUrl} leftTitle={item.name} />
              </div>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    )
}