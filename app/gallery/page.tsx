'use client';

import { Button, Modal, Badge } from 'flowbite-react';
import { useState } from 'react';

/*
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12],
  ]
*/
type MyImage = {
  id: number
  href: string
  tags: string[]
}
const data = [ ...Array(4) ].map((_, idx) => 
  [ ...Array(3) ].map((_, idx2) => ({
    id: idx * 3 + idx2,
    href: `/sample/sample${idx * 3 + idx2+1}.jpg`,
    tags: ["tag1", "tag2"]
  } as MyImage)
))

export default function Page() {
  const [openModal, setOpenModal] = useState<string | undefined>();
  const [myImage, setMyImage] = useState<MyImage | undefined>();
  const props = { openModal, setOpenModal, myImage, setMyImage };
  return <>
    <div className="flex justify-between mt-10">
      <div className='text-yellow-600 text-2xl mt-4'>갤러리</div>
      <div>
        <input type="text" id="first_name" className="border border-black text-gray-900 text-sm block w-full p-2.5" placeholder="검색하세요." />
      </div>
    </div>
    <div className="mt-4 flex justify-end">
      <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
        업로드
      </button>
    </div>

    <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
      <Modal dismissible show={props.openModal === 'dismissible'} onClose={() => props.setOpenModal(undefined)}>
        {/* <Modal.Header>header</Modal.Header> */}
        <Modal.Body>
          <img className="h-auto max-w-full" src={props.myImage?.href} alt="" />
          <div className="mt-4 flex just">
          {
            props.myImage?.tags.map(e => <Badge key={e} className="mr-1" color="gray">{e}</Badge>)
          }
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button color="boilermaker-gold" onClick={() => props.setOpenModal(undefined)}>
            저장하기
          </Button>
          <Button color="gray" onClick={() => props.setOpenModal(undefined)}>
            닫기
          </Button>
        </Modal.Footer>
      </Modal>
    {
      data.map((outer, idx) => <div className="grid gap-4" key={idx}>
        {
          outer.map(e => <div
            onClick={() => [props.setOpenModal('dismissible'), props.setMyImage(e) ]}
            key={e.id}
          >
            <img className="h-auto max-w-full rounded-lg" src={e.href} alt="" />
          </div>)
        }
      </div>)
    }
  </div>
  <div className='mt-4 flex justify-center'>
      <span className='pe-2 text-yellow-600 hover:text-black hover:cursor-pointer'>&lt; Prev</span>
      <span className='px-2 text-yellow-600 hover:text-black hover:cursor-pointer'>1</span>
      <span className='px-2 text-yellow-600 hover:text-black hover:cursor-pointer'>2</span>
      <span className='px-2 text-yellow-600 hover:text-black hover:cursor-pointer'>3</span>
      <span className='ps-2 text-yellow-600 hover:text-black hover:cursor-pointer'>Next &gt;</span>
    </div>
  </>
}