import { ConnectWalletRequired } from "../connect-wallet-required";
import { INftDetailOwnersProps } from "./nft-detail-owners.type";
import "./nft-detail-owners.style.scss";
import { useState } from "react";
import { CustomPagination, StyledTab } from "../../components";

const classNamePrefix = "toto-wui-single-site-zapper-nft-detail-owners";

const tabMock = [
  {
    id: 1,
    title: "All",
  },
  {
    id: 2,
    title: "Following",
  },
];

export const NftDetailOwners = (props: INftDetailOwnersProps) => {
  const { data } = props;

  const [tabSelected, setTabSelected] = useState<string>(tabMock[0].title);

  return (
    <div className={classNamePrefix}>
      <div className={`${classNamePrefix}__toolbar`}>
        <div className={`${classNamePrefix}__tab`}>
          <StyledTab
            tabs={tabMock}
            tabSelected={tabSelected}
            setTabSelected={setTabSelected}
          />
        </div>

        <div className={`${classNamePrefix}__pagination-wrapper`}>
        <div className={`${classNamePrefix}__pagination`}>
          <CustomPagination currentPage={1} maxPage={2} />
        </div>
      </div>
      </div>
      <ConnectWalletRequired />
    </div>
  );
};
