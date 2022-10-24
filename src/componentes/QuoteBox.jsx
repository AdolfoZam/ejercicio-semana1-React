import React, { useState } from 'react';
import quotes from '../quotes.json'

const QuoteBox = () => {
    // let index=0
    const randomSelection=Math.floor(Math.random()*quotes.length)
    console.log(randomSelection)
    const [index,setIndex] = useState(randomSelection)
       console.log(quotes)
    // console.log(quotes.length)
    const changePhrase = () => {
        
        // alert ("Phrase")
        
        const otherSelection=Math.floor(Math.random()*quotes.length)
        console.log(otherSelection)
        setIndex(otherSelection)
    }

    const colors=["#845EC2","#D65DB1","#FF6F91","#FF9671","#0081CF","#F9F871","#008F7A","#D43725","#00C9A7"]
    const randomColor=Math.floor(Math.random()*colors.length)
    document.body.style=`background: ${colors[randomColor]}`;
    
    return (
        <div className='app-contain' style={{color:colors[randomColor]}}>
            <div className="contein-phrase" style={{color:colors[randomColor]}}>
                <p> 
                    <i class="fa-solid fa-quote-left"style={{color:colors[randomColor]}}></i>
                    {quotes[index].quote}</p>
                <p>{quotes[index].author}</p>
                <button onClick={changePhrase} style={{color:colors[randomColor]}}><i class="fa-solid fa-circle-chevron-right"></i></button>
            </div>
            <i class="fa-solid fa-quote-left"></i>
        </div>
    );
};

export default QuoteBox;