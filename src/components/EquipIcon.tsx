import { FC } from 'react';
import { toLower } from 'lodash';

type TProps = {
  equip: { [key: string]: any } | undefined;
};

const EquipIcon: FC<TProps> = ({ equip }: any) => {
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
      backgroundColor = 'bg-gray-300';
      break;
  }

  return (
    <div
      className={`${backgroundColor} justify-items-center place-content-center w-[100%] h-[100%]`}
    >
      {icon && <img src={equip.icon} alt={inventoryId} />}
    </div>
  );
};

export default EquipIcon;
