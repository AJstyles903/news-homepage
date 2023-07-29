import Retro from '../assets/images/image-retro-pcs.jpg'
import Laptop from '../assets/images/image-top-laptops.jpg'
import Gaming from '../assets/images/image-gaming-growth.jpg'

const Contant = (props) => {
    return(
        <>
            <div className='flex flex-row gap-6'>
                <img className='w-[100px]' src={props.image} alt={props.image} />
                <div className='flex flex-col items-stretch justify-around'>
                    <h1 className='text-4xl text-grayish-blue font-inter-bold'>{props.number}</h1>
                    <p className='text-very-dark-blue font-inter-bold text-lg hover:text-soft-red'>{props.title}</p>
                    <p className='text-sm text-very-dark-blue font-inter-regular leading-6'>{props.text}</p>
                </div>
            </div>
        </>
    )
}

const Features = () => {
    return (
        <>
            <div className='flex flex-col md:flex-row gap-6 my-20'>
                <Contant image={Retro} number="01" title="Reviving Retro PCs" text="What happens when old PCs are given modern upgrades?"/>
                <Contant image={Laptop} number="02" title="Top 10 Laptops of 2022" text="Our best picks for various needs and budgets."/>
                <Contant image={Gaming} number="03" title="The Growth of Gaming" text="How the pandemic has sparked fresh opportunities."/>
            </div>
        </>
    )
}

export default Features