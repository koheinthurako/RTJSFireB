import React from 'react'
import './index.css'
import ReactDOM from 'react-dom';

// ReactDOM ဆိုတာက Modal Component ကို Portal နဲ့ ပြန်လည်ပြင်ဆင်ထားတာဖြစ်ပါတယ်။

// React မှာ ပါလာတဲ့ Default Props ဖြစ်တဲ့ Children Props ကိုသုံးပြီးတော့ Modal Component ကို ပြန်လည်ပြင်ဆင်ထားတာဖြစ်ပါတယ်။

export default function Modal({ children }) {
  return (
    ReactDOM.createPortal(  
      <div className="modal-backdrop">
        <div className="modal">
          <div className="modal-header">
            {/* <h3>Zoom Class is available now.</h3> */}
              {children}
          </div>
          <div className="modal-body">
            {/* <p>Feel free to ask here.</p> */}
          </div>
          <div className="modal-footer">
            {/* <p>Thank you</p> */}
          </div>
        </div>
      </div>
    ), document.getElementById("modal")
  )
}
