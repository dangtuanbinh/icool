import React, { useState } from "react";
import { CustomPagination, StyledTab } from "../../components";
import { ConnectWalletRequired } from "../connect-wallet-required";
import "./daos-detail-member.style.scss";

const classNamePrefix = "toto-wui-single-site-zapper-daos-detail-member";

const tabMock = [
  {
    id: 1,
    title: "ALL",
  },
  {
    id: 2,
    title: "Following",
  },
];

export const DaosDetailMember = () => {
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

        <CustomPagination currentPage={1} maxPage={3} />
      </div>
      <ConnectWalletRequired />

      <div className={`${classNamePrefix}__pagination`}>
        <CustomPagination currentPage={1} maxPage={3} />
      </div>
    </div>
  );
};
