import './Hero.css'

function Hero() {
    return (
        <>
            <div className='hero'>
                <div className='text'>

                    <span id='find'>Find.</span>
                    <span id='match'>Match.</span>
                    <span id='chat'>Chat.</span>

                    <p>find a perfect partner for yourself</p>
                </div>

                <div className='hero-cards'>
                    <div className='card3 card'>
                        <div className='card-image'>
                            <img src="hero-images/vibes-matched.png" alt="" />
                        </div>
                        <span>"Vibes Matched"</span>
                    </div>

                    <div className='card1 card'>
                        <div className='card-image'>
                            <img src="hero-images/soulmates.png" alt=""/>
                        </div>
                        <span>"Soulmates"</span>
                    </div>

                    <div className='card2 card'>
                        <div className='card-image'>
                            <img src="hero-images/together-forever.png" alt="" />
                        </div>

                        <span>"Together, Forever"</span>
                    </div>
                    
                </div>
                <div className='button'>
                    <button>Get Started</button>
                </div>
                
                <div className='footer'>
                    <span>
                        "Most Beautiful Moments Are The Unexpected Ones"
                    </span>
                    <span>
                        Developed with ❤️ by Sanjeeb Poudel
                    </span>
                </div>
            </div>
        </>
    )
}

export default Hero