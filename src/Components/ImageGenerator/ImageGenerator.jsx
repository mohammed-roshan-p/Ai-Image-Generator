    import React, { useRef, useState } from 'react'
    import './ImageGenerator.css'
    import default_image from '../Assets/default_image.svg'
    const ImageGenerator = () => {
        const [image_url,setImage_url] = useState("/");
        let inputRef = useRef(null) ; 
        const imageGenerator = async () =>
        {
            if(inputRef.current.value === "")
            {
                return 0;
            }
            const response = await fetch(
                "https://api.openai.com/v1/images/generations",
                {
                    method : "POSt" ,
                    headers : {
                        "Content-Type" : "application/json" , 
                        Authorization : 
                        "Bearer YOUR_API_KEY" ,
                        "User-Agent" : "Chrome" , 
                    },
                    body: JSON.stringify(
                        {
                            prompt : `${inputRef.current.value}` , 
                            n : 1 , 
                            size : "512x512"
                        }
                    )
                }
            );
            let data = await response.json();
            console.log(data);
            let data_array = data.data ; 
            setImage_url(data_array[0].url);
        }
    return (
        <div className='ai-image-generator'>
            <div class="header">
                AI IMAGE <span>GENERATOR</span>
            </div>
            <div class="img-loading">
                <div class="image">
                    <img src={ image_url === '/' ? default_image : image_url } alt="Image of a Lady using AI" />
                </div>
            </div>
            <div class="search-box">
                <input type='text' ref={inputRef} className='search-input' placeholder='Describe Your Image !! '/>
                <div class="submit-button" onClick={() => {imageGenerator()}}>
                    Generate
                </div>
            </div>
        </div>
    )
    }

    export default ImageGenerator
