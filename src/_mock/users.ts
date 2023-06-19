import { faker } from "@faker-js/faker";
import { sample } from "lodash";
import { UserType } from "../types";

export const users: UserType[] = [...Array(90)].map(() => ({
  id: faker.string.uuid(),
  avatar: faker.image.avatar(),
  name: faker.person.fullName(),
  company: faker.company.name(),
  isVerified: faker.datatype.boolean(),
  status: sample(["active", "banned"]),
  role: sample([
    "Leader",
    "Hr Manager",
    "UI Designer",
    "UX Designer",
    "UI/UX Designer",
    "Project Manager",
    "Backend Developer",
    "Full Stack Designer",
    "Front End Developer",
    "Full Stack Developer",
  ]),
}));
