import Card, { cardProps } from "./card";
import "./card.scss";
export interface cardHandlerProps {
    isDarkMode?: boolean;
    cards: cardProps[];
}

export default function CardHandler(props: cardHandlerProps) {
    const { isDarkMode, cards } = props;
    return (
        <>
            <div className="card-handler">
                {cards.map((card, index) => {
                    return (
                        <Card isDarkMode={isDarkMode} title={card.title} description={card.description} image={card.image} key={index} />
                    )
                })}
            </div>
        </>
    )
}