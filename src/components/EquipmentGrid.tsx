import { FC } from 'react';
import { toLower } from 'lodash';
import EquipIcon from './EquipIcon';

type TProps = {
  items: Array<Record<string, any>>;
};

const EquipmentGrid: FC<TProps> = ({ items }) => {
  const equipmentSet: any = {};

  for (const item of items) {
    if (toLower(item.inventoryId) === 'helm') {
      equipmentSet.helmet = item;
    }
    if (toLower(item.inventoryId) === 'bodyarmour') {
      equipmentSet.bodyArmour = item;
    }
    if (toLower(item.inventoryId) === 'belt') {
      equipmentSet.belt = item;
    }
    if (toLower(item.inventoryId) === 'weapon') {
      equipmentSet.weapon = item;
    }
    if (toLower(item.inventoryId) === 'offhand') {
      equipmentSet.offhand = item;
    }
    if (toLower(item.inventoryId) === 'gloves') {
      equipmentSet.gloves = item;
    }
    if (toLower(item.inventoryId) === 'boots') {
      equipmentSet.boots = item;
    }
    if (toLower(item.inventoryId) === 'ring') {
      equipmentSet.ring = item;
    }
    if (toLower(item.inventoryId) === 'ring2') {
      equipmentSet.ring2 = item;
    }
    if (toLower(item.inventoryId) === 'amulet') {
      equipmentSet.amulet = item;
    }
    if (toLower(item.inventoryId) === 'flask' && item.x === 0) {
      equipmentSet.flask1 = item;
    }
    if (toLower(item.inventoryId) === 'flask' && item.x === 1) {
      equipmentSet.flask2 = item;
    }
    if (toLower(item.inventoryId) === 'flask' && item.x === 2) {
      equipmentSet.flask3 = item;
    }
    if (toLower(item.inventoryId) === 'flask' && item.x === 3) {
      equipmentSet.flask4 = item;
    }
    if (toLower(item.inventoryId) === 'flask' && item.x === 4) {
      equipmentSet.flask5 = item;
    }
  }

  return (
    <div className="border border-gray-400 p-4">
      <div className="grid grid-cols-8 grid-rows-6 gap-1 min-w-[50px] min-h-[50px] p-0">
        <div className="col-start-4 col-span-2 row-start-1 row-span-2 bg-gray-300 flex justify-center items-center rounded">
          <EquipIcon equip={equipmentSet.helmet} />
        </div>
        <div className="col-start-4 col-span-2 row-start-3 row-span-3 bg-gray-300 flex justify-center items-center rounded">
          <EquipIcon equip={equipmentSet.bodyArmour} />
        </div>
        <div className="col-start-4 col-span-2 row-start-6 row-span-1 bg-gray-300 flex justify-center items-center rounded">
          <EquipIcon equip={equipmentSet.belt} />
        </div>
        <div className="col-start-1 col-span-2 row-start-1 row-span-4 bg-gray-300 flex justify-center items-center rounded">
          <EquipIcon equip={equipmentSet.weapon} />
        </div>
        <div className="col-start-7 col-span-2 row-start-1 row-span-4 bg-gray-300 flex justify-center items-center rounded">
          <EquipIcon equip={equipmentSet.offhand} />
        </div>
        <div className="col-start-2 col-span-2 row-start-5 row-span-2 bg-gray-300 flex justify-center items-center rounded">
          <EquipIcon equip={equipmentSet.gloves} />
        </div>
        <div className="col-start-6 col-span-2 row-start-5 row-span-2 bg-gray-300 flex justify-center items-center rounded">
          <EquipIcon equip={equipmentSet.boots} />
        </div>
        <div className="col-start-3 col-span-1 row-start-4 row-span-1 bg-gray-300 flex justify-center items-center rounded">
          <EquipIcon equip={equipmentSet.ring} />
        </div>
        <div className="col-start-6 col-span-1 row-start-4 row-span-1 bg-gray-300 flex justify-center items-center rounded">
          <EquipIcon equip={equipmentSet.ring2} />
        </div>
        <div className="col-start-6 col-span-1 row-start-3 row-span-1 bg-gray-300 flex justify-center items-center rounded">
          <EquipIcon equip={equipmentSet.amulet} />
        </div>
      </div>
      <div className="pt-1 grid grid-cols-9 grid-rows-2 gap-1 min-w-[50px] min-h-[50px]">
        <div className="col-start-3 col-span-1 row-start-1 row-span-2 bg-gray-300 flex justify-center items-center rounded">
          <EquipIcon equip={equipmentSet.flask1} />
        </div>
        <div className="col-start-4 col-span-1 row-start-1 row-span-2 bg-gray-300 flex justify-center items-center rounded">
          <EquipIcon equip={equipmentSet.flask2} />
        </div>
        <div className="col-start-5 col-span-1 row-start-1 row-span-2 bg-gray-300 flex justify-center items-center rounded">
          <EquipIcon equip={equipmentSet.flask3} />
        </div>
        <div className="col-start-6 col-span-1 row-start-1 row-span-2 bg-gray-300 flex justify-center items-center rounded">
          <EquipIcon equip={equipmentSet.flask4} />
        </div>
        <div className="col-start-7 col-span-1 row-start-1 row-span-2 bg-gray-300 flex justify-center items-center rounded">
          <EquipIcon equip={equipmentSet.flask5} />
        </div>
      </div>
    </div>
  );
};

export default EquipmentGrid;
