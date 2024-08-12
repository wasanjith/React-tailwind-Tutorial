import styles from "./style";



const App =() =>(
  
   <div className= "bg-purple-900 w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
      Navbar
        </div>
      </div>

      <div className={`bg-green-600 ${styles.flexCenter} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          Hero
        </div>
      </div>

      <div className={`bg-orange-400 ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          Stats
        </div>
      </div>
   
   </div>
  
)

export default App
