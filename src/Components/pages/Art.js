import React, { useEffect, useState } from 'react'
import Categories from '../Categories'
import HeroSection from '../HeroSection'
import './Art.css'
function Art() {
   const [show,setshow]= useState(true);
  
    const handel = ()=>{
        setshow(!show);
    }

    //const x = show?"showmore":"showless"
//console.log(x,show);
  

    return (
        <>

            <div className='herocontainer_1'>
            </div>
            <h1>Explore Art</h1>
            <div className='container'>




                <div className='info'>

                    <h5 className='infotext'>An online community of makers, developers, and traders is pushing the art world into new territory. It all started with CryptoPunks, a set of 10,000 randomly generated punks that proved demand for the digital ownership of non-physical items and collectibles in 2017, and the market has evolved rapidly ever since.<br /><br />
                    

                        <span className={show?"showmore":"showless"}>As the underlying technology develops, a growing pool of artists are selling verified, immutable works to art lovers and speculators, and the space as a whole is waking up to the power and potential of decentralized networks and currencies. With creators and collectors generating meaningful revenue through an entirely digital ecosystem, the tokenization of gifs, memes, and MP4s is emerging as the most exciting and relevant blockchain use case. From SuperRare to Josie to JOY, browse and trade NFTs from some of the world's top crypto artists on OpenSea.</span></h5>

                        
                </div>
                <button className='expand' onClick={handel}>expand</button>
                <div className='collection'>
                <Categories filter="art" heading="Trending collections in Art" />
                </div>
                

            </div>











        </>
    )
}

export default Art