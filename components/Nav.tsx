import {markup, NavProps, when} from "../utils/reactHelper";
import {useEffect, useRef, useState} from "react";
import navStyles from "./../styles/nav.module.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

import logoSvg from "./vectors/pf_logo.svg"
import {faBars} from "@fortawesome/free-solid-svg-icons";
import Anchor from "./Anchor";

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
			{!!banner.hasValue && (
				<div className={navStyles.preNavBanner}>
					<p dangerouslySetInnerHTML={markup(banner.message)}/>
				</div>
			)}

			<nav ref={navRef} data-theme={siteTheme} className={navClassName} onBlurCapture={blurHandler}>
				<ul>
					<li className={navStyles.logoContainer}>
						<Anchor href="/" title={"ProjectFunction"}>
							{logoSvg()}
						</Anchor>
						<button aria-label="toggle" onClick={()=>openSubMenu("-")}>
							<FontAwesomeIcon icon={faBars}/>
						</button>
					</li>
					<li><Anchor href="/about">About us</Anchor></li>
					<NavItemSubMenu menuName={"Learn"} nameOfOpenSub={navState.openedSubMenu} onActive={openSubMenu}>
						<li><Anchor href="https://campus.projectfunction.io" isExternal={true}>Learning Hub</Anchor></li>
						<li><Anchor href="/courses">Our Courses</Anchor></li>
						<li><Anchor href="/how-we-teach">How we teach</Anchor></li>
					</NavItemSubMenu>
					<NavItemSubMenu menuName={"Programmes"} nameOfOpenSub={navState.openedSubMenu} onActive={openSubMenu}>
						<li><Anchor href="/programmes/access-for-all">Access For All</Anchor></li>
						<li><Anchor href="/programmes/after-care">After Care</Anchor></li>
					</NavItemSubMenu>
					<li><Anchor href="/notes">Notes</Anchor></li>
					<NavItemSubMenu menuName={"Impact"} nameOfOpenSub={navState.openedSubMenu} onActive={openSubMenu}>
						<li><Anchor href="/impact/sponsor">Sponsor</Anchor></li>
						<li><Anchor href="/impact/jobs">Jobs</Anchor></li>
						<li><Anchor href="/impact/events">Events</Anchor></li>
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
				<li><Anchor href="#" className="nav-back">Back</Anchor></li>
				{children}
			</ul>
		</li>
	)
}