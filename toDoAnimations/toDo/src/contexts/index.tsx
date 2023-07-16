import { SwitchProvider } from './switch'

interface Props {
    children?: React.ReactNode;
}

export default function ContextProvider({ children }: Props) {
    return (
        <SwitchProvider>
            {children}
        </SwitchProvider>
    )
}