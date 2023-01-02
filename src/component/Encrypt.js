import React,{useState} from 'react'
import { Encryptt, Decrypt } from './Aes';

function Encrypt() {

    const [message1, setMessage1] = useState('');    
    const [encmessage1, setencmessage1] = useState(message1);

    const [message2, setMessage2] = useState(encmessage1);
    const [decmessage2, setdecmessage2] = useState(message1);


  const handleChange = event => {
    setMessage1(event.target.value);
    console.log('value is:', event.target.value);
  };
  
  const Change = event => {
    setMessage2(event.target.value);
    console.log('value is:', event.target.value);
  };

  const handleClick = () => {
    // Encrypt "message" stores input field value
    setencmessage1(Encryptt(message1));
  };
  
  const decClick = () => {
    // Decrypt "message" stores input field value
    setdecmessage2(Decrypt(message2));
  };


  return (
    <>
        <div className='container'>
            <div className='row mb-5'>
                <div className='col-6'>
                <p>Normal Text</p>
                <input type="text" 
                autoComplete="off" 
                className='form-control' 
                id="message" name='message'
                onChange={handleChange}
                value={message1} 
                placeholder='normal text' />
                
                <button className='btn btn-warning mt-3' onClick={handleClick}>Encrypt text</button>
                </div>    

                <div className='col-6'>
                <p>Encrypted Text</p>
                <input type="text" className='form-control' placeholder='Encrypted text' value={encmessage1}/>
                </div>    
            </div>


            <div className='row mb-5'>
                <div className='col-6'>
                <p>Decrypt Text</p>
                <input type="text" 
                autoComplete="off" 
                className='form-control' 
                id="decmessage2" name='decmessage2'
                onChange={Change}
                value={message2} 
                placeholder='normal text' />
                
                <button className='btn btn-danger mt-3' onClick={decClick}>Decrypt text</button>
                </div>    

                <div className='col-6'>
                <p>Normal Text</p>
                <input type="text" className='form-control' placeholder='Encrypted text' value={decmessage2}/>
                </div>    
            </div>

        </div>

    </>
  )
}

export default Encrypt