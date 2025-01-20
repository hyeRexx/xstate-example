import { setup, type Actor, type EventFromLogic, type SnapshotFrom } from 'xstate';

export enum DoorEventType {
  OPEN = 'open',
  CLOSE = 'close',
  LOCK = 'lock',
  UNLOCK = 'unlock',
}

export enum DoorStateType {
  CLOSED = 'closed',
  OPEN = 'open',
  LOCKED = 'locked',
}

export const doorMachine = setup({
  types: {
    events: {} as { type: DoorEventType },
  },
}).createMachine({
  id: 'door-state-machine',
  context: {},
  initial: DoorStateType.CLOSED,
  states: {
    [DoorStateType.CLOSED]: {
      on: {
        [DoorEventType.OPEN]: { target: DoorStateType.OPEN },
        [DoorEventType.LOCK]: { target: DoorStateType.LOCKED },
      },
    },
    [DoorStateType.OPEN]: {
      on: {
        [DoorEventType.CLOSE]: { target: DoorStateType.CLOSED },
      },
    },
    [DoorStateType.LOCKED]: {
      on: {
        [DoorEventType.UNLOCK]: { target: DoorStateType.CLOSED },
      },
    },
  },
});

export type DoorActor = Actor<typeof doorMachine>;
export type DoorEvents = EventFromLogic<typeof doorMachine>;
export type DoorSnapshot = SnapshotFrom<typeof doorMachine>;
export type DoorContext = DoorSnapshot['context'];
