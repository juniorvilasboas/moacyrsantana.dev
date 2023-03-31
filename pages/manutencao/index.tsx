const Manutencao = () => {
  return (
    <>
      <div className='flex flex-col text-center items-center justify-center'>
        <img src='/Logo_long.png' className='w-1/2 md:w-1/3 lg:w-1/4 mb-8' />
        <p className='text-md lg:text-xl mb-8'>SITE EM MANUTENÇÃO</p>
        <p className='text-md lg:text-xl mb-8'>
          Nosso site está em manutenção, estamos trabalhando muito para lhe
          entregar a melhor experiência com este.
        </p>
        <ul className='flex'>
          <li className='mr-4'>
            <a
              href='https://www.instagram.com/moacyr.santana'
              target='_blank'
              rel='noreferrer'
            >
              <img
                title='instagram'
                className='w-6 md:w-8 lg:w-10'
                src='/images/instagram.png'
              />
            </a>
          </li>
          <li className='mr-4'>
            <a
              href='https://twitter.com/Santana_Sud'
              target='_blank'
              rel='noreferrer'
            >
              <img
                title='twitter'
                className='w-6 md:w-8 lg:w-10'
                src='/images/twitter.png'
              />
            </a>
          </li>
          <li className='mr-4'>
            <a
              href='https://www.facebook.com/junior.vilasboas'
              target='_blank'
              rel='noreferrer'
            >
              <img
                title='facebook'
                className='w-6 md:w-8 lg:w-10'
                src='/images/facebook.png'
              />
            </a>
          </li>
          <li className='mr-4'>
            <a
              href='https://github.com/juniorvilasboas'
              target='_blank'
              rel='noreferrer'
            >
              <img
                title='github'
                className='w-6 md:w-8 lg:w-10'
                src='/images/github.png'
              />
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Manutencao
