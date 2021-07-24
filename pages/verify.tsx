import {useTheme} from "../components/ThemeContextProvider";
import MainLayout from "./../components/layouts/MainLayout";
import ContentContainer from "./../components/ContentContainer";
import useSearchQueries from "../utils/useSearchQueries";
import {useEffect, useState} from "react";
import certStyles from "../styles/certs.module.scss";
import PlaceholderText from "../components/PlaceholderText";
import {CertificateApiResponse} from "../utils/types";
import {dateFormat} from "../utils/dateHelper";
import Anchor from "../components/Anchor";

export default function Verify(){
	let siteTheme = useTheme();
	const {query} = useSearchQueries();
	const [certId, setCertId] = useState<string>(null);
	const [certInfo, setCertInfo] = useState<CertificateApiResponse>(null);

	useEffect(()=>{

		if (certId === null) return;
		fetch(`/api/open/certificate?cert=${certId}`)
			.then(r => r.json())
			.then(v => {
				setCertInfo(v);
			});

	}, [certId]);

	if (query['cert'] && certId !== query['cert']){
		setCertId(query['cert']);
	}

	return (
		<MainLayout siteTheme={siteTheme} pageTitle={"Verify Certificate"}>
			{(certId === null || certInfo === null) && (
				<ContentContainer fullHeight={true}>
					<PlaceholderText title={"VERIFY"} />

					<form action="" method="GET" className={certStyles.form}>
						<label className="input">
							<span>Please enter your certificate identifier to continue</span>
							<input name="cert" />
						</label>

						<button type="submit">View</button>
					</form>
				</ContentContainer>
			)}

			{(certId !== null && certInfo?.certificateFound === false) && (
				<ContentContainer fullHeight={true}>
					<PlaceholderText title={"Certificate Not found"}>
						<p>Think that's incorrect? Get in touch with us (<Anchor
							isExternal={true}
							href={"https://twitter.com/messages/compose?recipient_id=1075373010515824640&text=Hey%20there"}
						>@ProjectFunction</Anchor>)</p>
					</PlaceholderText>
				</ContentContainer>
			)}

			{certInfo?.certificateFound && (
				<ContentContainer fullHeight={true}>
					<PlaceholderText title={"CERTIFICATE"} >
						<p>
							Granted to: <strong>{certInfo?.data.owner.firstName} {certInfo?.data.owner.lastName}</strong>
							<br/>
							Valid From: <strong>{dateFormat(certInfo?.data.grantedOn, "Dx MMM YYYY")}</strong>
							{certInfo?.data.expiry && (
								<>
									<br/>
									Valid Until: <strong>{dateFormat(certInfo?.data.expiry, "Dx MMM YYYY")}</strong>
								</>
							)}
						</p>
						<br/>
						<br/>

						<img className={certStyles.preview} src={`/resources${certInfo?.data.previewUrl}`} alt={"Certificate preview"}/>

						<br/>

						<p><Anchor href={`/resources${certInfo?.data.certUrl}`}>Download Certificate</Anchor></p>

						<br/>
						<br/>

					</PlaceholderText>

				</ContentContainer>
			)}
		</MainLayout>
	)
}