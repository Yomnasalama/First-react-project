export default function Contact() {

  return (
    <>
     <div className="pt-3 conatiner text-center margin-top">
      <h2 className="text-uppercase mb-3 fs-1 fw-bolder">conatct section</h2>
      <div className="d-flex align-items-center justify-content-center mb-3">
        <div  className="line me-3 contact-lines"></div>
        <i className="fa fa-star"></i>
        <div  className="line ms-3 contact-lines"></div>
      </div>
     </div>
      <form className="w-50 mx-auto mt-5 mb-5">
        <div className="mb-3">
          <label for="exampleInputUserName" className="form-label">User Name</label>
          <input type="text" className="form-control" id="exampleInputUserName"/>
        </div>
        <div className="mb-3">
          <label for="exampleInputUserAge" className="form-label">User Age</label>
          <input type="number" className="form-control" id="exampleInputUserAge"/>
        </div>
        <div className="mb-3">
          <label for="exampleInputUserEmail" class="form-label">User Email</label>
          <input type="email" class="form-control" id="exampleInputUserEmail"/>
        </div>
        <div className="mb-3">
          <label for="exampleUserPassword" class="form-label">User Password</label>
          <input type="password" class="form-control" id="exampleUserPassword" />
        </div>
        <button type="submit" className="btn btn-primary about">Send Message</button>
      </form>

    </>
  )
}
