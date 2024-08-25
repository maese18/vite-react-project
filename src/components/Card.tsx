import './card.css'

interface CardProps{
    title:string,
    children: React.ReactNode,
    className:string;
    style?:object
}

export default function Card({ title, style,className,children }:CardProps,) {
    return (
        <div className={"card-wrapper"+` ${className}`} style={style}>
            <div className="card-header">{title}</div>
            <div className="card-content">{children}</div>
        </div>
    )
}