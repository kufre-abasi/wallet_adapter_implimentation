import React, { useEffect, useState } from 'react';
import { useAccount } from '@puzzlehq/sdk';
import WelcomeScreen from '../ui/WelcomeScreen';
interface DefualtLayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: DefualtLayoutProps) => {
  const [isConnected, setIsConnected] = useState(false);
  const { account } = useAccount();
  
useEffect(() => {
  setIsConnected(!!account);
}, [account]);


  return (
    <>
      {isConnected ? (
        <div className="flex bg-[#e3e3e3] p-4 gap-4 max-h-screen h-screen overflow-hidden">
          <div className=" h-full overflow-hidden w-full">{children}</div>
        </div>
      ) : (
        <div className="flex bg-[#12141d] p-4 gap-4 max-h-screen h-screen overflow-hidden">
          <WelcomeScreen />
        </div>
      )}
    </>
  );
};

export default Layout;
