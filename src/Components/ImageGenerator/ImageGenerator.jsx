import React from 'react'
import './ImageGenerator.css'
import default_image from '../Assets/default_image.svg'
const ImageGenerator = () => {
  return (
    <div className='ai-image-generator'>
        <div class="header">
            AI IMAGE <span>GENERATOR</span>
        </div>
        <div class="img-loading">
            <div class="image">
                <img src={default_image} alt="Image of a Lady using AI" />
            </div>
        </div>
        <div class="search-box">
            <input type='text' className='search-input' placeholder='Describe Your Image !! '/>
            <div class="submit-button">
                Generate
            </div>
        </div>
    </div>
  )
}

export default ImageGenerator