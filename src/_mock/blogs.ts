import { faker } from "@faker-js/faker";
import { sample } from "lodash";
import { BlogType } from "../types";

const blogs: BlogType[] = [...Array(50)].map((id) => ({
  id: faker.string.uuid(),
  title: faker.lorem.sentence(5),
  comment: faker.number.float({ precision: 0.01 }),
  view: faker.number.float({ precision: 0.01 }),
  share: faker.number.float({ precision: 0.01 }),
  favourite: faker.number.int(),
  createdAt: faker.date.past(),
  status: sample(["published", "draft"]),
  image: faker.image.urlLoremFlickr({
    category: "nature",
    width: 350,
    height: 300,
  }),
  author: {
    avatar: faker.image.avatar(),
    name: faker.person.fullName(),
  },
}));

export default blogs;
