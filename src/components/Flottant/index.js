import React from "react";
import {Reseaux, Trait, IconFacebook, IconInstagram, IconTwitter, Contact, IconContact} from "./Flottant.elements";
import {ModalContext} from "../Modal/context";
import Modal from "../Modal/Modal";

const Flottant = () => {

    const [showModal, updateShowModal] = React.useState(false);
    const toggleModal = () => updateShowModal(state => !state);

    return(
        <>
        <ModalContext.Provider value={{ showModal, toggleModal }}>
            <Reseaux >
                <Trait />
                <a href="https://www.facebook.com/SDGHOMEPROJECTS"><IconFacebook /></a>
                <a href="https://twitter.com/HOMEAssociatio1"><IconTwitter /></a>
                <a href="https://www.instagram.com/home.association/"><IconInstagram /></a>
                <Trait />
            </Reseaux>
            <Contact>
                    <Trait />
                    <IconContact onClick={toggleModal} />
                    <Modal canShow={showModal}
                           updateModalState={toggleModal}
                    />
                    <Trait />
            </Contact>
        </ModalContext.Provider>
        </>
    );
};

export default Flottant;