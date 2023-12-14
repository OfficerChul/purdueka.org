'use Client';

import { Carousel } from 'flowbite-react';
import Image from 'next/image';

export default function PKACarousel(props: { image_data: any }) {
    return (
        <Carousel pauseOnHover slide slideInterval={3000} leftControl="left" rightControl="right">
            {props.image_data.map((data: any) => <Image key={data.key} src={data.url} alt={data.url} width='100' height='100' className='z-20'></Image>)}
        </Carousel>

    )

}