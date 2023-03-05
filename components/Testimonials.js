import React from 'react'

const Testimonials = () => {
    return (
        <div>
            <section class="text-black body-font">
                <div class="container px-5 py-20 mx-auto">
                    <h1 class="text-3xl font-medium title-font text-gray-900 mb-12 text-center">Testimonials</h1>
                    <div class="flex flex-wrap -m-4">
                        <div class="p-4 md:w-1/2 w-full">
                            <div class="h-full bg-slate-100 p-8 rounded border border-slate-200">
                            <span >&#8220;</span>
                                <p class="leading-relaxed mb-6">I absolutely love this sweatshirt, I have it in all 3 colours! The fabric is light and cool but not see though, the length is perfect and the style is not clingy so helps hide the bumps. Looks smart and summery, would definitely buy other colours if they become available.</p>
                                <a class="inline-flex items-center">
                                    <span class="flex-grow flex flex-col">
                                        <span class="title-font font-medium text-black">Tejas Ghadage.</span>
                                        <span class="text-black text-sm">Satara,Maharastra.</span>
                                    </span>
                                </a>
                                <div class="float-right">
                                <span>&#8221;</span>
                                </div>
                            </div>
                        </div>
                        <div class="p-4 md:w-1/2 w-full">
                            <div class="h-full bg-slate-100 p-8 rounded border border-slate-200">
                            <span >&#8220;</span>
                                <p class="leading-relaxed mb-6">As usual, great value, great tshirt. ❤️❤️❤️ Amazing clothing true to sizing which is great .Purchasing online was easy and received my order within days was so quick and easy. Absolutely love Tshirt and hoodies it is my new favourite store.</p>
                                <a class="inline-flex items-center">
                                    <span class="flex-grow flex flex-col">
                                        <span class="title-font font-medium text-black">Prince Kumar</span>
                                        <span class="text-black text-sm">Patna Bihar</span>
                                    </span>
                                </a>
                                <div className='float-right'>
                                <span>&#8221;</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonials
