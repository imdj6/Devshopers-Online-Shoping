import Image from 'next/image'
import React from 'react'
import Banner11 from '../public/banner2.webp'
import Banner12 from '../public/banner11.webp'
import Banner13 from '../public/banner12.webp'
import Banner14 from '../public/banner1.webp'
import Banner15 from '../public/banner1.webp'
import Banner16 from '../public/banner1.webp'

const Ads = () => {
    return (
        <div>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-10 mx-auto flex flex-wrap">
                    <div class="flex flex-wrap md:-m-2 -m-1">
                        <div class="flex flex-wrap w-1/2">
                            <div class="md:p-2 p-1 w-1/2 hover:scale-95">
                                <Image alt="gallery" class="w-full object-cover h-full object-center block" src={Banner12}/>
                            </div>
                            <div class="md:p-2 p-1 w-1/2 hover:scale-95">
                                <Image alt="gallery" class="w-full object-cover h-full object-center block" src={Banner13}/>
                            </div>
                            <div class="md:p-2 p-1 w-full hover:scale-95">
                                <Image alt="gallery" class="w-full h-full object-cover object-center block" src={Banner14}/>
                            </div>
                        </div>
                        <div class="flex flex-wrap w-1/2">
                            <div class="md:p-2 p-1 w-full hover:scale-95">
                                <Image alt="gallery" class="w-full h-full  object-fill block" src={Banner11}/>
                            </div>
                            <div class="md:p-2 p-1 w-1/2 hover:scale-95">
                                <Image alt="gallery" class="w-full object-cover h-full object-center block" src={Banner15}/>
                            </div>
                            <div class="md:p-2 p-1 w-1/2 hover:scale-95">
                                <Image alt="gallery" class="w-full object-cover h-full object-center block" src={Banner16}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Ads
