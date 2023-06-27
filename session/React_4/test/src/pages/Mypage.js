import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { setUser, initUser } from "../redux/userSlice";

const MyPage = () => {
    const { userID, userName } = useSelector((state) => state.user);
    return (
        <>
            <div>
                <div>
                    {userName}
                    {userID}님 반갑습니다.
                </div>
            </div>
        </>
    );
};

export default MyPage;
