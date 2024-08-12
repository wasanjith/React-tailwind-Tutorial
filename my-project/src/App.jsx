import styles from "./style";


import { Navbar,Biling,Busines,Button,CardDeal,Clients,CTA,FeedbackCard,GetStarter,Hero,Stats,Testimonials,Footer,} from './Components';


const App =() =>(
  
   <div className= "bg-purple-900 w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
      <Navbar/>
        </div>
      </div>

      <div className={`bg-green-600 ${styles.flexCenter} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>
        </div>
      </div>

      <div className={`bg-orange-400 ${styles.paddingX} ${styles.flexCenter}`}>
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

      <div className={`bg-purple-900 ${styles.flexCenter} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer/>
        </div>
      </div>
   
   </div>
  
)

export default App
