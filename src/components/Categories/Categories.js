import React from 'react';
import './Categories.css';

const Categories = () => {
    return (
        <div>
              <div className="d-flex justify-content-center align-items-center mt-5"> 
                    <button className="btn btn-dark">
                        <small>OUR CATEGORIES</small>
                    </button>
               </div>

               <div className="d-flex justify-content-center mt-3"> 
                   <span className="text text-center"><span style={{fontWeight:700,fontSize:'25px'}}>Finding Best Products Now<br/> in Your Fingertips</span></span> 
               </div>


               <div className='container'>
                
                    <div className="row mt-2 g-4">
                            <div className="col-md-3">
                                <div className="card p-1">
                                    <div className="d-flex justify-content-between align-items-center p-2">
                                        <div className="flex-column lh-1 imagename"> <span>MobilePhones</span> </div>
                                        <div> <img src="https://i.imgur.com/b9zkoz0.jpg" height="100" width="100" alt="" /> </div>
                                    </div>
                                </div>
                     </div>


                    <div className="col-md-3">
                        <div className="card p-2">
                            <div className="d-flex justify-content-between align-items-center p-2">
                                <div className="flex-column lh-1 imagename"> <span>Toys</span> </div>
                                <div> <img src="https://i.ibb.co/vBkP0zS/doll3.png" height="95" width="100" alt="" /> </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-md-3">
                        <div className="card p-2">
                            <div className="d-flex justify-content-between align-items-center p-2">
                                <div className="flex-column lh-1 imagename"> <span>Bag</span> </div>
                                <div> <img src=" https://iili.io/HROrmOv.md.jpg" height="95" width="100" alt="" /> </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-md-3">
                        <div className="card p-2">
                            <div className="d-flex justify-content-between align-items-center p-2">
                                <div className="flex-column lh-1 imagename"> <span>Books</span> </div>
                                <div> <img src="https://iili.io/HRO6MZl.md.png" height="95" width="100" alt="" /> </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card p-2tr5">
                            <div className="d-flex justify-content-between align-items-center p-2">
                                <div className="flex-column lh-1 imagename"> <span>Home decoration</span> </div>
                                <div> <img src="https://iili.io/HROZTjs.md.png" height="112" width="100" alt=""/> </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card p-2">
                            <div className="d-flex justify-content-between align-items-center p-2">
                                <div className="flex-column lh-1 imagename"> <span>Electronic Tools</span> </div>
                                <div> <img src="https://iili.io/HRObuZg.md.png" height="100" width="100" alt="" /> </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card p-2">
                            <div className="d-flex justify-content-between align-items-center p-2">
                                <div className="flex-column lh-1 imagename"> <span>Home appliance</span> </div>
                                <div> <img src="https://iili.io/HROmrbt.md.jpg" height="100" width="100" alt="" /> </div>
                            </div>
                        </div>
                   </div>

                    <div className="col-md-3 mb-5">
                        <div className="card p-2">
                            <div className="d-flex justify-content-between align-items-center p-2">
                                <div className="flex-column lh-1 imagename"> <span>Laptops</span> </div>
                                <div> <img src="https://i.imgur.com/6pK5oZl.jpg" height="100" width="100" alt="" /> </div>
                            </div>
                        </div>
                    </div>
    
    
         </div>
         </div>
         </div>
      
    );
};

export default Categories;