
import React from 'react'

export default function Header(props){
        const a = props.darkMode ? "dark": "white"
        const b = "nav--logo_text"
        const ab = `${b}${a}`

        
    return (
         <nav 
            className={props.darkMode ? "dark": "white"}
        >
            <div className='header-logotxt'>
                        <img 
                        className="nav--logo_icon"
                        src = {props.darkMode ? "https://img.icons8.com/cotton/256/news--v1.png" : 'https://img.icons8.com/ios-filled/256/news.png'}
                        alt="News-Icon"
                        />
                        <h3 className={ab}>Top News</h3>
               </div>


            <div className='formdata'>
            <form>
            <label htmlFor="selectedNews"></label>
            <br />
            <select 
                id="selectedNews"
                value={props.selectedNews}
                onChange={props.handleChange}
                name="selectedNews"
            >
                <option value="all">All</option>
                <option value="national">National</option>
                <option value="business">Business</option>
                <option value="sports">Sports</option>
                <option value="world">World</option>
                <option value="politics">Politics</option>
                <option value="technology">Technology</option>
                <option value="startup">Startup</option>
                <option value="entertainment">Entertainment</option>
                <option value="miscellaneous">Miscellaneous</option>
                <option value="hatke">Hatke</option>
                <option value="science">Startup</option>
                <option value="automobile">Automobile</option>
            </select>
        </form>

            </div>

            
            <div 
                className="toggler" 
            >
                <p className="toggler--light">Light</p>
                <div 
                    className="toggler--slider"
                    onClick={props.toggleDarkMode}
                >
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
        </nav>
    )
}
