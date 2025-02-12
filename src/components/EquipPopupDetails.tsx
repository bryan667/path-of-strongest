import { isEmpty } from 'lodash';
import { FC } from 'react';

type TProps = {
  isHovered?: boolean;
  backgroundColor?: string;
  equip: { [key: string]: any };
};

const EquipPopupDetails: FC<TProps> = ({
  isHovered = false,
  backgroundColor = 'bg-normal-color',
  equip,
}) => {
  const renderByDisplayMode = (property: any) => {
    let renderComp = <div></div>;

    switch (property.displayMode) {
      case 0:
        const mainValue = property?.values?.[0]?.[0] ?? null;

        renderComp = (
          <>
            <span className="text-gray-500">{`${property.name}:`}</span>
            {!isEmpty(mainValue) && (
              <span className="text-white">{` ${mainValue}`}</span>
            )}
          </>
        );
        break;
    }

    return <>{renderComp}</>;
  };

  return (
    <>
      {isHovered && (
        <div
          className={`${backgroundColor} top-0 opacity-95 left-[105%] absolute min-h-[100%] min-w-[350px] h-fit w-fit z-100 px-[0px] py-[10px]`}
        >
          <div className="text-center">
            <div className={`pb-[10px]`}>
              <h3 className="font-bold">{equip.name}</h3>
              <h3 className="font-bold">{equip.baseType}</h3>
            </div>
            <div className={`bg-black min-h-[150px] p-[10px] text-sm/6`}>
              {equip?.properties?.map((property: any, index: number) => {
                return <p key={index}>{renderByDisplayMode(property)}</p>;
              })}

              {equip?.requirements?.map((requirements: any, index: number) => {
                const reqVals = requirements?.values?.[0]?.[0];

                return (
                  <span key={index}>
                    <span className="text-gray-500 ">{`${requirements.name}`}</span>
                    {!isEmpty(reqVals) && (
                      <span className="text-white">{` ${reqVals} `}</span>
                    )}
                  </span>
                );
              })}

              {equip?.requirements && <div className="pb-[5px]" />}

              {equip?.enchantMods?.map((enMod: any) => {
                return <p className="text-blue-200">{enMod}</p>;
              })}

              {equip?.enchantMods && <div className="pb-[5px]" />}

              {equip?.implicitMods?.map((iMod: any) => {
                return <p className="text-blue-400">{iMod}</p>;
              })}

              {equip?.implicitMods && <div className="pb-[5px]" />}

              {equip?.utilityMods?.map((utMod: any) => {
                return <p className="text-blue-400">{utMod}</p>;
              })}

              {equip?.utilityMods && <div className="pb-[5px]" />}

              {equip?.explicitMods?.map((exMod: any) => {
                return <p className="text-blue-400">{exMod}</p>;
              })}

              {equip?.explicitMods && <div className="pb-[5px]" />}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EquipPopupDetails;
