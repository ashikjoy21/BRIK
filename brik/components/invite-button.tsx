"use client";

import { Button } from "@/components/ui/button";

interface InviteButtonProps {
  variant?: "default" | "secondary";
  className?: string;
}

export default function InviteButton({ variant = "default", className = "" }: InviteButtonProps) {
  const handleClick = () => {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSfQ2IjEDG5HrcsbwqCQRWQ4k_cb2jlgf_PUBgs5iLBI0BT1Pw/viewform?usp=sharing", "_blank");
  };

  return (
    <Button
      size="lg"
      variant={variant}
      className={className}
      onClick={handleClick}
    >
      Request Invite
    </Button>
  );
}
