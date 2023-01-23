import React from 'react'

const Page2 = () => {
  return (
    <div>
    <h1>Welcome To Page 2</h1>
      
    <nav aria-label="Page navigation example">
  <ul className="pagination justify-content-center">
    <li className="page-item enable">
      <a className="page-link" href="Page1" tabindex="-1" aria-disabled="true">Previous</a>
    </li>
    <li className="page-item"><a className="page-link" href="age1">1</a></li>
    <li className="page-item"><a className="page-link" href="Page2">2</a></li>
    <li className="page-item"><a className="page-link" href="Page3">3</a></li>
    <li className="page-item">
      <a className="page-link" href="Page3">Next</a>
    </li>
  </ul>
</nav>
<p className="text-center">  <a target="_blank" href="/">  Movies World™</a> </p>
                  
<p className="text-center"> <a href="/">Terms of Use</a></p>
              
       
<p className="text-center"> <a href="/">Privacy Policy</a></p>


    </div>
  )
}

export default Page2;
