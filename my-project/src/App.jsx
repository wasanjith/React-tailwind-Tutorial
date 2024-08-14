import styles from "./style";


import { Navbar,Biling,Busines,Button,CardDeal,Clients,CTA,FeedbackCard,GetStarter,Hero,Stats,Testimonials,Footer,} from './Components';


const App =() =>(
  
   <div className= "bg-black w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
      <Navbar/>
        </div>
      </div>

      <div className={`bg-black ${styles.flexCenter} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>
        </div>
      </div>

      <div className={`bg-black ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats/>
          <Busines/>
          <Biling/>
          <Testimonials/>
          <Clients/>
          <CTA/> 
          <Button/>
          <CardDeal/>
          <FeedbackCard/>
          <GetStarter/>
        </div>
      </div>

      <div className={`bg-black ${styles.flexCenter} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer/>
        </div>
      </div>
   
   </div>
  
)

export default App
