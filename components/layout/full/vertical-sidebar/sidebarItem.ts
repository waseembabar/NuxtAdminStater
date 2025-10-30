export interface menu {
  header?: string;
  title?: string;
  icon?: any;
  to?: string;
  chip?: string;
  BgColor?: string;
  chipBgColor?: string;
  chipColor?: string;
  chipVariant?: string;
  chipIcon?: string;
  children?: menu[];
  disabled?: boolean;
  type?: string;
  subCaption?: string;
  external?: boolean;
}

const sidebarItem: menu[] = [
  { header: "Home" },
  {
    title: "Dashboard",
    icon: "adhesive-plaster-outline",
    to: "/",
  },
  
   
  
  // {
  //   title: "Front Pages",
  //   icon: "home-angle-linear",
  //   to: "/front",
  //   children: [
  //     {
  //       title: "Homepage",
  //       to: "https://matdash-nuxt-main.netlify.app/front-pages/homepage",
  //       chip: "Pro",
  //       external: true,
  //     },
  //     {
  //       title: "About Us",
  //       to: "https://matdash-nuxt-main.netlify.app/front-pages/about-us",
  //       chip: "Pro",
  //       external: true,
  //     },
  //     {
  //       title: "Blog",
  //       to: "https://matdash-nuxt-main.netlify.app/front-pages/blog/posts",
  //       chip: "Pro",
  //       external: true,
  //     },
  //     {
  //       title: "Blog Details",
  //       to: "https://matdash-nuxt-main.netlify.app/front-pages/blog/early-black-friday-amazon-deals-cheap-tvs-headphones",
  //       chip: "Pro",
  //       external: true,
  //     },
  //     {
  //       title: "Contact Us",
  //       to: "https://matdash-nuxt-main.netlify.app/front-pages/contact-us",
  //       chip: "Pro",
  //       external: true,
  //     },
  //     {
  //       title: "Portfolio",
  //       to: "https://matdash-nuxt-main.netlify.app/front-pages/portfolio",
  //       chip: "Pro",
  //       external: true,
  //     },
  //     {
  //       title: "Pricing",
  //       to: "https://matdash-nuxt-main.netlify.app/front-pages/pricing",
  //       chip: "Pro",
  //       external: true,
  //     },
  //   ],
  // },
  
 
   
  // { header: "Apps" },
  // {
  //   title: "ECommerce",
  //   icon: "cart-3-line-duotone",
  //   to: "/ecommerce",
  //   children: [
  //     {
  //       title: "Shop",
  //       to: "https://matdash-nuxt-main.netlify.app/apps/ecommerce/products",
  //       chip: "Pro",
  //       external: true,
  //     },
  //     {
  //       title: "Detail",
  //       to: "https://matdash-nuxt-main.netlify.app/apps/ecommerce/product/detail/1",
  //       chip: "Pro",
  //       external: true,
  //     },
  //     {
  //       title: "List",
  //       to: "https://matdash-nuxt-main.netlify.app/apps/ecommerce/productlist",
  //       chip: "Pro",
  //       external: true,
  //     },
  //     {
  //       title: "Checkout",
  //       to: "https://matdash-nuxt-main.netlify.app/apps/ecommerce/checkout",
  //       chip: "Pro",
  //       external: true,
  //     },
  //     {
  //       title: "Add Product",
  //       to: "https://matdash-nuxt-main.netlify.app/apps/ecommerce/add-product",
  //       chip: "Pro",
  //       external: true,
  //     },
  //     {
  //       title: "Edit Product",
  //       to: "https://matdash-nuxt-main.netlify.app/apps/ecommerce/edit-product",
  //       chip: "Pro",
  //       external: true,
  //     },
  //   ],
  // },
  
   
];

export default sidebarItem;
