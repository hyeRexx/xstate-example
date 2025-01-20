'use client';

import { useDoor } from '@/hook/useDoor';
import DoorImage from '@/components/doorImage';
import DoorButton from '@/components/doorButton';
import { DoorEventType, DoorStateType } from '@/machine/door-machine';

export default function Door() {
  const { doorState, trigger } = useDoor();
  const onOpen = () => {
    trigger({ type: DoorEventType.OPEN });
  };
  const onClose = () => {
    trigger({ type: DoorEventType.CLOSE });
  };
  const onLock = () => {
    trigger({ type: DoorEventType.LOCK });
  };
  const onUnlock = () => {
    trigger({ type: DoorEventType.UNLOCK });
  };

  return (
    <div className="flex flex-col justify-center items-center gap-[30px]">
      <DoorImage doorState={doorState} />
      <div className="flex gap-[50px]">
        <DoorButton
          type="OPEN-CLOSE"
          disabled={doorState === DoorStateType.LOCKED}
          onClick={doorState === DoorStateType.OPEN ? onClose : onOpen}
          name={doorState === DoorStateType.OPEN ? DoorEventType.CLOSE : DoorEventType.OPEN}
        />
        <DoorButton
          type="LOCK-UNLOCK"
          disabled={doorState === DoorStateType.OPEN}
          onClick={doorState === DoorStateType.LOCKED ? onUnlock : onLock}
          name={doorState === DoorStateType.LOCKED ? DoorEventType.UNLOCK : DoorEventType.LOCK}
        />
      </div>
    </div>
  );
}
