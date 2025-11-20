export interface PersonalData {
name: {
firstName: string;
lastNames: string[];
nickname?: string;
}
title: string;
birthDate?: Date;
location: Location;
contact: ContactInformation;
}

export interface Location {
city: string;
country: string;
}

export interface ContactInformation {
email: string;
phone?: {
countryCode?: number;
number: string;
};
linkedin?: string;
github?: string;
website?: string;
}