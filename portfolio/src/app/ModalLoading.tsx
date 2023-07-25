"use client"
import { useEffect, useState } from "react";

declare global {
  interface Window {
    modal1: HTMLDialogElement;
  }
}

type Props = {
  children: React.ReactNode;
  openBool: boolean;
};

type ModalInput = {
  homeLoaded: Boolean;
  modalTitle: String;
  msg: string;
  link: string;
}


export default function ModalLoading ({homeLoaded, modalTitle, msg, link}: ModalInput){
  const [open, setOpen] = useState(true);
  const handleModalToggle = () => setOpen(!open);

  const Modal = ({children, openBool}: Props) => {
    return (
      <dialog id="modal1" className={`modal ${openBool ? "modal-open":"invisible"}`}>
        <form method="dialog" className="modal-box">
          { children }
        </form>
      </dialog>
    );
  };

  return (
    <>
      <Modal openBool={open}>
          <h3 className="font-bold text-lg">{ modalTitle }</h3>
          <p className="py-4 whitespace-pre-line">{ msg }</p>
          <img src={link} alt="gif"></img>

          <div className="modal-action">
            <button className="btn" onClick={handleModalToggle}>
              {
              (homeLoaded )
                ? <div><span className="loading loading-spinner loading-sm text-secondary align-middle font-bold"/> Loading</div>
                : <div className="text-secondary align-middle flex flex-row">
                    <input readOnly type="checkbox" checked={true} className="checkbox checkbox-primary checkbox-xs align-middle mr-1" />
                    <div className="align-middle">READY</div>
                  </div>
              }
            </button>
          </div>
        
      </Modal>
    </>
  );
}