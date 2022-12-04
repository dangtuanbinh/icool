import "./custom-pagination.style.scss";
import { ICustomPaginationProps } from "./custom-pagination.type";

const classNamePrefix = "toto-wui-single-site-zapper-custom-pagination";

export const CustomPagination: React.FC<ICustomPaginationProps> = (props) => {
  const { currentPage, maxPage } = props;

  return (
    <div className={classNamePrefix}>
      <i className="bi bi-arrow-left" />
      <span className={`${classNamePrefix}__text`}>
        {currentPage} / {maxPage}
      </span>
      <i className="bi bi-arrow-right" />
    </div>
  );
};
