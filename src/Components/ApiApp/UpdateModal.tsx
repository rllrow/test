import React, { FC, useEffect, useState } from 'react';
import { useTypedDispatch, useTypedSelector } from './redux/store';
import { UPDATE_COMMENT } from './redux/action-types';
import { IComment } from './redux/types';

type PropsType = {
  id: number;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
};
const UpdateModal: FC<PropsType> = ({ id, setState }) => {
  const dispatch = useTypedDispatch();
  const [commentData, setCommentData] = useState<IComment>({ name: '', body: '', postId: 1, email: '', id: 1 });

  const comment = useTypedSelector((state) => state.filter((com: any) => com.id === id))[0];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommentData(Object.assign({}, commentData, { [e.target.name]: e.target.value }));
  };
  useEffect(() => {
    setCommentData(comment);
  }, [comment]);

  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative w-auto my-6 max-w-4xl w-500">
        <div className=" border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none  bg-slate-100 ">
          <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
            <h3 className="text-3xl font-semibold">Изменить</h3>
            <button
              className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={() => setState(false)}
            >
              <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none text-red-500">
                ×
              </span>
            </button>
          </div>
          <div className="relative p-6 flex-auto">
            <div className="mb-4 ">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Name
              </label>
              <input
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                name="name"
                required={true}
                type="text"
                placeholder="name"
                value={commentData?.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="body">
                body
              </label>
              <input
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="body"
                name="body"
                type="text"
                required={true}
                placeholder="body comment"
                value={commentData?.body}
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <input
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
                type="email"
                required={true}
                placeholder="email comment"
                value={commentData?.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
            <button
              className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => setState(false)}
            >
              Отмена
            </button>
            <button
              className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => {
                dispatch({ type: UPDATE_COMMENT, payload: commentData });
                setState(false);
              }}
            >
              Сохранить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateModal;
