import {FC, InputHTMLAttributes} from 'react'

type P = {} & InputHTMLAttributes<HTMLInputElement>

const Input:FC<P> =({ ...rest })=>{
  return <input {...rest} className='border rounded-md p-1 ' />
}
export default Input;