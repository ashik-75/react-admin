export interface UserType {
  id: string;
  avatar: string;
  name: string;
  company: string;
  isVerified: boolean;
  status?: string;
  role?: string;
}

export interface ProductType {
  id: string;
  image: string;
  title: string;
  createdAt: Date;
  stock: number;
  price: number;
  status?: string;
}

export interface BlogType {
  id: string;
  image: string;
  createdAt: Date;
  view: number;
  share: number;
  title: string;
  comment: number;
  favourite: number;
  status?: string;
  author: {
    avatar: string;
    name: string;
  };
}
