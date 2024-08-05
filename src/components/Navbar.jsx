import Container from "./Container"

const Navbar = () => {
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark")
  }
  return (
    <Container>
        <div className=' flex justify-between py-[20px] border-b-[#e7e7e9]'>
          <div className="flex gap-1 "><h1 className='text-[24px] capitalize'>github</h1> <p className='text-[24px] text-[#cbcbce] capitalize'>profiles</p></div>
          <button type='submit' className='bg-black text-white cursor-pointer py-[9px] rounded-lg px-[14px]'>Dark</button>
        </div>
    </Container>
  )
}

export default Navbar