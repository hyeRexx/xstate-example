import { DoorStateType } from '@/machine/door-machine';

interface DoorImageProps {
  doorState: DoorStateType;
}

export default function DoorImage({ doorState }: DoorImageProps) {
  switch (doorState) {
    case DoorStateType.OPEN: {
      return <img width={500} height={100} src="/door_opened.png" alt="open" />;
    }
    case DoorStateType.CLOSED: {
      return <img width={500} height={100} src="/door_closed.png" alt="close" />;
    }
    case DoorStateType.LOCKED: {
      return <img width={500} height={100} src="/door_locked.png" alt="locked" />;
    }
  }
}
