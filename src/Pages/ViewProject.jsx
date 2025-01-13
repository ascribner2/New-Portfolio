import { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import PageTemplate from "../Components/PageTemplate.jsx";
import TechTag from "../Components/TechTag.jsx";

const ViewProject = () => {
    const location = useLocation();
    const projectData = useRef(location.state.projectData);
    const imagesLen = useRef(projectData.current.Images.length);
    const [imageIndex, setImageIndex] = useState(0);
    const navigation = useNavigate();

    return (
        <PageTemplate>
            <div className="flex flex-col items-start px-2 w-full">
                {/* Back Button */}
                <div onClick={() => { navigation("/") }} className="flex flex-row justify-start w-full mb-4">
                    <div className="flex flex-row items-center w-fit p-2 hover:bg-[#1F1F1F] cursor-pointer text-[#FAFCFF] rounded-lg">
                        <img src={"./svg/chevron_left.svg"} className="w-[30px] h-[30px]" />
                        <p className="text-xl font-semibold">Back</p>
                    </div>
                </div>

                
                <p className="text-2xl sm:text-4xl text-[#FAFCFF] font-semibold mb-6">{projectData.current.Title}</p>
                {/* Technologies */}
                <div className="flex flex-row mb-3 flex-wrap w-full sm:px-0">
                    { 
                    projectData.current.Technologies.map((techLabel, index) => {
                        return (
                            <TechTag key={"TechLabel" + index} label={techLabel}/>
                        );
                    }
                    ) }
                </div>

                {/* Description */}
                <p className="text-base sm:text-lg text-[#FAFCFF] font-regular mb-7 md:mb-16 w-full sm:px-0">{projectData.current.Description}</p>
                
                {/* Images */}
                {/* Top buttons for mobile */}
                <div className="flex flex-row justify-around w-full px-5">
                    <img onClick={() => { setImageIndex((prev) => (prev <= 0) ? (imagesLen.current - 1) : (prev - 1) ) }} src={"./svg/chevron_left.svg"} className="w-[50px] block sm:hidden h-[80px] cursor-pointer" />
                    <img onClick={() => { setImageIndex((prev) => prev + 1) }} src={"./svg/chevron_right.svg"} className="w-[50px] block sm:hidden h-[80px] cursor-pointer" />
                </div>
                
                {/* Image div with desktop buttons */}
                <div className="flex flex-row justify-center items-center w-full text-[#FAFCFF]">
                    <img onClick={() => { setImageIndex((prev) => (prev <= 0) ? (imagesLen.current - 1) : (prev - 1) ) }} src={"./svg/chevron_left.svg"} className="hidden sm:block w-[80px] h-[80px] cursor-pointer" />
                    <img src={projectData.current.Images[imageIndex % imagesLen.current]} className="w-full sm:w-[80%] max-h-[500px] sm:mx-5 object-contain sm:bg-[#1F1F1F] rounded-xl" />
                    <img onClick={() => { setImageIndex((prev) => prev + 1) }} src={"./svg/chevron_right.svg"} className="hidden sm:block w-[80px] h-[80px] cursor-pointer" />
                </div>
            </div>
        </PageTemplate>
    )
}

export default ViewProject;