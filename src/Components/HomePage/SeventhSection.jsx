import React from 'react'
import image2 from '../../assets/Images/imag10.png';
import FirstChunk from '../Chunksofcode/FirstChunk';
import ThirdChunk from '../Chunksofcode/ThirdChunk';

function SeventhSection() {
  return (
    <div className=' px-5 md:px-10 py-4 md:py-10 md:flex justify-center items-center gap-22' id='test4'>


<ThirdChunk name1="Why Choose Us" name2="Astrologer Name  " para="Kinaram Baba Ji passion for astrology was ignited during his early childhood. Born into a family of renowned astrologers, he was exposed to the mystical world of astrology from an early age. As he grew older, his fascination with the stars and celestial patterns intensified, driving him to study astrology extensively." />
            <div className='max-w-sm'>
                <img src={image2} alt='' />
                <FirstChunk  />
            </div>
            
    </div>
  )
}

export default SeventhSection
