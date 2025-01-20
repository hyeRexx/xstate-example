import { DoorStateType } from '@/machine/door-machine';

interface DoorImageProps {
  doorState: DoorStateType;
}

export default function DoorImage({ doorState }: DoorImageProps) {
  switch (doorState) {
    case DoorStateType.OPEN: {
      return <img width={500} src="/door_opened.png" alt="open" className="ml-[70px]" />;
    }
    case DoorStateType.CLOSED: {
      return <img width={500} src="/door_closed.png" alt="close" className="ml-[70px]" />;
    }
    case DoorStateType.LOCKED: {
      return <img width={500} src="/door_locked.png" alt="locked" className="ml-[70px]" />;
    }
  }
}
