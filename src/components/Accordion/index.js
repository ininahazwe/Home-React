import React, {Fragment} from 'react';
import Accordions from "./Accordions";
import './Accordion.elements.css';

const accordionData = [
    {
        question: 'Activities and Courses',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, vero quos doloremque eum quam dolorem.'
    },
    {
        question: 'Methodology & Results',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, vero quos doloremque eum quam dolorem inventore minus ad. Molestias, minima! Doloribus, vero quos doloremque.'
    },
    {
        question: 'Future plan',
        answer: 'Doloribus, vero quos doloremque eum quam dolorem inventore minus ad. Molestias, minima!'
    }
];
const Accordion = () => {
    return (
        <Fragment>
            <div className="container">
                <Accordions data={accordionData} duration={400} closeOthers opened={0} />
            </div>
        </Fragment>
    );
}

export default Accordion;