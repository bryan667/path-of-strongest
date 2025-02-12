import { FC, useState } from 'react';
import { toLower } from 'lodash';
import EquipPopupDetails from './EquipPopupDetails';

type TProps = {
  equip: { [key: string]: any } | undefined;
};

const EquipIcon: FC<TProps> = ({ equip }: any) => {
  const [isHovered, setIsHovered] = useState(false);

  const inventoryId = equip?.inventoryId;
  const rarity = equip?.rarity || 'normal';
  const icon = equip?.icon;

  let backgroundColor = 'bg-gray-300';

  switch (toLower(rarity)) {
    case 'magic':
      backgroundColor = 'bg-magic-color';
      break;
    case 'rare':
      backgroundColor = 'bg-rare-color';
      break;
    case 'unique':
      backgroundColor = 'bg-unique-color';
      break;
    default:
      backgroundColor = 'bg-normal-color';
      break;
  }

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleOnClick = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div
      className={`${backgroundColor} justify-items-center place-content-center w-full h-full relative`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleOnClick}
    >
      {inventoryId && (
        <div>
          {equip.icon && (
            <img src={equip.icon} alt={inventoryId} className="rounded-md" />
          )}

          <EquipPopupDetails
            isHovered={isHovered}
            backgroundColor={backgroundColor}
            equip={equip}
          />
        </div>
      )}
    </div>
  );
};

export default EquipIcon;
