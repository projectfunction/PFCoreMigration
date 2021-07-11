import {markup, NavProps, when} from "../utils/reactHelper";
import {useEffect, useRef, useState} from "react";
import navStyles from "./../styles/nav.module.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

import logoSvg from "./vectors/pf_logo.svg"
import {faBars} from "@fortawesome/free-solid-svg-icons";

export default function Nav({siteTheme}:NavProps){
	let [banner, setBannerValue] = useState({hasValue:false, message:""});
	let [navState, setNavState] = useState({isOpen:false, openedSubMenu:""});

	const openSubMenu = (subNavName)=>{
		setNavState({
			openedSubMenu: subNavName,
			isOpen: subNavName !== ""
		});
	}

	const navRef = useRef<HTMLElement>(null);
	const navClassName = navState.isOpen ? navStyles.navOpen : navStyles.nav;

	const blurHandler = (e)=>{
		if (navRef.current?.querySelector("nav > ul > li > ul:focus-within") === null){
			openSubMenu("")
		}
	}

	useEffect(()=>{
		navRef.current?.addEventListener("mouseleave", ()=>openSubMenu(""));
	}, []);

	return (
		<>
			{when(banner.hasValue, ()=>(
				<div className={navStyles.preNavBanner}>
					<p dangerouslySetInnerHTML={markup(banner.message)}/>
				</div>
			))}

			<nav ref={navRef} data-theme={siteTheme} className={navClassName} onBlurCapture={blurHandler}>
				<ul>
					<li className={navStyles.logoContainer}>
						<a href="/" title={"ProjectFunction"}>
							{logoSvg()}
						</a>
						<button aria-label="toggle" onClick={()=>openSubMenu("-")}>
							<FontAwesomeIcon icon={faBars}/>
						</button>
					</li>
					<li><a href="/about">About us</a></li>
					<NavItemSubMenu menuName={"Learn"} nameOfOpenSub={navState.openedSubMenu} onActive={openSubMenu}>
						<li><a href="https://campus.projectfunction.io" target="_blank">Learning Hub</a></li>
						<li><a href="/courses">Our Courses</a></li>
						<li><a href="/how-we-teach">How we teach</a></li>
					</NavItemSubMenu>
					<NavItemSubMenu menuName={"Programmes"} nameOfOpenSub={navState.openedSubMenu} onActive={openSubMenu}>
						<li><a href="/programmes/access-for-all">Access For All</a></li>
						<li><a href="/programmes/after-care">After Care</a></li>
					</NavItemSubMenu>
					<li><a href="/notes">Notes</a></li>
					<NavItemSubMenu menuName={"Impact"} nameOfOpenSub={navState.openedSubMenu} onActive={openSubMenu}>
						<li><a href="/impact/sponsor">Sponsor</a></li>
						<li><a href="/impact/jobs">Jobs</a></li>
						<li><a href="/impact/events">Events</a></li>
					</NavItemSubMenu>
				</ul>
			</nav>
		</>
	)
}

function NavItemSubMenu({onActive, menuName, nameOfOpenSub, children}){
	const itemRef = useRef(null);
	const key = menuName.toLowerCase();

	const focusChanged = (e) => {
		if (itemRef.current?.matches("li:focus-within")) onActive(key);
	};

	return (
		<li ref={itemRef} onFocusCapture={focusChanged} key={key}>
			<span onMouseOver={()=>onActive(key)}>{menuName}</span>

			<ul className={ nameOfOpenSub === key ? navStyles.subMenuOpen : navStyles.subMenu }>
				<li><a href="#" className="nav-back">Back</a></li>
				{children}
			</ul>
		</li>
	)
}