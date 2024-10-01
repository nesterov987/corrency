export const Header=(props) => {
    const rateUSD=(1/props.data.USD).toFixed(2)
    const rateEUR = (1/props.data.EUR).toFixed(2)
    return(
        <div className="header-aria">

            <div className="cut">
                Currency Converter
            </div>

            <div className="current-currency">
                <div className="currency-elem"> USD: {rateUSD} </div>
                <div className="currency-elem"> EUR: {rateEUR} </div>
            </div>

        </div>
    )
}