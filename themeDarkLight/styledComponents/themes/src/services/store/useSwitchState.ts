import {create} from 'zustand';

type MySate = {
    switchState: boolean;
    setSwitchState: (value: boolean) => void;
}

const useSwitchState = create<MySate>((set) => ({
    switchState: false,
    setSwitchState: (value: boolean) => set(() => ({ switchState: value })),
}));

export {useSwitchState};