import React, { FC, useState } from 'react';
import DeleteModal from './DeleteModal';
import UpdateModal from './UpdateModal';
import { IComment } from './redux/types';
type PropType = {
  comment: IComment;
};

const Card: FC<PropType> = ({ comment }) => {
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [isOpenUpdateModal, setIsOpenUpdateModal] = useState(false);
  return (
    <div className="flex flex-col  justify-around p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{comment.name}</h5>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{comment.body}</p>
      <p className="mb-3 font-normal text-blue-800 dark:text-gray-400">{comment.email}</p>
      <div className="flex flex-row justify-center gap-3 mt-auto">
        <button
          onClick={() => setIsOpenUpdateModal(true)}
          className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Изменить
          <svg
            className="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <button
          onClick={() => setIsOpenDeleteModal(true)}
          className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Удалить
        </button>
      </div>
      {isOpenDeleteModal && <DeleteModal id={comment.id} setState={setIsOpenDeleteModal} />}
      {isOpenUpdateModal && <UpdateModal id={comment.id} setState={setIsOpenUpdateModal} />}
    </div>
  );
};

export default React.memo(Card);
