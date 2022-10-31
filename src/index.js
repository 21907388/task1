import React from 'react'
import ReactDOM from 'react-dom'
import {TfiShare} from 'react-icons/tfi'
import image from './profile.jpg'
import icone from './Icon.png'
import foot from './foot.png'
import vector from './vector.PNG'
import zuri from './zuri.png'

const btnStyles={
    width:'1152px',
    height : '76px',
    backgroundColor:'#EAECF0',
    padding: 10,
  border: 'none',
  borderRadius: 5,
  margin: 3,
 
 
    //display:'flex'
    
}
const linkStyles={
  alignItems: 'center',
  justifyContent: 'center',
  textAlign:'center'
}
const textStyle={
  fontFamily:'Verdana',
  fontSize:'18px',
  fontWeight:'500',
  fontStyle:'normal',
  color: '#101828'
}
const maintextStyle={
  fontFamily:'Verdana',
  fontSize:'18px',
  fontWeight:'700',
  fontStyle:'normal',
  color: '#101828',
  marginBottom: '50px'
}
const footStyle={
  display: 'flex',
  justifyContent: 'space-around',


}
const iconStyle={
  marginLeft: '80%',
  borderRadius: '50%',
  border: 'none',
  height: '40px',
  width: '40px',
  marginTop: '10px'
}

const Header=()=>(
  <div>
    <div>
      <button style={iconStyle} className='icon'>
<TfiShare/>
</button>
    </div>
<div style={linkStyles} classeName='divs'> 
<img src={image} alt='img' style={{width: 88, height: 88, borderRadius: 400/ 2}} className='image1'/>
 <p id="twitter" style={maintextStyle} className='maintext'>danmpinda82</p>
<noscript>Dan Mpinda</noscript>
</div>
</div>)

const Middle=()=>
<div style={linkStyles} flex='auto' classeName='divs'>
<a href='https://training.zuri.team/'target="_blank" rel="noreferrer" >
          <button style={btnStyles} id="btn__zuri" className='buttonMiddle'>
          <h2 style={textStyle} className='text'>Zuri Team</h2>
            </button>
        </a><p></p>
<a href='http://books.zuri.team'target="_blank" rel="noreferrer" >
          <button style={btnStyles} id="books" className='buttonMiddle'>
            <h2 style={textStyle} className='text'>Zuri Books</h2>
            </button>
        </a><p></p>
<a href='https://books.zuri.team/python-for-beginners?ref_id=<yourslackname>'target="_blank" rel="noreferrer" >
          <button style={btnStyles} id="book__python" className='buttonMiddle'>
          <h2 style={textStyle} className='text'>Python Books</h2>
            </button>
        </a><p></p>
<a href='https://background.zuri.team'target="_blank" rel="noreferrer" >
          <button style={btnStyles} id="pitch" className='buttonMiddle'>
          <h2 style={textStyle} className='text'>Bakground Check for Coders</h2>
            </button>
        </a><p></p>
<a href='https://books.zuri.team/design-rules'target="_blank" rel="noreferrer" >
          <button style={btnStyles} id="book__design" className='buttonMiddle'>
          <h2 style={textStyle} className='text'>Design Books</h2>
            </button>
        </a>
        <div style={{padding:35, marginBottom: 100}} className='divBottom'>
<img src={vector} alt='vector' style={{width: 24, height: 24,marginRight: 15}} classeName='imagesOne'/>
<img src={icone} alt='ic' style={{width: 24, height: 24, }} classeName='imagesOne'/>
        </div>
</div>

const Footer=()=>
<div style={footStyle} className='foot' >
<img src={zuri} alt='zuri' style={{width: 150, height: 50}} className='iamgesTwo'/>
<h2 style={{fontSize: 18, color: 'gray'}}> HNG Internship 9 Frontend Task </h2>
<img src={foot} alt='foot' style={{width: 150, height: 30, }} classeName='imagesThree'/>
</div>

const HexaColor=()=>(
  <div>
    <Header/>
    <Middle/>
    <Footer/>
  </div>
)
const rootElement = document.getElementById('root')

ReactDOM.render(<HexaColor/>, rootElement)
