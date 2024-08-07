import { useContext, useRef } from "react";
import { CartContext } from "../../../context/Cart/CartContext";

function Modal(props: {
  currItemId: string;
  currItemQty: number;
  setCurrItemQty: React.Dispatch<React.SetStateAction<number>>;
  modalRef: React.LegacyRef<HTMLDialogElement>;
}) {
  const { currItemId, currItemQty, setCurrItemQty, modalRef } = props;

  const { updateQty } = useContext(CartContext);

  const CloseBtn = useRef<HTMLButtonElement>(null);

  const handleUpdate = () => {
    updateQty(currItemQty, currItemId);
    CloseBtn?.current?.click();
  };
  return (
    <dialog
      id='my_modal_3'
      className='modal modal-bottom sm:modal-middle'
      ref={modalRef}
    >
      <div className='modal-box'>
        <form className=' w-full h-full mt-4'>
          <div className='flex flex-col w-full h-full justify-center align-middle'>
            <div className='flex col-md-6 w-full justify-center'>
              <label className='form-control w-full max-w-xs'>
                Quantity:
                <input
                  type='number'
                  placeholder='Quantity Here'
                  className='input input-bordered w-full max-w-xs rounded'
                  value={currItemQty}
                  min={1}
                  onChange={(e) => {
                    setCurrItemQty(parseInt(e.target.value));
                  }}
                />
              </label>
            </div>

            <div className='flex col-md-6 mt-11 w-full justify-center '>
              <button
                className='btn btn-active btn-primary w-full max-w-xs '
                onClick={(e) => {
                  e.preventDefault();
                  handleUpdate();
                }}
              >
                Update
              </button>
            </div>
          </div>
        </form>
        <div className='modal-action'>
          <form method='dialog'>
            <button className='btn' id='closeBtn' ref={CloseBtn}>
              Close
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
}

export default Modal;
