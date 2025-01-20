import { DoorEventType } from '@/machine/door-machine';

const style = {
  button: 'w-[200px] h-[100px] text-white font-bold text-[30px] uppercase rounded-[6px]',
  openButtons: 'bg-blue-400 hover:bg-blue-600',
  lockButtons: 'bg-red-400 hover:bg-red-600',
};

interface ButtonProps {
  type: 'OPEN-CLOSE' | 'LOCK-UNLOCK';
  name: DoorEventType;
  onClick: () => void;
  disabled: boolean;
}

export default function DoorButton({ onClick, disabled, type, name }: ButtonProps) {
  return (
    <button
      className={`${style.button}
        ${type === 'OPEN-CLOSE' ? style.openButtons : style.lockButtons}
        disabled:bg-slate-100 disabled:text-slate-200`}
      disabled={disabled}
      onClick={onClick}
    >
      {name}
    </button>
  );
}
