import React from 'react'
import image from '../../assets/Images/Rectangle 206.png';
import FirstChunk from '../Chunksofcode/FirstChunk';
import SecondChunk from '../Chunksofcode/SecondChunk';
import image3 from '../../assets/Images/1c5cd556-29f8-4651-b42e-c97d8919b4ac 1.png';
function FifthSection() {
  return (
    <div className=' px-5 md:px-10 py-4 md:py-10 md:flex justify-center items-center gap-20' id='test3'>

            <div className='max-w-sm'>
                <img src={image} alt='' />
                <FirstChunk image={image3} />
            </div>
            <SecondChunk name1="About Us" name2="Famous Astrologer" name3="Shiv Aghori Baba Ji" para="Welcome to the official website of Shiv Aghori Baba Ji, one of India’s leading
             astrologers with over 27 years of expertise in solving love, marriage, and
             relationship issues. We offer trusted astrology solutions to help you overcome
             life's challenges, bringing peace, love, and happiness into your life.
             With a track record of over 98,000 satisfied clients globally, we specialize in
             delivering quick, effective, and personalized remedies. Whether you're facing
             love problems, marital conflicts, or career challenges, we provide result-driven
            solutions that bring lasting results. " />
    </div>
  )
}

export default FifthSection
