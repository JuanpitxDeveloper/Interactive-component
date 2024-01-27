import './App.css'
function App() {

  return (
    <main className=' w-[100vw] h-[100vh] bg-VeryDarkBlue items-center flex  justify-center'>
      <article className=' bg-DarkBlue rounded-lg w-[340px] h-[300px] flex justify-center flex-col'>
        <span className='rounded-full w-10 h-10 bg-VeryDarkBlue relative left-7 bottom-12 flex items-center justify-center'>
          <img src="/public/icon-star.svg" alt="star" className='' />
        </span>
        <h1 className='text-[#FAFAFA] font-[overpass] font-bold text-[25px] ml-5'>How did we do?</h1>
        <p className=' text-LightGrey  text-[15px] mx-[23px]'>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
      </article>
    </main>
  )
}

export default App
