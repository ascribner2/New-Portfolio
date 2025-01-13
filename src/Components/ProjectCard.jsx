import TechTag from "./TechTag.jsx"

const ProjectCard = ({onClick ,title, thumbnail, technologies}) => {

    return (
        <div onClick={onClick} className="flex flex-col justify-center items-center cursor-pointer hover:bg-[#1F1F1F] pb-5 pt-2 rounded-lg overflow-hidden px-2">
            {/* Thumbnail */}
            <div className="flex flex-col items-center w-fit h-fit">
                <img src={thumbnail} className="w-full max-w-[400px] sm:h-[230px] lg:h-[260px] rounded-xl" />
            </div>

            {/* Title */}
            <p className="text-2xl sm:text-3xl my-3 text-[#FAFCFF] px-2 max-w-[300px] sm:max-w-[360px] overflow-hidden overflow-ellipsis whitespace-nowrap">{title}</p>
            
            {/* Technologies */}
            <div className="flex flex-row flex-wrap w-fit max-w-[300px] sm:max-w-[360px] px-2 justify-center">
                { 
                technologies.map((techLabel, index) => {
                    return (
                        <TechTag key={"TechLabel" + index} label={techLabel}/>
                    );
                }
                ) }
            </div>
        </div>
    );
}

export default ProjectCard;