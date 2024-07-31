import Container from "./Container"

const Navbar = () => {
  return (
    <Container>
        <div className=' flex gap-1 py-[20px] border-b-[#e7e7e9]'>
            <h1 className='text-[24px] '>github</h1> <p className='text-[24px] text-[#cbcbce]'>profiles</p>
        </div>
    </Container>
  )
}

export default Navbar