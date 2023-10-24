function Card({children,addin}) {
    return ( 
        <div className={`card ${addin?'cardsort':null}`}>
            {children}
        </div>
     );
}

export default Card;