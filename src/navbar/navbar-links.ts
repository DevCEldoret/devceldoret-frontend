export const navbarLinks: NavBarLinks[] = [
  {
    name: "Home",
    url: "/"
  },
  {
    name: "Events",
    url: "/events"
  },
  {
    name: "University",
    url: "/university"
  },
  {
    name: "Opportunities",
    url: "/opportunities"
  },
  {
    name: "Blog",
    url: "/blog"
  }
];

type NavBarLinks = {
  name: string;
  url: string;
};
