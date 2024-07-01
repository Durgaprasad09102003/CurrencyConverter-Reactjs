import React, { useState } from 'react'
import './Main.css'

export default function Main() {

  const [value1, setvalue1] = useState('currency');
  const [value2, setvalue2] = useState('currency');
  const [amount, setamount] = useState('enter Amount');
  var [result, setresult] = useState(0);

  function Convert(){
    if(value1 === value2){
      setresult(amount);
    }
    else if(value1 === 'Indianrupee'){
      if(value2 ==='Dollar'){
        setresult(amount/83.41);
      }
      else if(value2 === 'Yen'){
        setresult(amount*1.83);
      }
      else if(value2 === 'won'){
        setresult(amount*16.27);
      }
    }
    else if(value1 === 'Dollar'){
      if(value2 ==='Indianrupee'){
        setresult(amount*83.41);
      }
      else if(value2 === 'Yen'){
        setresult(amount*152.89);
      }
      else if(value2 === 'won'){
        setresult(amount*1356.53);
      }
    }
    else if(value1 === 'Yen'){
      if(value2 ==='Indianrupee'){
        setresult(amount/1.83);
      }
      else if(value2 === 'Dollar'){
        setresult(amount/152.90);
      }
      else if(value2 === 'won'){
        setresult(amount*8.87);
      }
    }
    else if(value1 === 'won'){
      if(value2 ==='Indianrupee'){
        setresult(amount*16.26);
      }
      else if(value2 === 'Dollar'){
        setresult(amount*1356.53);
      }
      else if(value2 === 'Yen'){
        setresult(amount*8.87);
      }
    }
  }

  return (
    <div className='Body'>
      <div className='MainBox'>
        <p id='Welcome'>Welcome</p>

        <h1 className='title'>Currency <br /> Converter</h1> <br />
        <div className='converter'>
          <label for="from" class="selection">From</label><br />
          <select name="From" id="From" value={value1} onChange={e => setvalue1(e.target.value)}>
          <option value="" hidden>Select currency</option>
            <option value="Indianrupee">Indianrupee</option>
            <option value="Dollar">Dollar</option>
            <option value="Yen">Yen</option>
            <option value="won">won</option>
          </select><br />
          <label for="To" class="selection">To</label><br />
          <select name="To" id="To"  value={value2} onChange={e => setvalue2(e.target.value)}>
          <option value="" hidden>Select currency</option>
            <option value="Indianrupee">Indianrupee</option>
            <option value="Dollar">Dollar</option>
            <option value="Yen">Yen</option>
            <option value="won">won</option>
          </select><br />

          <label for="amount" id="from_currency">{value1}</label><br />
          <input type="number" placeholder={amount} onChange={e => setamount(e.target.value)} />

          <button type="submit" onClick={Convert}>Convert</button>

          <label for="amount" id="currency_to">{value2}</label><br />
          <p id="resulttext">Result</p>
          <p id="result">{result}</p>
        </div>
      </div>
    </div>
  )
}
