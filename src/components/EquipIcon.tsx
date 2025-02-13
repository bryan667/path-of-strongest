import { FC, useEffect, useRef, useState } from 'react';
import { toLower } from 'lodash';
import EquipPopupDetails from './EquipPopupDetails';

type TProps = {
  equip: { [key: string]: any } | undefined;
};

const EquipIcon: FC<TProps> = ({ equip }: any) => {
  const [isHovered, setIsHovered] = useState(false);
  const [position, setPosition] = useState('left');

  const parentRef = useRef<HTMLDivElement | null>(null);
  const inventoryId = equip?.inventoryId;
  const rarity = equip?.rarity || 'normal';

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

  useEffect(() => {
    const handlePosition = () => {
      const parent = parentRef.current;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      let isNearRightEdge = false;
      if (window.innerWidth > 500) {
        isNearRightEdge = rect.right + 350 > window.innerWidth;
      } else {
        isNearRightEdge = rect.right + 200 > window.innerWidth;
      }

      setPosition(isNearRightEdge ? 'right' : 'left');
    };
    handlePosition();
    window.addEventListener('resize', handlePosition);
    return () => window.removeEventListener('resize', handlePosition);
  }, []);

  return (
    <div
      ref={parentRef}
      className={`${backgroundColor} justify-items-center place-content-center w-full h-full relative`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleOnClick}
    >
      {inventoryId && (
        <>
          {equip?.icon && (
            <img src={equip.icon} alt={inventoryId} className="rounded-md" />
          )}

          <EquipPopupDetails
            isHovered={isHovered}
            backgroundColor={backgroundColor}
            equip={equip}
            popupPosition={position}
          />
        </>
      )}
    </div>
  );
};

export default EquipIcon;
