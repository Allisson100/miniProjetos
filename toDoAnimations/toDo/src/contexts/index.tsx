import { SwitchProvider } from './switch'
import { PositionElementProvider } from './positionElement'
import { CompleteButtonStateProvider } from './completeButtonClicked'
import { InputTextLengthProvider } from './inputTextLength'
import { AnimationFinishedProvider } from './animationFinished'

interface Props {
    children?: React.ReactNode;
}

export default function ContextProvider({ children }: Props) {
    return (
        <SwitchProvider>
            <PositionElementProvider>
                <CompleteButtonStateProvider>
                    <InputTextLengthProvider>
                        <AnimationFinishedProvider>
                            {children}
                        </AnimationFinishedProvider>   
                    </InputTextLengthProvider>
                </CompleteButtonStateProvider>
            </PositionElementProvider>
        </SwitchProvider>
    )
}