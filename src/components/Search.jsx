import Container from './Container'

const Search = ( {submitHandler, onChangeHandler, username} ) => {
  return (
    <Container>
        <form onSubmit={submitHandler} className="flex gap-3 mt-[25px] justify-center items-center">
            <input type="text" value={username} onChange={onChangeHandler} placeholder='Search Github Users...' className='py-[6px] px-[14px] w-full rounded-lg focus-visible:outline-none border-black'/>
            <button type='submit' className='bg-black text-white cursor-pointer py-[9px] rounded-lg px-[14px]'>Submit</button>
        </form>
    </Container>
  )
}

export default Search