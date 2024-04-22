import { forwardRef, useRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";
// import Cart from "./Cart";

const CartModal = forwardRef(function Modal(_, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => ({
    open: () => {
      dialog.current.showModal();
    },
  }));

  return createPortal(
    <dialog id="modal" ref={dialog}>
      <div className="fixed right-0 top-0 bottom-0 w-1/4 bg-white">
        <form method="dialog">{/* <Cart /> */}</form>
      </div>
    </dialog>,
    document.getElementById("modal")
  );
});

export default CartModal;
