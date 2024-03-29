import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"
import AnimeConfig from "../utilities/AnimeConfig/AnimeConfig";

interface QuizButtonProps {
	buttonText: string;
	menuOptions: {
		label: string;
		value: string;
	}[];
	linkButtonLabel: string;
	linkButtonUrl: string;
	animeList: AnimeConfig[]
}

const QuizButton: React.FC<QuizButtonProps> = ({
	buttonText,
	menuOptions,
	linkButtonLabel,
	linkButtonUrl,
	animeList
}) => {
	const [showMenu, setShowMenu] = useState(false);
	const [selectedOption, setSelectedOption] = useState<string>("0");
	const menuRef = useRef<HTMLDivElement>(null);
	const [menuHeight, setMenuHeight] = useState(0);
	const buttonRef = useRef<HTMLButtonElement>(null);
	const [buttonRadius, setButtonRadius] = useState("rounded-xl");

	const handleButtonClick = () => {
		setShowMenu((prevState) => !prevState);
	};

	const handleOptionSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSelectedOption(event.target.value);
	};
	
	useEffect(() => {
		if (menuRef.current) {
			setMenuHeight(menuRef.current.scrollHeight);
		}
	}, [menuRef]);

	useEffect(() => {
		if (showMenu && buttonRef.current) {
			setButtonRadius("rounded-t-xl");
		} else {
			setTimeout(() => setButtonRadius("rounded-t-xl rounded-b-md"), 375);
			setTimeout(() => setButtonRadius("rounded-t-xl rounded-b-lg"), 405);
			setTimeout(() => setButtonRadius("rounded-t-xl rounded-b-xl"), 435);
		}
	}, [showMenu]);

	const navigate = useNavigate();

	const handleLinkButtonClick = () => {
	  navigate(linkButtonUrl, { state: { type: selectedOption, animeList: animeList } });
	};

  	return (
    	<div className="relative w-1/5 aspect-video">

			<button
				ref={buttonRef}
				className={`w-full h-full bg-bgblue text-white text-2xl font-bold py-2 px-4 cursor-pointer ${buttonRadius}`}
				onClick={handleButtonClick}
				type="button">
				{buttonText}
			</button>

			<div
				className="absolute top-full left-0 right-0 z-10 overflow-hidden"
				style={{
					height: showMenu ? `${menuHeight}px` : 0,
					transition: "height 0.5s ease",
				}}
				ref={menuRef}>

				<div
					className="bg-white border border-gray-300 rounded-b-xl"
					style={{
						transform: showMenu ? "translateY(0)" : "translateY(-100%)",
						transition: "transform 0.5s ease",
					}}>

					{menuOptions.map((option) => (
						<label
							key={option.value}
							className="px-4 py-2 cursor-pointer block hover:bg-gray-100 relative"
						>
							<input
								type="radio"
								name="menu-options"
								value={option.value}
								checked={option.value === selectedOption}
								onChange={handleOptionSelect}
								className="sr-only"
							/>
							<div
								className={`h-6 w-6 border border-gray-300 rounded-full flex items-center justify-center absolute top-1/2 transform -translate-y-1/2 ${option.value === selectedOption ? "bg-bgblue border-bgblue " : ""}`}
							>
								<div className="h-2 w-2 rounded-full bg-white" />
							</div>
							<span className="ml-8">{option.label}</span>
						</label>
					))}

					<button
						onClick={handleLinkButtonClick}
						className="w-full bg-bgblue text-white font-bold text-center py-2 px-4 rounded-b-xl hover:bg-bgbluedark cursor-pointer">
						{linkButtonLabel}
					</button>
				</div>
			</div>
		</div>
  	);
};

export default QuizButton;
