import {useState} from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";


function Todo(props) {
    //函数体内部的代码


    //useState会返回两个参数，一个是当前的状态，一个是更新状态的函数，默认false
    //当前模态的快照，默认不开启，当触发某个按钮时，开启模态
    const [modalIsOpen, setModalIsOpen] = useState(false);


    function deleteHandler() {
        // console.log('clicked');
        // console.log(props.text)
        //TODO 1 模态叠加层
        //但是为了小而可维护，这里在components组件目录下新增一个Modal.js文件
        //TODO 2灰色背景，防止用户点击其他地方
        //新建一个背景组件
        setModalIsOpen(true)
    }
    function closeModalHandler() {
        setModalIsOpen(false)
    }

    return (
        <div className='card'>
            <h2>{props.text}</h2>
            <div className='actions'>
                <button className='btn' onClick={deleteHandler}>Delete</button>
            </div>

            {modalIsOpen && (
                <Modal onClick={closeModalHandler} onCancel={closeModalHandler} onConfirm={closeModalHandler} />
            )}
            {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}

        </div>

    )
}
//    onClick={closeModalHandler} onCancel={closeModalHandler}
//    onClick={closeModalHandler} onConfirm={closeModalHandler}
//    {modalIsOpen ? <Modal/> : null}
// {modalIsOpen && <Modal/>} 两种写法等价，代码解释，如果modalIsOpen为true，就渲染Modal组件，否则不渲染
export default Todo;