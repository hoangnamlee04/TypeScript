import { useState, useEffect } from 'react'

const images = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVu3qOtx9ay45kwKZqPi7aVN7Bz0wBKyeT2M3lN3I_VfrytJQTSsYv8sRGgBEVsl4aj0E&usqp=CAUhttps://www.google.com/imgres?q=banner%20adidas&imgurl=https%3A%2F%2Fdosi-in.com%2Fimages%2Ffacebook_brand%2F136%2Fdosiin-d0b65c5c53657f897af6862c44d8a5e2136526.jpg&imgrefurl=https%3A%2F%2Fdosi-in.com%2Fadidas-b.563%2F&docid=xEpyQxN6GYy9_M&tbnid=J7i4P6V_f65EVM&vet=12ahUKEwjh_NWP-pqFAxXkoK8BHTRnBWwQM3oECGMQAA..i&w=1280&h=600&hcb=2&ved=2ahUKEwjh_NWP-pqFAxXkoK8BHTRnBWwQM3oECGMQAA',
  'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/63b0a657792295.59e4652eb2e41.jpg',
  'data:image/jpeg;base64,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',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVkwcbixBsjBwxCurWTDEYuRDorI4sH5JxPA&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxJ4Xjo5xyhCwYRNNIdrgutbmrpstH_fOA0g&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5EJQuyJIVwYyaubfGjncYr3bE0BOgSPhjeQ&s'
]

const Banner = () => {
  const [currentImage, setCurrentImage] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1))
    }, 3500)

    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1))
  }

  const prevSlide = () => {
    setCurrentImage((prevImage) => (prevImage === 0 ? images.length - 1 : prevImage - 1))
  }

  return (
    <div>
      <div className='slide relative'>
        <img className='h-[400px] w-[1450px]' src={images[currentImage]} alt={`Slide ${currentImage + 1}`} />

        <div className='btn-slide flex justify-between min-w-full absolute top-2/4'>
          <div className='prev ml-4' onClick={prevSlide}>
            <i className='fa-solid fa-angle-left'></i>
          </div>

          <div className='next mr-4' onClick={nextSlide}>
            <i className='fa-solid fa-angle-right'></i>
          </div>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default Banner
