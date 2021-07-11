import ContentContainer from "./ContentContainer";
import mailingListStyle from "./../styles/mailingList.module.scss";
import useSWR from "swr";
import {useState} from "react";

export default function MailingListCTA({listIdentifier}:{listIdentifier?:string}){
	const { data, error, revalidate } = useSWR('/api/open/token', {
		focusThrottleInterval: 3600_000 //1hr
	});
	const [ status, setStatus ] = useState({state:"new", errMessage:""});

	const handleSubmit = async ev => {
		ev.preventDefault();

		const formData = new FormData(ev.target);

		const result = await fetch("/api/open/mailing-list/join", {
			body: formData,
			method: "POST"
		});

		if ([200, 201, 202].indexOf(result.status) > -1){
			setStatus({
				state: "complete",
				errMessage: ""
			});
		}
		else{
			setStatus({
				state:"errored",
				errMessage: await result.text()
			});
		}
	};

	return (
		<ContentContainer className={mailingListStyle.container}>
			<div className={mailingListStyle.cta}>
				<div className={mailingListStyle.ctaContent}>

					<h5>Don't miss out!</h5>

					<p>Sign up to our mailing list to get updates about ProjectFunction, and our upcoming courses.</p>

					<form onSubmit={handleSubmit}>
						<div className={mailingListStyle.formField}>
							<input type="email" name="email" title="Email Address" disabled={status.state == "complete"}/>
							<input type="hidden" name="hpId" value={""}/>
							<input type="hidden" name="client" value={data?.client ?? ""} />
							{!!listIdentifier && <input type="hidden" name="listIdentifier" value={listIdentifier}/>}
							{status.state != "complete" && <button type="submit">Subscribe</button>}
						</div>
						<div className={mailingListStyle.formError}>
							{status.state === "errored" && <p>{status.errMessage}</p>}
						</div>
					</form>

				</div>
				<div className={mailingListStyle.ctaDesign} role="presentation">
					<svg width="440" height="372" viewBox="0 0 440 372" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path opacity="0.2" fillRule="evenodd" clipRule="evenodd"
						      d="M236.281 0.318848H236.341H282.573H282.69L282.807 0.328125L328.64 3.91504L331.406 4.13135V6.90576V92.5723H430.435L430.435 92.9927L431.04 100.476L439.884 209.932C439.961 210.884 439.97 211.841 439.91 212.794L430.435 364.007L214.819 371.181L10.7792 364.212L4.7826 364.007L5.02051 358.012L8.76813 263.572L0.122136 142.528C0.0408368 141.391 0.0570722 140.248 0.170537 139.113L4.03632 100.456L4.7826 92.9927L4.78272 92.5723H101.42V48.7534V46.2524L102.647 46.0283L121.682 24.0708L121.821 23.9111L121.981 23.772L143.49 5.0752L143.636 4.0083L144.77 3.96338L144.795 3.94092L144.813 3.96143L146.149 3.9082L236.221 0.321289L236.281 0.318848ZM142.26 14.0942L126.077 28.1611L112.083 44.3032L138.807 39.418L142.26 14.0942ZM331.406 180.811V98.5723H424.143L331.406 180.811ZM101.42 98.5723H10.8539L101.42 181.802V98.5723ZM325.406 185.267L281.711 222.502L247.274 222.71H147.451L107.42 185.349V51.2549L142.025 44.9292L144.164 44.5381L144.458 42.3838L148.901 9.80322L236.4 6.31885H282.455L325.406 9.68018V185.267ZM142.963 228.129L9.55872 105.531L6.14075 139.71C6.06134 140.505 6.04999 141.305 6.10688 142.101L14.7529 263.145L14.7766 263.478L14.7634 263.811L11.3353 350.197L142.963 228.129ZM11.4939 358.233L149.645 230.116H282.573H283.916L422.118 358.281L214.821 365.178L11.4939 358.233ZM425.12 352.882L288.883 226.539L425.422 105.457L433.904 210.416C433.958 211.082 433.964 211.751 433.922 212.419L425.12 352.882ZM216.015 59.5146C216.015 55.1123 219.583 51.5435 223.986 51.5435C228.388 51.5435 231.957 55.1123 231.957 59.5146V126.471C231.957 130.873 228.388 134.442 223.986 134.442C219.583 134.442 216.015 130.873 216.015 126.471V59.5146ZM223.986 154.37C219.583 154.37 216.015 157.938 216.015 162.341C216.015 166.743 219.583 170.312 223.986 170.312C228.388 170.312 231.957 166.743 231.957 162.341C231.957 157.938 228.388 154.37 223.986 154.37Z"
						      fill="url(#paint0_linear)"/>
						<path
							d="M106.841 142.914L179.026 209.252L179.887 210.043H181.056H253.594H254.733L255.585 209.287L330.473 142.877L335.009 199.007C335.075 199.816 335.082 200.629 335.031 201.44L330.156 279.241L217.22 282.998L107.57 279.253L109.59 228.345L109.597 228.179L109.585 228.013L105 163.818C104.931 162.851 104.944 161.879 105.041 160.915L106.841 142.914Z"
							stroke="currentColor" strokeWidth="6"/>
						<line x1="104.981" y1="277.809" x2="181.584" y2="206.769" stroke="currentColor"
						      strokeWidth="6"/>
						<line x1="255.42" y1="207.197" x2="332.024" y2="278.237" stroke="currentColor"
						      strokeWidth="6"/>
						<line x1="182.322" y1="206.825" x2="253.362" y2="206.397" stroke="currentColor"
						      strokeWidth="6"/>
						<path
							d="M157.947 112.893L177.847 109.256L180.414 90.4258L228.773 88.5H253.594L278.201 90.4258V186.929L253.594 207.899H180.414L157.947 186.929V112.893Z"
							stroke="currentColor" strokeWidth="6"/>
						<line x1="104.453" y1="136.64" x2="157.091" y2="136.64" stroke="currentColor" strokeWidth="6"/>
						<line x1="278.202" y1="136.64" x2="332.98" y2="136.64" stroke="currentColor" strokeWidth="6"/>
						<path d="M180.68 90.0498L168.432 100.697L157.999 112.731" stroke="currentColor"
						      strokeWidth="6"/>
						<rect x="217.86" y="114.391" width="8.55905" height="44.507" rx="4.27952" fill="currentColor"/>
						<rect x="217.86" y="169.597" width="8.55905" height="8.55905" rx="4.27952" fill="currentColor"/>
						<defs>
							<linearGradient id="paint0_linear" x1="220" y1="102" x2="220.01" y2="371.181" gradientUnits="userSpaceOnUse">
								<stop/>
								<stop offset="1" stopOpacity="0"/>
							</linearGradient>
						</defs>
					</svg>
				</div>
			</div>
		</ContentContainer>
	)

}