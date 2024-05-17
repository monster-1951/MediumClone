import React ,{useState,useRef,useEffect}from 'react'
import ForYou from './ForYou'
import StaffPicks from './StaffPicks'

const Body = () => {
  const StfpcksRef = useRef()
  let height ;

  useEffect(() => {
    height = StfpcksRef.current.clientHeight + "px"
    console.log(height)
  })
  
    // const [blogs, setblogs] = useState([]);
    // setblogs([{}])
  return (
    <>
    <div className={`lg:flex`}>
    <div className={`lg:w-3/5 overflow-y-auto `}><ForYou/></div>
    <div className='lg:w-2/5 sticky top-0 h-full -z-10' ref={StfpcksRef}><StaffPicks/></div>
    </div>
    </>
  )
}

export default Body