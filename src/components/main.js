import { useState } from "react"
import  image  from './curimg.jpg'

export const Main=(props) => {
    const [input1, setInput1] = useState(1)
    const [input2, setInput2] = useState(1) 
    const [currency1, setCurrency1] = useState('USD')
    const [currency2, setCurrency2] = useState('USD') 
    const currencies=["USD", "EUR" , 'UAH']
    function convert(fromCurrency, toCurrency, amount){
        if(amount>=0){
            const converted=(amount/props.data[fromCurrency])*props.data[toCurrency]
            return converted.toFixed(2)
        }
    }
    function changeInput1(amount){
        setInput1(amount)
        setInput2(convert(currency1, currency2, amount))
    }
    function changeInput2(amount){
        setInput2(amount)
        setInput1(convert(currency2, currency1, amount))
    }
    function changeCurrency1(currency){
        setCurrency1(currency)
        setInput2(convert(currency,currency2,input1))
    }
    function changeCurrency2(currency){
        setCurrency2(currency)
        setInput1(convert(currency,currency2,input2))
    }
    return(
        <div>
        
        <div className="dv-mn">
            <div className="dv1">
                <input type="number" value={input1} onChange={(e) => changeInput1(parseFloat(e.target.value)) } className="inp" />
                <select value={currency1} onChange={(e) => changeCurrency1(e.target.value) } className="inp">
                    {currencies.map((cur) => (
                        <option key={cur} value={cur}>
                            {cur}
                        </option>
                    ) )}
                </select>
            </div>

            <div className="dv1">
                <input type="number" value={input2} onChange={(e) => changeInput2(parseFloat(e.target.value)) } className="inp" />
                <select value={currency2} onChange={(e) => changeCurrency2(e.target.value) } className="inp">
                    {currencies.map((cur) => (
                        <option key={cur} value={cur}>
                            {cur}
                        </option>
                    ) )}
                </select>
            </div>

        </div>

            <div className="imgc" >
                <img className="imag" src={image} alt="hi" />
            </div>

        </div>
    )
}