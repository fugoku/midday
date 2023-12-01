"use client";

import { createClient } from "@midday/supabase/client";
import { Button } from "@midday/ui/button";
import { Icons } from "@midday/ui/icons";

export function SlackSignIn() {
  const supabase = createClient();

  const handleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "slack",
      options: {
        redirectTo: `${location.origin}/api/auth/callback?provider=slack`,
      },
    });
  };

  return (
    <Button
      onClick={handleSignIn}
      className="active:scale-[0.98] rounded-xl bg-primary px-6 py-4 text-secondary font-medium flex space-x-2 h-[40px] w-full"
    >
      <Icons.Slack />
      <span>Continue with Slack</span>
    </Button>
  );
}
