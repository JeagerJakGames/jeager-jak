import './loader.scss';

export default function Loader() {
    console.log('loader-activated');
    return (
        <>
            <div className="loader">
                <div className="loader-container">
                    <div className="star-load star-nova"></div>
                    <div className="star-load star-nova2"></div>
                </div>
                <div className="black-hole-container">
                    <div className="black-hole">
                        <div className="black-hole-core"></div>
                        <div className="black-hole-distortion"></div>
                        <div className="black-hole-top"></div>
                        <div className="black-hole-bottom-ring"></div>
                        <div className="black-hole-bottom"></div>
                    </div>
                </div>
            </div>
        </>
    )
}