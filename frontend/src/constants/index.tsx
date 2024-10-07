export enum JOB_TYPE {
  FullTime = "Full-time",
  Contract = "Contract",
  InternShip = "Internship",
  PartTime = "Part-time",
  Temporary = "Temporary",
}

export enum WORK_MODE {
  OnSite = "On-site",
  Remote = "Remote",
  Hybrid = "Hybrid",
}

export interface FILTER {
  datePosted: string;
  jobType: JOB_TYPE[];
  workMode: WORK_MODE[];
}
