import React from 'react';
import foot from './foot.png'
import zuri from './zuri.png'
import './styles.css'

const Footer=()=>

<div  className='footer' >
<img src={zuri} alt='zuri' style={{width: '25%', height: 35}} className='iamgesTwo'/>
<h2 style={{fontSize: '120%', color: 'gray'}}> HNG Internship 9 Frontend Task </h2>
<img src={foot} alt='foot' style={{width: '25%', height: 35 }} classeName='imagesThree'/>
</div>


export default Footer;