import React from "react";

const Navbar = () => {
	return (
		<header className="flex  w-full h-56 sm:h-32 bg-black justify-between pl-40 pr-40">
			<div className="logo">
				<img src="" alt="Rajjog Logo" />
			</div>

			<ul className="flex text-gray-300 gap-10 h-full font-semibold cursor-pointer  ">
				<li className="border-t-4 border-transparent  flex items-center transition  hover:border-gray-300 border-gray-300 ">
					Home
				</li>

				<li className="border-t-4 border-transparent  flex items-center transition  hover:border-gray-300 ">
					About Us
				</li>
				{/* <li className="border-t-4 border-transparent  flex items-center transition  hover:border-gray-300">
					Projects
				</li> */}
				{/* <li className="border-t-4 border-transparent  flex items-center transition  hover:border-gray-300">
					Events
				</li> */}
				<li className="border-t-4 border-transparent  flex items-center transition  hover:border-gray-300">
					Gallery
				</li>
				{/* <li className="border-t-4 border-transparent  flex items-center transition  hover:border-gray-300">
					Downloads
				</li> */}
				<li className="border-t-4 border-transparent  flex items-center transition  hover:border-gray-300">
					Contact Us
				</li>
			</ul>
		</header>
	);
};

export default Navbar;
