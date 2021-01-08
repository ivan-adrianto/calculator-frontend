/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button, Modal, ModalBody } from 'reactstrap';
import './ModalAlert.css'

const ModalExample = ({ trigger, toggle }) => {

    return (
        <div>
            <Modal isOpen={trigger} toggle={toggle} >
                <ModalBody className='body-alert'>
                    <h3>Fill minimum 2 columns and check 2 checkboxes besides it to start operation</h3>
                    <div className="button-ok">
                        <Button color="light" onClick={toggle}>OK</Button>{' '}
                    </div>
                </ModalBody>
            </Modal>
        </div>
    );
}

export default ModalExample;    