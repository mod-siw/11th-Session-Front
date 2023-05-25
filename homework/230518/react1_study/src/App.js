import React from "react";
import Modal from "./components/Modal";
import { useState } from "react";
import styled from "styled-components";

import designLogo from "./images/Figma.png";
import frontLogo from "./images/React.png";
import backLogo from "./images/django.png";

function App() {
    const [modal, setModal] = useState(false);
    const [name, setName] = useState("");
    const [track, setTrack] = useState("");

    const onChange = (e) => {
        setName(e.target.value);
    };

    const Design = () => {
        setTrack("기획 & 디자인");
    };
    const Frontend = () => {
        setTrack("프론트엔드");
    };
    const Backend = () => {
        setTrack("백엔드");
    };

    const openModal = () => {
        setModal(true);
    };

    return (
        <>
            <Wrapper>
                <div className="backgroundModal">
                    <Title>
                        <p className="h1">create nameModal</p>
                        <p className="h2">이름 모달 만들기</p>
                        <div className="Line"></div>
                    </Title>

                    <InputWrapper>
                        <p className="inputName">
                            아기사자의 이름을 입력해주세요.
                        </p>
                        <Input
                            onChange={onChange}
                            value={name}
                            placeholder="아기 사자"
                        ></Input>
                    </InputWrapper>

                    <TrackOption>
                        <p>트랙을 선택해주세요.</p>
                        <div className="chooseTrack">
                            <button onClick={Design} className="Design">
                                <img src={designLogo} />
                                <span>기획디자인</span>
                            </button>
                            <button onClick={Frontend} className="Frontend">
                                <img src={frontLogo} />
                                <span>프론트엔드</span>
                            </button>
                            <button onClick={Backend} className="Backend">
                                <img src={backLogo} />
                                <span>백엔드</span>
                            </button>
                        </div>
                    </TrackOption>

                    <OpenBtn onClick={openModal}>이름 모달 만들기</OpenBtn>
                    {modal ? (
                        <Modal setModal={setModal} name={name} track={track} />
                    ) : null}
                </div>
            </Wrapper>
        </>
    );
}

export default App;

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #d8e4ec;
    font-family: "Noto Sans";
    display: flex;
    justify-content: center;
    align-items: center;

    .backgroundModal {
        width: 754px;
        height: 654px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        background: #ffffff;
        box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.25);
        border-radius: 24px;
        font-family: "Noto Sans";
    }
`;

const Title = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .h1 {
        font-weight: 300;
        font-size: 15px;
        margin-bottom: 0;
    }

    .h2 {
        font-weight: 600;
        font-size: 35px;
        margin-top: 10px;
    }

    .Line {
        width: 641px;
        height: 0px;
        border: 1.5px solid #d7d7d7;
    }
`;

const InputWrapper = styled.div`
    box-sizing: border-box;

    width: 516px;
    height: 97px;
    outline: none;
    font-size: 15px;
    margin-bottom: 10px;

    font-family: "Noto Sans";
    font-style: normal;
    color: #414141;
    font-weight: 700;
    font-size: 22px;
    line-height: 30px;

    .inputName {
        font-weight: 300;
        font-size: 16px;
    }
`;

const Input = styled.input`
    width: 506px;
    height: 51px;
    margin-bottom: 4%;
    padding-left: 10px;
    border: 0.8px solid #979797;
    box-shadow: 0px 1px 8px rgba(156, 156, 156, 0.15);
    border-radius: 10px;
    outline: none;
    font-size: 15px;
`;

const TrackOption = styled.div`
    box-sizing: border-box;

    width: 516px;
    /* height: 97px; */
    outline: none;
    margin-top: 30px;
    margin-bottom: 10px;

    display: flex;
    flex-direction: column;

    p {
        font-family: "Noto Sans";
        font-style: normal;
        color: #414141;
        font-weight: 700;
        font-size: 22px;
        line-height: 30px;
    }

    .chooseTrack {
        background-color: transparent;
        border: none;

        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
    }

    .chooseTrack button {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        height: 100px;
        background-color: transparent;
        border: none;
    }
`;

const OpenBtn = styled.button`
    width: 397px;
    height: 45px;
    aspect-ratio: 7.6/1;
    color: #ffffff;
    background: #81a7d3;
    border-radius: 24.5px;
    border: none;
    font-size: 20px;
    margin-top: 30px;
`;
