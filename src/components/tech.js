import React from 'react';
import BallCanvas from "./canvas/Ball";
import SectionWrapper from '../hoc/SectionWrapper';
// import { textVariant } from '../utils/motion';
import { technologies } from '../constants';


const Tech = () => {
    console.log(technologies)
    return (
        <div className='flex flex-row flex-wrap'>
            {technologies.map((technology) => (
                <div className='h-28 w-28 ' key={technology.name}>
                    <BallCanvas icon={technology.icon} />
                </div>
            ))}

        </div>
    )
}

export default SectionWrapper(Tech,"tech")



