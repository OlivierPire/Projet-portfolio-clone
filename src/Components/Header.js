import React, { useState } from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";

const Header = () => {
	let [scrollY, setScrollY] = useState(window.scrollY);

	window.addEventListener("scroll", () => {
		setScrollY(window.scrollY);
	});
	return (
		<div
			className="header"
			style={
				scrollY > 0
					? { backgroundColor: "#141414", transition: "0s" }
					: {
							background:
								"linear-gradient(180deg, rgba(0,0,0,0.7262255243894433) 0%, rgba(9,9,121,0) 100%)",
							transition: "1s",
					  }
			}
		>
			<Logo />
			<Navigation />
		</div>
	);
};

export default Header;
