import { useEffect } from "react";
import { useDynamicContext } from "@dynamic-labs/sdk-react";

function Home() {
  const { setShowAuthFlow, handleLogOut, showAuthFlow, user } =
    useDynamicContext();

  useEffect(() => {
    if (!showAuthFlow && !user) {
      setShowAuthFlow(true);
    }

    if (user) {
      handleLogOut();
    }
  }, [showAuthFlow, setShowAuthFlow, user, handleLogOut]);

  return <></>;
}

export default Home;
