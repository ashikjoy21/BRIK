"use client";

import { Button } from "@/components/ui/button";

interface InviteButtonProps {
  variant?: "default" | "secondary";
  className?: string;
}

export default function InviteButton({ variant = "default", className = "" }: InviteButtonProps) {
  const handleClick = () => {
    window.open("https://makemypass.com/event/brikcommunity", "_blank");
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
