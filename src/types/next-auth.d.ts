// my-project/types/next-auth.d.ts

import NextAuth from "next-auth";
import ProductType from "./ProductType";
interface _doc {
  cart: ProductType[];
  _id: string;
}
declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    accessToken?: string;
    user: DefaultSession["user"] & {
      _doc: _doc;
    };
  }
}

// cart
// :
// (12) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// email
// :
// "ungabonga@unga.com"
// password
// :
// "$2b$05$KF4zs8NIcztZkQyQoZBK.O6cd2/SRl3O8Z1Qb2/HtVubjXg2Ea/mm"
// role
// :
// "user"
// username
// :
// "exampleuser"
// __v
// :
// 0
// _id
// :
// "64db7e247cfb32db50c25b76"
