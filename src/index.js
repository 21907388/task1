import React from 'react'
import ReactDOM from 'react-dom'
import {TfiShare} from 'react-icons/tfi'
import image from './profile.jpg'
import icone from './Icon.png'
import vector from './vector.PNG'
import Footer from './foot'


const btnStyles={
    width:'90%',
    height : '7%',
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
  fontSize:'15px',
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
          <h2 className='text'>Zuri Team</h2>
          
            </button>
        </a><p></p>
<a href='http://books.zuri.team'target="_blank" rel="noreferrer" >
          <button style={btnStyles} id="books" className='buttonMiddle'>
            <h2  className='text'>Zuri Books</h2>
            <h3 style={textStyle}> Find books about Design and Coding</h3>
            </button>
        </a><p></p>
<a href='https://books.zuri.team/python-for-beginners?ref_id=<yourslackname>'target="_blank" rel="noreferrer" >
          <button style={btnStyles} id="book__python" className='buttonMiddle'>
          <h2  className='text'>Python Books</h2>
          <h3 style={textStyle}> Buy Dan's book on Python</h3>
            </button>
        </a><p></p>
<a href='https://background.zuri.team'target="_blank" rel="noreferrer" >
          <button style={btnStyles} id="pitch" className='buttonMiddle'>
          <h2 className='text'>Bakground Check for Coders</h2>
          <h3 style={textStyle}> Find out more information about your developers</h3>
            </button>
        </a><p></p>
<a href='https://books.zuri.team/design-rules'target="_blank" rel="noreferrer" >
          <button style={btnStyles} id="book__design" className='buttonMiddle'>
          <h2 className='text'>Design Books</h2>
          <h3 style={textStyle}> Get a freee Design for your book, courtsey Zuri</h3>
            </button>
        </a>
        <div style={{padding:35, marginBottom: 100}} className='divBottom'>
<img src={vector} alt='vector' style={{width: 24, height: 24,marginRight: 15}} classeName='imagesOne'/>
<img src={icone} alt='ic' style={{width: 24, height: 24, }} classeName='imagesOne'/>
        </div>
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
