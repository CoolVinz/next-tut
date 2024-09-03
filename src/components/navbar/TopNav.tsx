import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { GiMatchTip } from "react-icons/gi";
import NavLink from "./NavLink";

export default function TopNav() {
  return (
    <Navbar
      maxWidth="xl"
      className="bg-gradient-to-r from-orange-300 to-orange-500"
      classNames={{
        item: [
          "text-xl",
          "text-white",
          "uppercase",
          "data-[active=true]:text-gray-500",
        ],
      }}
    >
      <NavbarBrand as={Link} href={"/"}>
        <GiMatchTip size={40} />
        <div className="text-3xl font-bold flex">
          <span className="text-gray-900">Next</span>
          <span className="text-gray-600">Match</span>
        </div>
      </NavbarBrand>
      <NavbarContent justify="center">
        <NavLink href={"/members"} label="Match" />
        <NavLink href={"/lists"} label="List" />
        <NavLink href={"/messages"} label="Messages" />
      </NavbarContent>
      <NavbarContent justify="end">
        <Button as={Link} href={"/login"} color="warning" variant="bordered">
          Login
        </Button>
        <Button as={Link} href={"/register"} color="warning" variant="bordered">
          Register
        </Button>
      </NavbarContent>
    </Navbar>
  );
}
