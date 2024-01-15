import React from 'react'
import { LiaTimesSolid } from 'react-icons/lia';
import Modal from '../../../utils/Modal'

const EditProfile = (editModal, setEditModal) => {
  return (
    <Modal modal={editModal} setModal={setEditModal}>
        <div className='center w-[95%] md:w-[45%] bg-white mx-auto shadows my-[1rem] z-20 mb-[3rem] p-[2rem]'>
            {/* head */}
            <div className="flex items-center justify-between">
                <h2 className="font-bold text-xl">
                    Profile information
                </h2>
                <button className='text-xl'>
                    <LiaTimesSolid />
                </button>
            </div>

            {/* body */}


            {/* foot */}
        </div>
    </Modal>
  )
}

export default EditProfile