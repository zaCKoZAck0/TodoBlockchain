
import { Sun } from 'lucide-react'
import { useState } from 'react';


const DarkLightSwitch = () => {
  const [state, setState] = useState(true);
  return <label className="relative flex justify-between ml-0 items-center group p-2 pl-0 text-xl">
  <input type="checkbox" checked={state} onChange={()=>setState(!state)} className="absolute left-1/2 -translate-x-1/2 w-full h-full peer appearance-none rounded-md" />
  <svg className='absolute left-[25%]' width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.8865 9.84177C13.3801 9.96772 12.8738 10.0307 12.3674 10.0307C9.2028 10.0307 6.67108 7.51154 6.67108 4.3626C6.67108 3.85877 6.73438 3.35493 6.86096 2.8511C6.92425 2.66217 6.86096 2.41025 6.67108 2.22131C6.4812 2.03238 6.29133 1.9694 6.03816 2.03238C3.06339 2.91408 0.974731 5.68515 0.974731 8.77112C0.974731 12.6128 4.07608 15.6988 7.93694 15.6988C11.0383 15.6988 13.8232 13.6205 14.646 10.5975C14.7093 10.4086 14.646 10.1567 14.4561 9.96772C14.3295 9.84177 14.0763 9.77879 13.8865 9.84177Z" fill="#808191"/>
<path d="M9.20287 3.10368H9.8358V3.73347C9.8358 4.11134 10.089 4.36326 10.4687 4.36326C10.8485 4.36326 11.1017 4.11134 11.1017 3.73347V3.10368H11.7346C12.1143 3.10368 12.3675 2.85176 12.3675 2.47389C12.3675 2.09601 12.1143 1.8441 11.7346 1.8441H11.1017V1.21431C11.1017 0.836434 10.8485 0.584518 10.4687 0.584518C10.089 0.584518 9.8358 0.836434 9.8358 1.21431V1.8441H9.20287C8.82312 1.8441 8.56995 2.09601 8.56995 2.47389C8.56995 2.85176 8.82312 3.10368 9.20287 3.10368Z" fill="#808191"/>
<path d="M15.5329 5.62216H14.9V4.99237C14.9 4.6145 14.6468 4.36258 14.2671 4.36258C13.8873 4.36258 13.6341 4.6145 13.6341 4.99237V5.62216H13.0012C12.6215 5.62216 12.3683 5.87407 12.3683 6.25195C12.3683 6.62982 12.6215 6.88174 13.0012 6.88174H13.6341V7.51153C13.6341 7.8894 13.8873 8.14132 14.2671 8.14132C14.6468 8.14132 14.9 7.8894 14.9 7.51153V6.88174H15.5329C15.9127 6.88174 16.1659 6.62982 16.1659 6.25195C16.1659 5.87407 15.9127 5.62216 15.5329 5.62216Z" fill="#808191"/>
</svg>
  <span className="after:z-10 w-[58px] h-[26px] flex items-center flex-shrink-0 ml-4 p-1 bg-gray-300 rounded-full duration-300 ease-in-out peer-checked:bg-btnGray after:w-[19px] after:h-[19px] after:bg-blue-500 after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-8 group-hover:after:translate-x-0 bg-white"></span>
<Sun size={16} fill='yellow' stroke='#808191' className='absolute left-[67%]'/>
</label>
}

export default DarkLightSwitch