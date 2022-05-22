import "./Backdrop.css";

interface BackDropProps {
  close: () => void;
}

const BackDrop = ({ close }: BackDropProps) => {
  return <div className="backdrop" onClick={close}></div>;
};

export default BackDrop;