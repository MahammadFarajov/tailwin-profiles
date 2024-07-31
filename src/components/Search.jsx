import Container from './Container'

const Search = ( {submitHandler} ) => {
  return (
    <Container>
        <form onSubmit={submitHandler} className="flex gap-3 mt-[25px] justify-center items-center">
            <input type="text"  placeholder='Search Github Users...' className='py-[6px] px-[14px] w-full text-black focus-visible:outline-none border-[black]'/>
            <button type='submit' className='bg-black text-white cursor-pointer '>Submit</button>
        </form>
    </Container>
  )
}

export default Search