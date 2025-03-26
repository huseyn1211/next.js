import React from 'react'
import '../../styles/PinkBox.css'

const PinkBox = () => {
  return (
    <div className='pink-box'>
        <div className='gradient'>
            <div className='gradient-bold-parent'><b className='gradient-bold'>What Our Members Say?</b></div>
            <div className='star-box'>
                <div className='star-box-child'>
                    <div>-------icon------</div>
                    <div> “Gayet güzel ve seviyeli, basit ve kullanımı kolay bir uygulama, sahte kişi yok diyebilirim.”</div>
                    <div className='little-img'>
                   <img className='img1' src='ayse.png'></img> Ayşe Coşkunerler</div>
                </div>
                <div  className='star-box-child'>
                    <div>-----icon-----</div>
                    <div> “Aradığınız kişiyi bulabileceğiniz bir site. Özenle hazırlanmış ve kullanışlı”</div>
                    <div className='little-img'>
                    <img className='img1' style={{borderRadius :'20px'}} src='yagmur.png'></img>Yağmur Kaya</div>
                    </div>
                <div  className='star-box-child'>
                 <div>-----icon</div>
                <div> “Güzel bir uygulama tamamen gerçeği yansıtıyor. Teması da güzel tavsiye ederim.”</div>
                <div className='little-img'> <img className='img1' src='yeliz.png'></img>Yeliz Ece</div>
                </div>
            </div>
            <div className='phone-box'>
            <a href='https://play.google.com/store/apps/details?id=com.gonuldensevenler.evlilik' target='blank' className='img-pink-box'> <img style={{cursor:'pointer'}} src='astore.png'></img> </a>
            <a href='https://apps.apple.com/tr/app/g%C3%B6n%C3%BClden-sevenler-evlilik/id997270377' target='blank' className='img-pink-box'><img style={{cursor:'pointer'}} src='gplay.png'></img></a>
            </div>
        </div>
      
    </div>
  )
}

export default PinkBox
