'use client';

import { useEffect } from 'react';
import DoorImage from '@/components/doorImage';
import { useDoor } from '@/hook/useDoor';
import { DoorEventType, DoorStateType } from '@/machine/door-machine';

const style = {
  button: 'w-[200px] h-[100px] text-white font-bold text-[30px] uppercase rounded-[6px]',
  openButtons: 'bg-blue-400 hover:bg-blue-600',
  lockButtons: 'bg-red-400 hover:bg-red-600',
};

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

  const openButton = (
    <button
      name="open"
      onClick={onOpen}
      disabled={doorState === DoorStateType.LOCKED}
      className={`${style.button} ${style.openButtons} ${
        doorState === DoorStateType.LOCKED && 'disabled:bg-slate-100'
      }`}
    >
      open
    </button>
  );
  const closeButton = (
    <button name="close" onClick={onClose} className={`${style.button} ${style.openButtons}`}>
      close
    </button>
  );
  const lockButton = (
    <button
      name="lock"
      onClick={onLock}
      disabled={doorState === DoorStateType.OPEN}
      className={`${style.button} ${style.lockButtons} ${
        doorState === DoorStateType.OPEN && 'disabled:bg-slate-100'
      }`}
    >
      lock
    </button>
  );
  const unlockButton = (
    <button name="unlock" onClick={onUnlock} className={`${style.button} ${style.lockButtons}`}>
      unlock
    </button>
  );

  useEffect(() => {
    console.log(doorState);
  }, [doorState]);

  return (
    <div className="flex flex-col justify-center items-center gap-[30px]">
      <DoorImage doorState={doorState} />
      <div className="flex gap-[50px]">
        {doorState === DoorStateType.OPEN ? closeButton : openButton}
        {doorState === DoorStateType.LOCKED ? unlockButton : lockButton}
      </div>
    </div>
  );
}
