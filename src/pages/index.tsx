import type { NextPage } from 'next'
import { Header } from '../components/Header';
import Tilt from 'react-parallax-tilt';

const Home: NextPage = () => {
  return (
    <div className='max-w-7xl mx-auto h-screen'>
      <Header />

      <div className='flex items-center mx-20 h-[calc(100%_-_5rem)] gap-20'>
        <section className='flex flex-col gap-8 max-w-lg'>
          <img src="/spidey.svg" alt="Spider Man logo" />
          <p>Spider-Man é um jogo eletrônico de ação-aventura em mundo aberto que se passa em Manhattan, dentro de uma versão ficcional da cidade de Nova Iorque. É apresentado em uma perspectiva em terceira pessoa que mostra o personagem do jogador e permite que a câmera rode livremente ao seu redor.</p>
          <div className='flex gap-6'>
            <button className='w-full font-medium p-4 bg-spider-red text-white rounded-lg hover:bg-spider-dark-red transition duration-150 ease-out hover:ease-in'>Buy tickets</button>
            <button className='w-full font-medium p-4 border-solid border-2 border-spider-red rounded-lg hover:bg-spider-red hover:text-white transition duration-150 ease-out hover:ease-in'>Watch trailer</button>
          </div>
        </section>

        <div style={{"backgroundSize": "100%"}} className='flex items-center justify-center w-full h-full bg-spidey-logo bg-contain bg-no-repeat bg-center'>
          <Tilt transitionSpeed={600} tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable={false} glareMaxOpacity={0.1}>
            <img src="/spider-man.svg" alt="Spider man" className='w-96 min-w-full h-96' />
          </Tilt>
        </div>
      </div>

    </div>
  )
}

export default Home
