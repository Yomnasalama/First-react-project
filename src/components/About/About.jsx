import { useState } from 'react'

export default function About() {
  // const [count, setCount] = useState(0)

  return (
    <>
        <div className="about text-white d-flex justify-content-center align-items-center vh-100">
            <div >
                <div className="text-center pt-4">
                    <h2  className="text-uppercase mb-3 fs-1 fw-bolder">about component</h2>
                    <div className="d-flex align-items-center justify-content-center mb-3">
                        <div className="line me-3 lines"> 
                        </div>
                        <i className="fa fa-star"></i>
                        <div className="line ms-3 lines"></div>
                    </div>
                </div>
                <div className='container'>
                    <div className='row px-5'>
                        <div className='col-md-6 ps-md-5'>
                            <div>
                                <p>
                                Freelancer is a free bootstrap theme created by Route.The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization. 
                                </p>
                            </div>
                        </div>
                        <div className='col-md-6 ps-md-5'>
                            <div>
                                <p>
                                Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
