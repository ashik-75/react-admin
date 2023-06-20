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
