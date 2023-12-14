
'use client';

import { Card, Dropdown } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Profile_Card(props: {email: string, image: string, name: string, name_us: string, major: string, role_us: string }) {
    let src = `/member_picture/${props.image}`
  return (
    <Card className=" w-80">
    
      <div className="flex flex-col items-center">
        <Image
          alt="Profile image"
          height="96"
          src={src}
          width="96"
          className="mb-3 rounded-full shadow-lg"
        />
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{props.name}({props.name_us})</h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">{props.role_us}</span>
              <span className="mb-1 text-sm font-medium text-gray-900 dark:text-white">{props.major}</span>
              <Link className="mb-1 text-sm font-medium text-boilermaker-gold dark:text-white" href={props.email}>{props.email}</Link>

        
      </div>
    </Card>
  );
}
