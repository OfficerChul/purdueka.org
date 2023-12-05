'use Client';

import { Carousel } from 'flowbite-react';

export default function PKACarousel(props: { image_data: any , leftControl: string, rightControl: string, slideInterval: number}) {
    return (
        <Carousel pauseOnHover slide slideInterval={props.slideInterval} leftControl={props.leftControl} rightControl={props.rightControl}>
            {props.image_data.map((data: any) => <img key={data.key} src={data.url} alt={data.url} width='100' height='100' className='z-20'></img>)}
        </Carousel>

    )

}