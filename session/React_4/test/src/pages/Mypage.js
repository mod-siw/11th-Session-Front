//Mypage
import React from "react";
<<<<<<< HEAD
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
=======
import { useSelector } from "react-redux";

const MyPage = () => {
  const { userName, userID } = useSelector((state) => state.user);
  return (
    <>
      <div>
        <div>
          {userName}({userID})님 반갑습니다.
        </div>
      </div>
    </>
  );
>>>>>>> 5f203ca49e4bcc0ca53c9ce0ae58fd33448dac41
};

export default MyPage;
