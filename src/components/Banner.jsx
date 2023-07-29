import desktopWeb from '../assets/images/image-web-3-desktop.jpg'
import mobileWeb from '../assets/images/image-web-3-mobile.jpg'

const Banner = () => {
    return (
        <>
            <div className='flex flex-col md:flex-row gap-3 md:gap-6 justify-between'>
                <div className='flex flex-col justify-between gap-10'>
                    <img className='hidden md:block' src={desktopWeb} alt="web-3" />
                    <img className='md:hidden' src={mobileWeb} alt="web-3" />
                    <div className='flex flex-col md:flex-row gap-4 md:gap-20'>
                        <h1 className='text-4xl text-very-dark-blue md:text-6xl font-inter-extrabold'>The Bright Future of Web 3.0?</h1>
                        <div className='flex flex-col items-start justify-between gap-6'>
                            <p className='text-[14px] text-very-dark-blue font-inter-regular leading-6 tracking-[0.5px]'>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.But is it really fulfilling its promise?</p>
                            <button className='bg-soft-red hover:bg-very-dark-blue outline-none text-off-white text-sm px-10 py-4 tracking-[1px] font-inter-bold'>READ MORE</button>
                        </div>
                    </div>
                </div>
                <div className='bg-very-dark-blue p-6 text-off-white mt-12 md:mt-0 md:w-[65%]'>
                    <h2 className='my-2 text-4xl text-soft-orange font-inter-bold'>New</h2>
                    <div className='leading-7 mt-6'>
                        <h6 className='font-inter-bold hover:text-soft-orange text-[18px]'>Hydrogen VS Electric Cars</h6>
                        <p className='font-inter-regular text-[14px]'>Will hydrogen-fueled cars ever catch up to EVs?</p>
                    </div>
                    <hr className='my-8' />
                    <div className='leading-7 '>
                        <h6 className='font-inter-bold hover:text-soft-orange text-[18px]'>The Downsides of AI Artistry</h6>
                        <p className='font-inter-regular text-[14px]'>What are the possible adverse effects of on-demand AI image generation?</p>
                    </div>
                    <hr className='my-8' />
                    <div className='leading-7 '>
                        <h6 className='font-inter-bold hover:text-soft-orange text-[18px]'>Is VC Funding Drying Up?</h6>
                        <p className='font-inter-regular text-[14px]'>Private funding by VC firms is down 50% YOY.We take a look at what that means.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner