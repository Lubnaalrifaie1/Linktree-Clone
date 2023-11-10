import Image from 'next/image'
import { useRef } from 'react'

export default function Card({ zIndex, index, id, img, onRemove }) {

    const handleANimationEnd = ()=>{
        onRemove(id);
    }

    return (
        <div className='animated-img' onAnimationEnd={handleANimationEnd}>
            <Image
                key={id}
                src={img}
                height={400}
                width={400}
                className="w-[18vw] mx-auto"
                alt="card"
                style={{ zIndex: zIndex + index }}
            />
        </div>
    )
}
