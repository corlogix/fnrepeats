import "./Banner.scss";
export default function Banner({children}) {
    return (
        <div className="banner d-flex flex-grow-1 flex-row p-3">
            <div className="d-flex flex-column flex-grow-1 justify-content-center align-items-center">
                {children}
            </div>
        </div>
    )
}