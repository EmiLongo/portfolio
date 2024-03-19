const GuidesCardComponent = ({ target, img, description}) => {
    const handleClick = () => {
        window.open(target, '_blank');
    };
    return (
        <div className="guide-card" onClick={handleClick}>
            <img src={img} />
            <p>{description}</p>
        </div>
    )
}

export default GuidesCardComponent