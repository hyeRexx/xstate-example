import { doorMachine } from '@/machine/door-machine';
import { useActor } from '@xstate/react';

export function useDoor() {
  const [{ value: doorState }, trigger] = useActor(doorMachine);

  return { doorState, trigger };
}
