import React, { useEffect } from 'react'
import Fotter from './Fotter'

const Hollywood = () => {
  useEffect(()=>{
    window.scroll(0,0)
    
      })
  return (
    <div>
    <div className="container my-3">
    <h2>Latest Hollywood Movies Updates</h2>
    <div className="row">
  <div className="col-md-4">
   <div className="card" style={{width: "18rem;"}}>
  <img src="coming-soon.webp" className="card-img-top" alt="..." />
  <div className="card-body">
  <h5 className="card-title"><p className="text-center"><strong>COMING UP 2023</strong></p></h5>
  <p className="card-text">Description: Watch Latest Movies and TV Series.</p>
  </div>
  
  <div className="card-body">
  <div className="row gy-5">
  <div className="col">
  <a href="/" className="btn btn-primary">Watch Movie</a>
  </div>
  
  
  </div> </div></div></div>
  <div className="col-md-4">
   <div className="card" style={{width: "18rem;"}}>
  <img src="darji-2022.webp" className="card-img-top" alt="..." />
  <div className="card-body">
  <h5 className="card-title"><p className="text-center"><strong>Darji 2022</strong></p></h5>
  <p className="card-text">Description: The Plot revolves around a gym trainer and all the female members in the gym.</p>
  </div>
  
  <div className="card-body">
  <div className="row gy-5">
  <div className="col">
  <a href="Modal" className="btn btn-primary">Watch Movie</a>
  </div>
  
  
  </div> </div></div></div>
  <div className="col-md-4">
   <div className="card" style={{width: "18rem;"}}>
  <img src="against-the-ice-2022.webp" className="card-img-top" alt="..." />
  <div className="card-body">
  <h5 className="card-title"><p className="text-center"><strong>Against The Ice 2022</strong></p></h5>
  <p className="card-text">Description: In 1909, two explorers fight to survive after they're left behind while on a Denmark expedition in ice-covered Greenland.</p>
  </div>
  
  <div className="card-body">
  <div className="row gy-5">
  <div className="col">
  <a href="Modal5" className="btn btn-primary">Watch Movie</a>
  </div>
  
  
  </div> </div></div></div>
  <div className="col-md-4">
   <div className="card" style={{width: "18rem;"}}>
  <img src="dhokha-2022.webp" className="card-img-top" alt="..." />
  <div className="card-body">
  <h5 className="card-title"><p className="text-center"><strong>Dhokha 2022</strong></p></h5>
  <p className="card-text">Description: When a housewife with a personality disorder is taken hostage by a terrorist on the loose and a husband accused of cheating on his wife.</p>
  </div>
  
  <div className="card-body">
  <div className="row gy-5">
  <div className="col">
  <a href="Modal3" className="btn btn-primary">Watch Movie</a>
  </div>
  
  </div> </div></div></div>
  <div className="col-md-4">
   <div className="card" style={{width: "18rem;"}}>
  <img src="freddy-2022.webp" className="card-img-top" alt="..." />
  <div className="card-body">
  <h5 className="card-title"><p className="text-center"><strong>Freddy 2022</strong></p></h5>
  <p className="card-text">Description: The lines between love and obsession blur in this romantic thriller packed with unpredictable twists and sharp turns.</p>
  </div>
  
  <div className="card-body">
  <div className="row gy-5">
  <div className="col">
  <a href="Modal2" className="btn btn-primary">Watch Movie</a>
  </div>
  
  
  </div> </div></div></div>
  <div className="col-md-4">
   <div className="card" style={{width: "18rem;"}}>
   <img src="kuttey-2023.webp" className="card-img-top" alt="..." />
  <div className="card-body">
  <h5 className="card-title"> <p className="text-center"><strong>Kuttey (2023)</strong></p></h5>
  <p className="card-text">Description: A van carrying crores of cash. One rainy night in the outskirts of Mumbai. Unaware of each other, three stray gangs cross paths on the hunt. </p>
  </div>
  
  <div className="card-body">
  <div className="row gy-5">
  <div className="col">
  <a href="Modal4" className="btn btn-primary">Watch Movie</a>
  </div>
  </div> </div></div>
  </div>
  </div></div>
  <Fotter/> 
    </div>
  )
}

export default Hollywood
