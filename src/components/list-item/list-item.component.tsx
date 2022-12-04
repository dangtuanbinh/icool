import "./list-item.style.scss";
import { IListItemProps } from "./list-item.type";

const classNamePrefix = "toto-wui-single-site-zapper-list-item";

export const ListItem: React.FC<IListItemProps> = (props) => {
  const {
    rank,
    logoUrl,
    icon,
    styledIcon,
    leftTitle,
    leftSubtitle,
    rightTitle,
    rightSubtitle,
    endIcon,
  } = props;

  return (
    <div className={classNamePrefix}>
      <div className={`${classNamePrefix}__left`}>
        {rank && <div className={`${classNamePrefix}__rank`}>{rank}</div>}
        {icon && (
          <div
            className={
              styledIcon
                ? `${classNamePrefix}__icon-styled`
                : `${classNamePrefix}__icon`
            }
          >
            <i className={icon}></i>
          </div>
        )}
        {logoUrl && (
          <img className={`${classNamePrefix}__image`} src={logoUrl} alt="" />
        )}

        <div className={`${classNamePrefix}__info-wrapper-left`}>
          {leftTitle && (
            <span className={`${classNamePrefix}__title`}>{leftTitle}</span>
          )}

          {leftSubtitle && (
            <span className={`${classNamePrefix}__subtitle`}>
              {leftSubtitle}
            </span>
          )}
        </div>
      </div>

      <div className={`${classNamePrefix}__right`}>
        <div className={`${classNamePrefix}__info-wrapper-right`}>
          {rightTitle && (
            <span className={`${classNamePrefix}__title`}>{rightTitle}</span>
          )}

          {rightSubtitle && (
            <span className={`${classNamePrefix}__subtitle`}>
              {rightSubtitle}
            </span>
          )}
        </div>

        {endIcon && (
          <div className={`${classNamePrefix}__end-icon`}>
            <i className={endIcon}></i>
          </div>
        )}
      </div>
    </div>
  );
};
