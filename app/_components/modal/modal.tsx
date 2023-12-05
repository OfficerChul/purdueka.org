"use client"
import { Modal, Button } from "flowbite-react";


export default function PKAModal(props: {header: string, context: string, button1: string, button2: string, openModal: boolean, setOpenModal: any}) {
    return (

        <Modal dismissible show={props.openModal} size="md" className='w-full text-white bg-black' onClose={() => props.setOpenModal(false)} popup>
                <Modal.Header color='white' className='bg-black text-white'></Modal.Header>
                <Modal.Body className='bg-black flex flex-col items-center'>
                    <div className="h-3 text-3xl mb-10">
                        {props.header}
                    </div>
                    <div className="space-y-6 bg-black text-white">
                        <p className="text-base leading-relaxed bg-black text-white dark:text-gray-400">
                            {props.context}
                        </p>
                    </div>
                </Modal.Body>
                <Modal.Footer className='bg-black flex flex-col gap-3 w-full justify-center'>
                    <Button color="boilermaker-gold" className=' bg-boilermaker-gold hover:bg-yellow-600 hover:text-black cursor-pointer z-20 w-full border-0 outline-none' onClick={() => props.setOpenModal(false)}>{props.button1}</Button>
                    <Button className='bg-[#D9D9D9] relative right-1 text-black w-full border-0 outline-0' onClick={() => props.setOpenModal(false)}>
                        {props.button2}
                    </Button>
                </Modal.Footer>
            </Modal>

    );
}