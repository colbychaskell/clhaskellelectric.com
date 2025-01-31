import Link from 'next/link'

import './Hero.css'

const Hero = () => {
  return (
    <div className='flex flex-row hero g-0' >
      <div className='px-4 px-md-5 hero-text h-100'>
        <h1 className='mt-5'>C.L. Haskell & Son Inc.</h1>
        <h1 className='mb-5'>Licensed Electricians</h1>
        {/* <h1 className='my-5'>Licensed Electricians in Stonington, ME</h1> */}
        <p>Our team of electricians has been serving Stonington and the neighboring towns since 1983. We offer a wide range of services to meet all of your electrical needs.</p>
        <p>Feel free to call with any questions!</p>
        <p className='my-5'>Open Monday - Friday: 7:00am - 4:00pm</p>

        <div className='my-5'>
          <button href='tel:207-367-2715' className='my-2 btn-lg btn-cta'>Call Us: 207-367-2715</button>
          <p className='p-0 mt-3 mb-5'>View our <Link href="/contact">contact page</Link> for office and mailing information</p>
        </div>
      </div>
    </div>
  )
}

export default Hero
