import { IconProps } from "./types";

const LocationIcon = ({className, width = 16, height = 20}: IconProps) => {
  return (
	<svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 16 20" fill="currentColor" className={className}>
	<path d="M9 7.219C9 8.324 8.105 9.219 7 9.219 5.895 9.219 5 8.324 5 7.219 5 6.114 5.895 5.219 7 5.219 8.105 5.219 9 6.114 9 7.219ZM7 17C7 17 2 10 2 7 2 4.243 4.243 2 7 2 9.757 2 12 4.243 12 7 12 10 7 17 7 17ZM7 0C3.134 0 0 3.134 0 7 0 10.866 7 20 7 20S14 10.866 14 7C14 3.134 10.866 0 7 0Z"/>
	</svg>
  )
};

export { LocationIcon };