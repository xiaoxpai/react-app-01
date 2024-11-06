

function Modal(props) {

    function cancelHandler(){
        props.onCancel();
    }
    function confirmHandler(){
        props.onConfirm();
    }


  return (
    <div className='modal'>
      <p>Are you sure?</p>
      <button className='btn btn--alt' onClick={ cancelHandler}>Cancel</button>
      <button className='btn' onClick={confirmHandler}>Confirm</button>
    </div>
  );
}
//但是文字在左边，如何调整样式

export default Modal