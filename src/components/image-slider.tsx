import React from "react";
import '../styles/ImageSlider.scss';


export interface ImageSliderProps {
    images: string[];
    isDarkMode?: boolean;
}
export default function ImageSlider(props: ImageSliderProps) {
    const { images, isDarkMode } = props;
    const setTime = (num:number): number => {
        const res:number = num * 1000;
        return res;
    }
    const [currentImage, setCurrentImage] = React.useState(images[0]);
    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

    if (images && images.length > 0) {
        setInterval(() => {
            if (currentImageIndex < images.length - 1) {
                setCurrentImageIndex(currentImageIndex + 1);
                setCurrentImage(images[currentImageIndex + 1]);
            } else {
                setCurrentImage(images[0]);
                setCurrentImageIndex(0);
            }
            //console.log(`CURRENT IMAGE INDEX: ${currentImageIndex} \n CURRENT IMAGE: ${currentImage}`);
        }, setTime(12));
    }


    return (
        <>
            <div className="image-slider">
                <div className="image-container">
                <img src={currentImage} alt="IMG"></img>
                </div>
            </div>
        </>
    )
}