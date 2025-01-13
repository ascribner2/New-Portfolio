
const PageTemplate = ({children}) => {
    return (
        <div className="flex flex-col items-center w-full h-full min-h-screen bg-[#181818] font-custom">
            <div className="flex flex-col items-center md:items-start max-w-6xl w-full py-10 sm:px-10 px-3">
                { children }
            </div>
        </div>
    )
}

export default PageTemplate;