export interface cardProps {
    title: string | undefined;
    description: string | undefined;
    image: string | undefined;
    isDarkMode?: boolean;
}

export default function Card(props: cardProps) {
    const { title, description, image, isDarkMode } = props;
    return (
        <>
            <div className="card">
                <div className="card-image">
                    <img src={image}></img>
                </div>
                <div className="card-content">
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </>
    )
}