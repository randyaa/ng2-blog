import {Person} from "../person/person.model";

export interface Post {
  title:string;
  body:string;
  author:Person;
}
