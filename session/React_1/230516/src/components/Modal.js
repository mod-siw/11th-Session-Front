import React, { useState } from "react";
import styled from "styled-components";

const Modal = (props) => {
    const { setModal } = props;

    const style = {
        width: "100px",
        height: "100px",
        display: "flex",

        backgroundColor: "orange",
        marginTop: "30px",
        justifyContent: "center",
        alignItems: "center",
    };

    const deleteModal = () => {
        setModal(false);
    };
    return (
        <>
            <ModalWrapper>
                <DeleteButton onClick={deleteModal}> 모달 삭제</DeleteButton>
            </ModalWrapper>
        </>
    );
};
export default Modal;

const ModalWrapper = styled.div`
    width: 100px;
    height: 100px;
    display: flex;

    background-color: orange;
    margin-top: 30px;
    justify-content: center;
    align-items: center;
`;

const DeleteButton = styled.button`
    display: inline-block;
    color: purple;
    background-color: pink;
    font-size: 1em;
    font-weight: bolder;
    margin: 1em;
    padding: 1em;
    border: none;
    border-radius: 3px;
`;
