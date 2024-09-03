import Link from "next/link";
import React from "react";
import { FaHome } from "react-icons/fa";
import { Button } from "@nextui-org/react";

export default function MembersPage() {
  return (
    <div>
      <h3 className="text-3xl">This is Memberpage</h3>

      <Button
        as={Link}
        href="/"
        color="primary"
        variant="bordered"
        startContent={<FaHome size={20} />}
      >
        Go back Home edite2
      </Button>
    </div>
  );
}
