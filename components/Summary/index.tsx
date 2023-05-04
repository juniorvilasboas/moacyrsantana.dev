import Language from 'components/Language'
import Techs from '../Skills/index'
import SummaryItem from './SummaryItem'

const itens = [
  {
    title: 'Fullstack Developer'
  },
  {
    title: 'Software Engineer'
  }
]

const Summary = () => {
  return (
    <div className='rounded-xl bg-white shadow-lg mx-auto py-12'>
      <h3 className='text-dourado text-xl md:text-2xl font-bold text-center uppercase mt-16 mb-5 hover:underline'>
        What I do
      </h3>
      <div className='md:grid lg:grid-cols-2 bg-white mx-auto divide-y lg:divide-y-0 px-2 lg:px-6'>
        <Techs />
        <div className='mt-6 lg:mt-2 -ml-2'>
          {itens.map((item, i) => (
            <SummaryItem key={i} item={item} />
          ))}
          <br />
          <Language />
        </div>
      </div>
    </div>
  )
}

export default Summary
