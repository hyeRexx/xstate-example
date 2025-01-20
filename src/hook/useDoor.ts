import { useActor } from '@xstate/react';
import { doorMachine } from '@/machine/door-machine';

export function useDoor() {
  const [{ value: doorState }, trigger] = useActor(doorMachine);

  return { doorState, trigger };
}
