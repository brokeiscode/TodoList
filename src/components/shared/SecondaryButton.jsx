function SecondaryButton({children,btnClass,onClick}) {
    return ( 
        <button type="button" className={`btn btn-${btnClass}`} onClick={onClick}>
            {children}
        </button>
     );
}

export default SecondaryButton;