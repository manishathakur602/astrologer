import React from 'react'
import image from '../../assets/Images/Rectangle 206.png';
import FirstChunk from '../Chunksofcode/FirstChunk';
import SecondChunk from '../Chunksofcode/SecondChunk';
import image3 from '../../assets/Images/1c5cd556-29f8-4651-b42e-c97d8919b4ac 1.png';
function FifthSection() {
  return (
    <div className=' px-5 md:px-10 py-4 md:py-10 md:flex justify-center items-center gap-20'>

            <div className='max-w-sm'>
                <img src={image} alt='' />
                <FirstChunk image={image3} />
            </div>
            <SecondChunk name1="About Us" name2="Famous Astrologer" name3="Astrologer Name" para="Astrology has been an integral part of human civilization for centuries. People have
          always looked towards the stars and celestial bodies to seek answers about their lives,
          destinies, and the world around them. In this article, we will delve into the world of
          astrology and discover the brilliance of one of the finest astrologers, Kinaram Baba Ji.
          With his profound knowledge and expertise, he has guided countless individuals on their
          journey towards self-discovery and finding harmony in life. In this brief article, we
          will explore how Kinaram Baba Ji has become one of the best astrologers and how his
          guidance can illuminate your path as well." />
    </div>
  )
}

export default FifthSection
