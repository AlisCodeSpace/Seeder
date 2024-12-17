import {
  Briefcase05Icon,
  Building06Icon,
  UserIcon,
  Calendar03Icon,
  Login03Icon,
} from "../assets/icons/Icons";

const navlinks = [
  {
    path: "/jobs",
    icon: Briefcase05Icon, // Reference to the component
    text: "Jobs",
  },
  {
    path: "/companies",
    icon: Building06Icon,
    text: "Companies",
  },
  {
    path: "/applications",
    icon: Calendar03Icon,
    text: "Apps",
  },
  {
    path: "/profile",
    icon: UserIcon,
    text: "Profile",
  },
  {
    path: "/login",
    icon: Login03Icon,
    text: "Login",
  },
];

export default navlinks;
