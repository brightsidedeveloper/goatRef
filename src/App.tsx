import clsx from 'clsx'
import { useCallback, useRef } from 'react'

export default function App() {
  const ref = useRef<HTMLInputElement>(null)
  const toggle = useCallback(() => {
    ref.current?.click()
  }, [])

  return (
    <div className='group'>
      GOAT REF
      <button onClick={toggle}>Toggle</button>
      <input ref={ref} type='checkbox' className='hidden' />
      {[...new Array(50000)].map((_, i) => (
        <Ez key={i} />
      ))}
    </div>
  )
}

function Ez() {
  return <div className={clsx(['bg-red-500', 'group-has-[input:checked]:bg-blue-500'])}>Ez</div>
}
