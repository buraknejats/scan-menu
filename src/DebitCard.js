import React from 'react'

function DebitCard() {
  return (
    <div className='cardGroup '> 
    <img  src='https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2FVisaLogo.png?alt=media&token=d6cac80d-a066-4388-97c2-9a57acfe4266' alt="" className='card-logo'/>
    <img  src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fchip.png?alt=media&token=401162f6-2dd2-4da4-bef7-6479c132789c"
    alt="" className='card-chip'/>


    <div className='card-number'>1234 123 4131 3210 </div>
    <div className='card-name'>Burak Nejat Songüler</div>
    <div className='card-date'>10/21</div>
    <div className='card-cvv'>CVV:792</div>

    </div>
  )
}

export default DebitCard