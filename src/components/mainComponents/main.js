import imageLogo from "../../img/logo.png"
import styles from'./main.module.css'
import imginsta from '../../img/instagram.svg'
import imgtt from '../../img/twitter.svg'
import imgtik from '../../img/tik-tok.svg'
import Doar from "../components independent/doar"

import sobreMim from '../../img/sobre.png'
import setupLogo from '../../img/setup.png'

export default function Main(){
   
    return(
        <main>
                 
                <img src={sobreMim} alt="setup" className={styles.about} id="about"/>
                   <section className={styles.aboutChanel}>
                    
            <h3 className={styles.description}>
            Sejam bem vindos Amoris :3
Meu nome é Yukari, tenho 26 anos e atualmente moro no Japão!! E sou adoradora de Unicórnio.
Na maior parte do tempo jogamos Valorant e sou main Killjoy (na verdade eu tento). Mas jogamos outros jogos nesta live também!
Sou uma jogadora noob, mas jogo por diversão e gosto da sua companhia!
Vem se aventurar e se divertir comigo!
A Live e Bagunçada, mas é de coração S2
            </h3>
           
           
           <figure>
           <img src={imageLogo} alt="Logo" className={styles.logo}/>
            
            </figure>
            </section>
            
           
             <div className={styles.groupSection}>
                <section>
           
                    <h2 className={styles.redesTitle} id="redes">Minhas Redes Sociais</h2>
                    <a href="https://twitter.com/yukarichanzinha" target="_blank" rel="noreferrer" className={styles.rede}> <img src={imgtt} alt="twitter"/> @yukarichanzinha</a> <br></br>
                    <a href="https://www.instagram.com/yukarichanzinha/" target="_blank" rel="noreferrer" className={styles.rede} > <img src={imginsta} alt="instagram"/> @yukarichanzinha </a> <br></br>
                    <a href="https://www.tiktok.com/@yukarichanzinha" target="_blank" rel="noreferrer" className={styles.rede}> <img src={imgtik} alt="tik tok"/> @yukarichanzinha </a> <br></br>
       
                </section>
                <section className={styles.setup}>
                <img src={setupLogo} alt="setup" className={styles.setupTitle} id="setup"/>
                    
                 
                    <ul>
                       <li className={styles.product}>Processador: intel corei5-12400F - Frequency: Base 2.5Ghz Boost 4.4Ghz;</li>
                        <li className={styles.product}>Placa mãe:  intel LGA1700 Micro-ATX</li>
                        <li className={styles.product}>Placa de vídeo: Nvidia GeForce RTX 3050 8GB;</li>
                        <li className={styles.product}>Memória RAM: RGB 16GB (8GB x 2) DDR4-2666MHz;</li>
                        <li className={styles.product}>Armazenamento: 1TB (NVMe) + 2TB Hard Disk;</li>
                        <li className={styles.product}>Fonte: 650W 80PLUS BRONZE certified;</li>

                        <li className={styles.product}>Câmera: Logitech C920 PRO HD</li>
                        <li className={styles.product}>Microfone: HyperX QuadCast </li>
                        <li className={styles.product}>Headset: Logicool G933s Gaming Wireless;</li>
                        <li className={styles.product}>Teclado: Koolertron AE=AMAG50 Mini Blue Ligth;</li>
                        <li className={styles.product}>Mouse: Razer Viper Ultimate Wireless;</li>
                        <li className={styles.product}>Mouse Pad: Logicool G240f Gaming</li>
                        <li className={styles.product}>Console: Nintendo Switch</li>
                    </ul>
             
                </section>
                </div>
                    <Doar/>
                    
        </main>

    )
}