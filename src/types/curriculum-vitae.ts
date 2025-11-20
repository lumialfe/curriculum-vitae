export interface CurriculumVitae {
intro: string;
experience: Array<Experience>;
studies: Array<Study>;
languages: Array<Language>;
skills: {
technical: string[];
soft: string[];
};
}

export interface TimePeriod {
startDate: Date;
endDate: Date | undefined;
}

export interface Experience {
title: string;
company: string;
timePeriod: TimePeriod;
responsibilities: string[];
techStack: string[];
}

export interface Study {
degree: string;
credits: number;
institution: string;
timePeriod: TimePeriod;
focus: string[];
finalProject: string;
}

export interface Language {
language: string;
level: string;
}