import {LocationIcon, PhoneIcon} from "@/src/assets";
import {PersonalData} from "@/src/types";
import {formatPhoneNumber} from "@/src/utils";

export interface HeaderProps extends PersonalData {
		image: string;
		showNickname?: boolean;
}

const Header = ({
	image,
	name,
	showNickname = false,
	title,
	location,
	contact
}: HeaderProps) => {
	return (
		<header className="flex items-center justify-between w-full px-5 py-4 bg-red-500">
		<div className="flex items-center gap-8">
		<div className="w-30 h-30 min-w-30 min-h-30 rounded-[5000px] bg-background overflow-hidden cursor-pointer transition hover:scale-200 hover:translate-15">
		<img src={image} alt="Profile Picture" className="w-full h-full object-cover scale-250 translate-y-2 -translate-x-1" />
		</div>
		<span className="flex flex-col items-start justify-around gap-2">
         <h1>{`${name.firstName} ${name.lastNames.join(' ')}`} {showNickname && name.nickname && `(${name.nickname})`}</h1>
         <h2>{title}</h2>
       </span>
		</div>
		<span className="flex items-end gap-6">
         <span className="flex items-center gap-2"><LocationIcon />{`${location.city}, ${location.country}`}</span>
         <span className="flex items-center gap-2"><PhoneIcon />{contact.phone && formatPhoneNumber(contact.phone.countryCode, contact.phone.number)}</span>
         <span className="flex items-center gap-2"><a href="mailto:lumialfe@hotmail.com">lumialfe@hotmail.com</a></span>
         <span className="flex items-center gap-2">LinkedIn</span>
         <span className="flex items-center gap-2">GitHub</span>
       </span>
		</header>
	)
}

export { Header }