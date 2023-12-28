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
Meu nome é Yukari, tenho 25 anos e atualmente moro no Japão!! E sou adoradora de Unicórnio.
Na maior parte do tempo jogamos Valorant e sou main Killjoy (na verdade eu tento). Mas jogamos outros jogos nesta live também!
Sou uma jogadora noob, mas jogo por diversão e gosto da sua companhia!
Vem se aventurar e se divertir comigo!
A Live e Bagunnçada, mas é de coração S2
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
                        <a href="https://amzn.to/3tjjRCd" target="_blank" rel="noreferrer" className={styles.product}><li>Processador: I5 6600;</li></a>
                        <a href="https://amzn.to/3NCjwkI" target="_blank" rel="noreferrer" className={styles.product}><li>Placa mãe: Gigabyte H110M-S2V-CF</li></a>
                        <a href="https://amzn.to/3vig5cz" target="_blank" rel="noreferrer"className={styles.product}><li>Placa de vídeo: GTX 750;</li></a>
                        <a href="https://amzn.to/3GTzhjC" target="_blank" rel="noreferrer"className={styles.product}><li>Memória RAM:  12GB;</li></a>
                        <a href="https://amzn.to/48q03Mf" target="_blank" rel="noreferrer"className={styles.product}><li>Armazenamento: SSD 120GB & HDD 500GB;</li></a>
                        <a href="https://amzn.to/3Rw21E4" target="_blank" rel="noreferrer"className={styles.product}><li>Fonte: 500W;</li></a>
                        <a href="https://amzn.to/3RPFQKj" target="_blank" rel="noreferrer"className={styles.product}><li>Headset: HyperX Cloud Stinger S;</li></a>
                        <a href="https://amzn.to/3tCiiPA" target="_blank" rel="noreferrer"className={styles.product}><li>Teclado: Teclado semi mecânico</li></a>
                        <a href="https://amzn.to/3RRgYSp" target="_blank" rel="noreferrer"className={styles.product}><li>Mouse: M7 G Pro</li></a>
                    </ul>

                </section>
                </div>
                    <Doar/>

        </main>

    )
}