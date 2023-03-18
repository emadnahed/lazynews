import React from "react"
import Card from "./Components/Card"
import './App.css';
import Header from "./Components/Header";
import Footer from "./Components/Footer";



export default function App() {
    const [NewsData, setNewsData] = React.useState([])
    const [darkMode, setDarkMode] = React.useState(false)
    const [formData, setFormData] = React.useState(
        {

            selectedNews: "all"
        }
    )
    
    
    function handleChange(event) {   
        const {value} = event.target
        setFormData(prevFormData => {
            return {
                selectedNews: value
            }
        })
    }
        
    // side effects
    React.useEffect(function() {
        fetch(`https://inshorts.deta.dev/news?category=${formData.selectedNews}`)
            .then(res => res.json())
            .then(data => setNewsData(data.data))
    }, [formData.selectedNews])
    
    function toggleDarkMode() {
        setDarkMode(prevMode => !prevMode)
    }
    
    let currentMode = darkMode ? "dark": "white"
    let combination = `all ${currentMode}`
    
    
    console.log(combination)

    const CardElements = NewsData.map(news => {return <Card  
                                                className="card"
                                                key={news.id} 
                                                currentMode={currentMode}
                                                Author={news.author} 
                                                NewsTitle={news.title} 
                                                NewsContent={news.content} 
                                                RMore={news.readMoreUrl} 
                                                url={news.url}
                                                NewsDate={news.date.slice(0,11)} 
                                                NewsImage={news.imageUrl}
                                                NewsTime={news.time}
                                                />}
                                                )
    
    
    
    return (
        <div className={combination}>
            <Header 
                darkMode={darkMode} 
                toggleDarkMode={toggleDarkMode}
                currentMode={currentMode}
                handleChange={handleChange}
                selectedNews = {formData.selectedNews}
            />

            <main className="dea">
            {CardElements}
            </main>                

            <Footer darkMode={darkMode}/>

        </div>
    )
}