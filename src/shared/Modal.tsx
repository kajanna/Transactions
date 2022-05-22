import Card from "./Card";
import Backdrop from "./Backdrop";
import { Wrapper } from "./interfaces";

import "./Modal.css";

interface ModalProps extends Wrapper {
  title: string;
  close: () => void;
}

const Modal = ({ children, title, close }: ModalProps) => {
  return (
    <>
      <Backdrop close={close} />
      <div className="modal__bg">
        <Card title={title}>
          <div className="modal">{children}</div>
        </Card>
      </div>
    </>
  );
};

export default Modal;
