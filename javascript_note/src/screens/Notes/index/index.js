import React, { Fragment, useState } from 'react';
import "../../../styles/notes.scss";
import HeaderLogged from "../../../components/header_logged";
import Notes from "../../../components/notes";
import { Column } from 'rbx';

function NotesScreen() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Fragment>
            <HeaderLogged setIsOpen={setIsOpen} />
            <Notes isOpen={isOpen} setIsOpen={setIsOpen} />
        </Fragment>
    )
}

export default NotesScreen;