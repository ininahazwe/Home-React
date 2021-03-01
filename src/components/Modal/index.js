import React, {useState} from "react";
import Modal from 'react-modal';

Modal.setAppElement('#root')

function ModalBox(){
    const [modalIsOpen, setModalIsOpen] = useState(false)
    return(
        <div className='App'>
            <button onClick={() => setModalIsOpen(true)}>Open modal</button>
            <Modal
                isOpen={modalIsOpen}
                shouldCloseOnOverlayClick={false}
                onRequestClose={() => setModalIsOpen(false)}
                style={
                    {
                        overlay:{
                            backgroundColor: 'grey'
                        },
                        content:{
                            color: 'orange',
                            WebkitOverflowScrolling: 'touch'

                        }
                    }
            }>
                <div>
                    <button onClick={() => setModalIsOpen(false)}>close</button>
                </div>
            </Modal>
        </div>
    )
}
export default ModalBox;