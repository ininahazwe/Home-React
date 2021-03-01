import React from "react";
import { ModalContext } from "./context";
import {ModalStyles, CloseIcon} from "./modal.elements";
import ContactForm from "../Contact";
import Slide from 'react-reveal/Slide';

const Modal = () => {
    return (
        <ModalContext.Consumer>
            {(context) => {
                if (context.showModal) {
                    return (
                        <ModalStyles>
                            <Slide bottom>
                            <CloseIcon onClick={context.toggleModal}>X</CloseIcon>
                            <ContactForm />
                            </Slide>
                        </ModalStyles>
                    );
                }

                return null;
            }}
        </ModalContext.Consumer>
    );
};

export default Modal;