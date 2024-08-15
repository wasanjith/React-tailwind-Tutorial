import React from 'react';
import styles from '../style';
import { arrowUp } from '../assets';


const GetStarter = () => {
  return (
    <div 
      className={`${styles.flexCenter} 
      w-[140px] 
      h-[140px] 
      rounded-full
       bg-blue-500
       p-[20px]
       cursor-pointer`}>
      
      <div className={`${styles.flexCenter}
                        flex-col 
                        bg-primary
                        w-[100%]
                        h-[100%]
                        rounded-full`} >
        <div className={`${styles.flexStart} flex-row`}>
          <p className={`font-poppins 
            font-medium 
            text-[18px] 
            leading-[23px] 
            mr-2 text-gradient`}>
            Get
          </p>
          <img src={arrowUp} alt="arrow" className={"w-[23px] h-[23px] object-contain"} />
        </div>
        <p className={`font-poppins 
          font-medium 
          text-[18px] 
          leading-[23px] text-gradient`}>
          Started
        </p>
      </div>
    </div>
  );
};

export default GetStarter;