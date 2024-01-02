import './doar.css'
import logoDoar from '../../img/doar.png'
export default function Doar(){
    return(
        <section >
            
            <img src={logoDoar} alt="doar" className='support' id='support'/>
          
            <p>Apoiar o canal é uma forma de carinho e garante que continuemos trazendo conteúdos novos 
                para vocês, mas lembre-se, nem todo apoio envolve dinheiro, o simples fato de você acompanhar
                as lives é o maior apoio que nós criadores de conteúdo podemos receber.
                
            </p>
<div className='content'>
            <div className='cardSupport'>
                <h2 className='titleCard' >Apoie o canal diretamente</h2>
                <p> Apoios diretos nos ajudam a investir em equipamentos novos e até comprar novos jogos
                    para criar conteúdo, fique à vontade :')
                </p>
                <a href="https://streamlabs.com/yukarichanzinha/tip" target="_blank" rel="noreferrer">
                   <div className='bot'><h1>DOAR</h1> </div>
                </a>
               
            </div>
            <div className='cardSupport' >
            <h2 className='titleCard'>Apoie o canal indiretamente</h2>
            <p> Apoios indiretos nos ajudam a crescer na plataforma e criar uma comunidade engajada, além de dar 
                    motivação extra para criar conteúdo, fique à vontade :')
                </p>
                <a href="https://www.twitch.tv/yukarichanzinha" target="_blank" rel="noreferrer">
                   <div className='bot'><h1>VER CANAL</h1> </div>
                </a>
               
            </div>
</div>
        </section>
    )
}