import React from 'react'
import image2 from '../../assets/Images/imag10.png';
import FirstChunk from '../Chunksofcode/FirstChunk';
import ThirdChunk from '../Chunksofcode/ThirdChunk';

function SeventhSection() {
  return (
    <div className=' px-5 md:px-5 xl:px-10 py-4 md:py-10 md:flex justify-center items-center gap-10 xl:gap-40' id='test4'>


<ThirdChunk name1="Why Choose Us" name2="Shiv Aghori Baba Ji  " para="Love Problem Solutions Marriage Compatibility Checks Husband-Wife Dispute Remedies
 Lost Love Back Solutions Career & Health Remedies" />
            <div className='max-w-sm  p-2'>
                <img src={image2} alt='' />
                <FirstChunk  />
            </div>
            
    </div>
  )
}

export default SeventhSection
