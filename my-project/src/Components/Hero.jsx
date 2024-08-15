import styles from '../style';
import { discount , robot } from '../assets';
import GetStarter from './GetStarter'


const Hero = () => {
    return(
    <section id="home "className={
                                `flex 
                                md:flex-row 
                                flex-col
                                ${styles.paddingY}` } >
    <div className={`
                      flex-1 
                      ${styles.flexStart} 
                      flex-col 
                      xl:px-16 
                      px-6`}>
                                                          <div className={`flex 
                                                            flex-row 
                                                            item-center 
                                                            py-[6px] 
                                                            px-4 
                                                            bg-zinc-900 
                                                            rounded-[10px] 
                                                            mb-2`}>
                                                              <img src={discount} alt="discount" className={
                                                                                                            `w-[32px] 
                                                                                                            h-[32px]`} />

                                                              <p>                            
                                                                  <p className={`
                                                                                ${styles.paragraph} ml-2 `}>
                                                                    <span className="text-white mr-1">20%</span>
                                                                    <span className="text-white">DISCOUNT FOR </span>
                                                                    <span className="text-white mr-1">1 Month </span>
                                                                    <span className="text-white">ACCOUNT</span>
                                                                  </p>
                                                            </p> 
                                                                  
                                                          </div>

          <div className={`
                          flex
                          flex-row
                          justify-between
                          items-center
                          w-full`}>
                <h1 className={`flex-1 
                                font-poppins 
                                font-semibold 
                                ss:text-[72px] 
                                text-[52px]
                                text-white 
                                ss:leading-[100px]
                                leading-[75px]`}>
                  The Next <br className={`sm:block hidden`}/> {" "}
                              <span className="text-gradient 
                              bg-gradient-to-r
                              from-blue-500
                              via-purple-500
                              to-pink-500 
                              bg-clip-text 
                              text-transparent">
                Genaration         <br/></span> {" "}
                Payment Method.
                </h1>
                              <div className="ss:flex hidden md:mr-4 mr-0">
                                <GetStarter/> 
                              </div>
          
         
                      


          </div>

                                                  
                                                  
                                                  
                                                  
                                                  
                                                  
                                                  
                                                  <div>
                                                    <h6 className={`flex flex-row justify-between item-center text-[13px] text-white  `}>
                                                      
                                                      Our team of experts uses a methodology to identify <br/>
                                                      the credit cards most likely to fit your needs. <br/>
                                                      We examine annual percentage rates, annual fees.
                                                    
                                                    </h6>
                                                  </div>

    </div>

    </section>
    )
}

export default Hero