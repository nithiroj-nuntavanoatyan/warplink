import Deletewarp from "./Deletewarp";

const Warpcard = ({ warpdata, warpId }) => {

    const { title, link, category, description } = warpdata;

    return (
        // <div className='card-container flex justify-center  rounded-lg  bg-[#4b69b7]'>
        <div className=' card-normal rounded-lg bg-[#4b69b7] items-stretch h-full w-4/5'>
            <>
                <div>
                    <div className=' flex flex-col justify-center text-center '>
                        <div className="head text-lg sm:text-xl font-bold md:text-2xl font-base text-[#ffffff] m-1">{title}</div>
                        <div className="head text-lg sm:text-xl font-semibold md:text-2xl font-base text-[#ffffff] m-1">{category} </div>
                        <div className="head text-lg sm:text-xl font-semibold md:text-2xl font-base text-[#ffffff] m-1">{description} </div>
                    </div>
                    <div className="button items-center flex justify-center">
                        <button className="buttonforlink text-lg md:text-2xl text-[#e9f6f4] bg-[#1e2e7e] p-2 rounded-lg">
                            <a href={link} target="_blank" rel="noopener noreferrer">ดูวาร์ป</a>
                        </button>
                        <div className="button items-center flex justify-center m-2">
                            <Deletewarp warpId={warpId} />
                        </div>
                    </div>
                </div>
            </>
        </div>
    )
}

export default Warpcard