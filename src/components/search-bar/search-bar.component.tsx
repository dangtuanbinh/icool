import "./search-bar.style.scss";
import { ISearchBarProps } from "./search-bar.type";

const classNamePrefix = "toto-wui-single-site-zapper-search-bar";

export const SearchBar: React.FC<ISearchBarProps> = (props) => {
  const { placeholder } = props;

  return (
    <div className={classNamePrefix}>
      <div className={`${classNamePrefix}__search-group`}>
        <div className={`${classNamePrefix}__search-input-wrapper`}>
          <div className={`${classNamePrefix}__search-icon`}>
            <i className="bi bi-search"></i>
          </div>
          <input
            className={`${classNamePrefix}__search-input`}
            placeholder={placeholder}
          />
        </div>
      </div>
    </div>
  );
};
