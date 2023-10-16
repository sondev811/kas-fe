import { Coords } from "google-map-react";

export interface INavbar {
  link: string;
  name: string;
}

export interface ILocation {
  lat: number;
  lng: number;
  name: string;
}

export interface IQuotingForm {
  fullName: string;
  address: string;
  email: string;
  phoneNumber: string;
  registration: string;
  service: string;
  comments: string;
}

export interface IAboutUsContent {
  type: string;
  content: string;
}

export interface IAboutUs {
  name: string;
  content: IAboutUsContent[];
  bookUrl: string;
  findMoreUrl: string;
  backgroundImage: string;
}
