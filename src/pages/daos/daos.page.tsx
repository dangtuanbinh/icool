import React from "react";
import { GridDataList } from "../../components";
import { DaosSlider } from "../../components/daos-slider";
import { DaosCollectionMock } from "../../mocks";
import "./daos.style.scss";

const classNamePrefix = "toto-wui-single-site-daos";

export const DaosPage = () => {
  return (
    <div className={classNamePrefix}>
      <div className={`${classNamePrefix}__header`}>
        <div className={`${classNamePrefix}__slide`}>
          <DaosSlider title="Features" data={DaosCollectionMock} />
        </div>

        <div className={`${classNamePrefix}__header-layer`}></div>
      </div>

      <div className={`${classNamePrefix}__body`}>
        <GridDataList title="DeFi DAOs" data={DaosCollectionMock} />

        <GridDataList title="Gamings DAOs" data={DaosCollectionMock} />

        <GridDataList title="NFTs DAOs" data={DaosCollectionMock} />

        <GridDataList title="Services DAOs" data={DaosCollectionMock} />

        <GridDataList title="Social DAOs" data={DaosCollectionMock} />

        <GridDataList title="Service DAOs" data={DaosCollectionMock} />
      </div>
    </div>
  );
};
