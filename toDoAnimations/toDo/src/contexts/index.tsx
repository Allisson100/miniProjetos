import { SwitchProvider } from './switch'
import { PositionElementProvider } from './positionElement'
import { InputTextLengthProvider } from './inputTextLength'
import { PencilAnimationStateProvider } from './pencilAnimation'
import { EraserAnimationStateProvider } from './eraserAnimation'

interface Props {
    children?: React.ReactNode;
}

export default function ContextProvider({ children }: Props) {
    return (
        <SwitchProvider>
            <PositionElementProvider>
                <InputTextLengthProvider>
                    <PencilAnimationStateProvider>
                        <EraserAnimationStateProvider>
                            {children}
                        </EraserAnimationStateProvider> 
                    </PencilAnimationStateProvider>
                </InputTextLengthProvider>
            </PositionElementProvider>
        </SwitchProvider>
    )
}