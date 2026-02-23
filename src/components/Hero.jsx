import { useState, useEffect } from "react"

function Hero () {

    const greetings = ["Hi", "Hola", "Bonjour", "Ciao","مرحبا", "السلام علیکم"]
    const [greetingIndex, setGreetingIndex] = useState(0)

    const line1 = "My name is Areeba Ahmad";
    const line2 = "I am a Software Developer";
    
    const [text1, setText1] = useState("");
    const [text2, setText2] = useState("");

    // Cycle through greetings every 1.5 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setGreetingIndex((prev) => (prev + 1) % greetings.length)
        }, 1500)
        return () => clearInterval(timer)
    }, [])

    // Type line 1 on page load
    useEffect(() => {
        let i = 0;
        const timer = setInterval(() => {
            setText1(line1.slice(0, i + 1))
            i++
            if(i >= line1.length) clearInterval(timer)
        }, 80)
    return () => clearInterval(timer)
    }, [])

    //Type line 2 after line 1 finishes
    useEffect(() => {
        if(text1.length < line1.length) return
        let i = 0
        const timer = setInterval(() => {
            setText2(line2.slice(0, i + 1))
            i++
            if(i >= line2.length) clearInterval(timer)
        }, 80)
        return () => clearInterval(timer)
    }, [text1])

    return (
       <div id = "hero" className="container mt-5 bg-dark bg-opacity-50 rounded-4 p-5 shadow-lg">
            <h1 className="fw-bold mb-4">{greetings[greetingIndex]}, Welcome to my Portfolio</h1>
            <h2 className="fw-bold">{text1}</h2>
            <h3 className="fw-bold">{text2}</h3>
        </div>
    )
}
export default Hero