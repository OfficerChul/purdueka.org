import Image from "next/image";

export default function PKABanner() {
    return (
      <div className="h-[36vw] truncate h-20">
        <Image alt='banner' src='/banner-70.jpeg' className='w-full brightness-50' width='1280' height='1280'></Image>
      </div>
    )

}