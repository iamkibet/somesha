import Image from "next/image";
import React, { FC, useEffect, useState } from "react";
import avatarIcon from "../../../public/assets/avatar.svg";
import { AiOutlineCamera } from "react-icons/ai";
import {
  useEditProfileMutation,
  useUpdateAvatarMutation,
} from "@/redux/features/user/userApi";
import { useLoadUserQuery } from "@/redux/features/api/apiSlice";
import toast from "react-hot-toast";

type Props = {
  avatar: string | null;
  user: any;
};

const ProfileInfo: FC<Props> = ({ avatar, user }) => {
  const [name, setName] = useState(user.name);
  const [updateAvatar, { isSuccess, error }] = useUpdateAvatarMutation();
  const [editProfile, { isSuccess: success, error: editprofileerror }] =
    useEditProfileMutation();
  const [loadUser, setLoadUser] = useState(false);
  const {} = useLoadUserQuery(undefined, { skip: loadUser ? false : true });

  const imageHandler = async (e: any) => {
    const fileReader = new FileReader();
    fileReader.onload = () => {
      if (fileReader.readyState === 2) {
        const avatar = fileReader.result;
        updateAvatar({
          avatar,
        });
      }
    };
    fileReader.readAsDataURL(e.target.files[0]);
  };

  useEffect(() => {
    if (isSuccess || success) {
      setLoadUser(true);
    }
    if (error || editprofileerror) {
      console.log(error);
    }
    if (success) {
      toast.success("Profile updated successfully");
    }
  }, [error, isSuccess, success, editprofileerror]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (name != "") {
      await editProfile({
        name: name,
      });
    }
  };
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="relative">
          <Image
            src={user.avatar || avatar ? user.avatar.url || avatar : avatarIcon}
            alt="avatar"
            width={120}
            height={120}
            className="w-[120px] h-[120px] cursor-pointer border-[3px] border-[#337a39a] rounded-full"
          />
          <input
            type="file"
            accept="image/png, image/jpeg, image/jpg , image/svg+xml , image/gif "
            className="hidden"
            onChange={imageHandler}
            id="avatar"
            name=""
          />
          <label htmlFor="avatar">
            <div className="w-[30px] h-[30px] bg-slate-900 rounded-full absolute bottom-2 right-2 flex items-center cursor-pointer">
              <AiOutlineCamera size={20} className="z-1" />
            </div>
          </label>
        </div>
      </div>
      <br />
      <br />
      <div className="w-full pl-6 800px:pl-10">
        <form onSubmit={handleSubmit}>
          <div className="800px:w-[50%] m-auto block pb-4">
            <div className="w-100% ">
              <label htmlFor="name" className="block pb-2">
                Name
              </label>
            </div>
            <input
              type="text"
              id="name"
              className="w-full h-10 dark:bg-slate-900 dark:text-white bg-white rounded-md mt-1 px-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="w-[100%] pt-2 800px:w-[50%] m-auto block pb-4">
            <label className="block pb-2"> Email Adress</label>
            <input
              type="text"
              className="w-full h-10 dark:bg-slate-900 dark:text-white bg-white rounded-md mt-1 px-2"
              value={user?.email}
              required
              readOnly
            />
          </div>
          <div className="w-[100%] pt-2 800px:w-[50%] m-auto block pb-4">
            <label className="block pb-2"> Phone Number</label>
            <input
              type="text"
              className="w-full h-10 dark:bg-slate-900 dark:text-white bg-white rounded-md mt-1 px-2"
              value={user?.phone}
            />
          </div>
          <input
            type="submit"
            required
            className="w-full 800px:w-[250px] h-[40px] bg-green-500 text-white text-center rounded-md mt-8 cursor-pointer"
            value="update"
          />
        </form>
      </div>
    </>
  );
};

export default ProfileInfo;
