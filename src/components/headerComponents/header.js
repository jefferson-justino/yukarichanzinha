import imageLogo from "../../img/logo.png"
import styles from'./header.module.css'
import '../mainComponents/main'
function Header() {
    return (
        <header >
            <section >
                <img src={imageLogo} alt="LogoImagem" className={styles.image}/>
                <h1 className={styles.title}>YUKARICHANZINHA</h1>
            </section>

            <nav> 
                <ul className={styles.list}>
                    <a href="#about"   > <li className={styles.option}>SOBRE</li></a>
                    <a href="#redes"  > <li className={styles.option}>REDES SOCIAIS</li></a>
                    <a href="#setup"   > <li className={styles.option}>SETUP</li></a>
                    <a href="#support"  > <li className={styles.option}>APOIAR</li></a>
                </ul> 
            </nav>

          
        </header>
      
    );
  }
  
  export default Header;