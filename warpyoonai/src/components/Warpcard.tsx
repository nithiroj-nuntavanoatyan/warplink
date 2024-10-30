import Deletewarp from "./Deletewarp";

// เพิ่มประเภท props สำหรับ Warpcard
interface WarpcardProps {
    warpdata: {
        id: string;
        title: string;
        link: string;
        category: string;
        description: string;
        dateCreatedAt: string; // เปลี่ยนแปลงตามโครงสร้าง Firestore ที่แท้จริงของคุณ
    };
    warpId: string; // รับ warpId เป็น string
}

const Warpcard: React.FC<WarpcardProps> = ({ warpdata, warpId }) => {
    const { title, link, category, description } = warpdata;

    return (
        <div className=' card-normal rounded-lg bg-[#4b69b7] items-stretch h-full w-4/5'>
            <>
                <div>
                    <div className=' flex flex-col justify-center text-center '>
                        <div className="head text-lg sm:text-xl font-bold md:text-2xl font-base text-[#ffffff] m-1">{title}</div>
                        <div className="head text-lg sm:text-xl font-semibold md:text-2xl font-base text-[#ffffff] m-1">{category}</div>
                        <div className="head text-lg sm:text-xl font-semibold md:text-2xl font-base text-[#ffffff] m-1">{description}</div>
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
    );
}

export default Warpcard;

