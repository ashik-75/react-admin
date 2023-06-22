import { faker } from "@faker-js/faker";
import { sample } from "lodash";
import { ProductType } from "../types";

export const products: ProductType[] = [...Array(100)].map((_, index) => ({
  id: faker.string.uuid(),
  title: faker.commerce.productName(),
  image: faker.image.urlPicsumPhotos({
    width: 100,
    height: 100,
  }),
  price: faker.number.float({ min: 10, max: 999, precision: 0.01 }),
  createdAt: faker.date.past(),
  status: sample(["published", "draft"]),
  stock: faker.number.int({ min: 10, max: 100 }),
}));
