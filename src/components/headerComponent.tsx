import typeScriptSVG from '../assets/TypeScriptSvg.svg'
import heartSVG from '../assets/heartSvg.svg'

export const ToDoHeader = () => {
  return (
    <section className='pb-4 border-b-2'>
      <div className='flex items-center justify-between'>
        <p className='text-3xl font-semibold'>TS DO</p>
        <picture className='flex gap-2'>
          <img className='w-16 h-16' src={typeScriptSVG} alt='TypeScript' />
          <img className='w-16 h-16' src={heartSVG} alt='Mua' />
        </picture>
      </div>
    </section>
  )
}
