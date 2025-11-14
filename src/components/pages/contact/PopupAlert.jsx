

function PopupAlert({ show, message, type }) {
    if (!show) return null;

    return (
        <div className='popup-overlay'>
            <div className={`popup-alert ${type}`}>
                <div className='popup-icon'>
                    {type === "success" ? "✓" : "!"}
                </div>
                <p className='popup-message'>{message}</p>
            </div>
        </div>
    )
}

export default PopupAlert