import { useState } from 'react'
import firstImg from '../../assets/poert1.png'
import secondImg from '../../assets/port2.png'
import thirdImg from '../../assets/port3.png'

export default function PortFolio() {
  // const [count, setCount] = useState(0)

  return (
    <>
     <div className="pt-3 conatiner text-center margin-top">
      <h2 className="text-uppercase mb-3 fs-1 fw-bolder">PortFolio COMPONENT</h2>
      <div className="d-flex align-items-center justify-content-center mb-3">
        <div  className="line me-3 contact-lines"></div>
        <i className="fa fa-star"></i>
        <div  className="line ms-3 contact-lines"></div>
      </div>
     </div>
        <div className='container m-5'>
            <div className='row'>
                <div className='col-lg-4 col-md-6'>
                    <div>
                        <img alt="home" class="w-100 rounded-3" src={firstImg} />
                    </div>

                </div>
                <div className='col-lg-4 col-md-6'>
                    <div>
                        <img alt="home" class="w-100 rounded-3" src={secondImg} />
                    </div>

                </div>
                <div className='col-lg-4 col-md-6'>
                    <div>
                        <img alt="home" class="w-100 rounded-3" src={thirdImg} />
                    </div>

                </div>
                <div className='col-lg-4 col-md-6 mt-4'>
                    <div>
                        <img alt="home" class="w-100 rounded-3" src={firstImg} />
                    </div>

                </div>
                <div className='col-lg-4 col-md-6 mt-4'>
                    <div>
                        <img alt="home" class="w-100 rounded-3" src={secondImg} />
                    </div>

                </div>
                <div className='col-lg-4 col-md-6 mt-4'>
                    <div>
                        <img alt="home" class="w-100 rounded-3" src={thirdImg} />
                    </div>

                </div>
        </div>
     </div>
    </>
  )
}

{/* <div  class="row g-5"><div  class="col-lg-4 col-md-6"><div  class="rounded-3 overflow-hidden position-relative"><img  alt="" class="w-100 rounded-3" src="assets/images/poert1.png"><div  class="layer__ position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center"><i  class="text-white fa-solid fa-plus fa-6x"></i></div></div></div><div  class="col-lg-4 col-md-6"><div  class="rounded-3 overflow-hidden position-relative"><img  alt="" class="w-100 rounded-3" src="assets/images/port2.png"><div  class="layer__ position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center"><i  class="text-white fa-solid fa-plus fa-6x"></i></div></div></div><div  class="col-lg-4 col-md-6"><div  class="rounded-3 overflow-hidden position-relative"><img  alt="" class="w-100 rounded-3" src="assets/images/port3.png"><div  class="layer__ position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center"><i  class="text-white fa-solid fa-plus fa-6x"></i></div></div></div><div  class="col-lg-4 col-md-6"><div  class="rounded-3 overflow-hidden position-relative"><img  alt="" class="w-100 rounded-3" src="assets/images/poert1.png"><div  class="layer__ position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center"><i  class="text-white fa-solid fa-plus fa-6x"></i></div></div></div><div  class="col-lg-4 col-md-6"><div  class="rounded-3 overflow-hidden position-relative"><img  alt="" class="w-100 rounded-3" src="assets/images/port2.png"><div  class="layer__ position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center"><i  class="text-white fa-solid fa-plus fa-6x"></i></div></div></div><div  class="col-lg-4 col-md-6"><div  class="rounded-3 overflow-hidden position-relative"><img  alt="" class="w-100 rounded-3" src="assets/images/port3.png"><div  class="layer__ position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center"><i  class="text-white fa-solid fa-plus fa-6x"></i></div></div></div><!----></div> */}
