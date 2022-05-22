import "./DeleteButton.css"

interface DeleteButtonProps {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const DeleteButton = ({ onClick }: DeleteButtonProps) => {
    return (
        <button className='delete-button' onClick={onClick}>x</button>
    );
};

export default DeleteButton;