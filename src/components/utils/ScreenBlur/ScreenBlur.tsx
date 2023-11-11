import "./ScreenBlur.css";


function ScreenBlur({ children }: { children: React.ReactNode }) {

    return (
        <>
            <div className="modal-dialog">
                {children}
            </div>
        </>
    )
}

export default ScreenBlur;