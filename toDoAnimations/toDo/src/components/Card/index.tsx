import { CardContainer , CardText , CardButtonContainer , CardButton } from './styles'

interface Props {
    todo: {
        id: number;
        completed: boolean;
        text: string;
    };
    completeToDo: (id: number) => void;
    getPosition: (id: number , completed: boolean) => void;
    deleteToDo: (id: number) => void;
} 

function Card ({ todo , completeToDo , getPosition , deleteToDo }: Props ) {

    function handleCompleteToDoAndGetPosition () {
        completeToDo(todo.id)
        getPosition(todo.id, todo.completed)
    }

    function handleDeleteToDo () {
        deleteToDo(todo.id)
    }

    return (
        <CardContainer 
            $completed={(todo.completed)}
        >
            <CardText 
                $completed={(todo.completed)} 
                id={`${todo.id}`}
            >{todo.text}</CardText>
        
            <CardButtonContainer>
                <CardButton onClick={handleCompleteToDoAndGetPosition}>
                    {(todo.completed) ? 'Retomar' : 'Completar'}
                </CardButton>
                <CardButton onClick={handleDeleteToDo}>Excluir</CardButton>
            </CardButtonContainer>
        </CardContainer>

    )
}

export default Card
