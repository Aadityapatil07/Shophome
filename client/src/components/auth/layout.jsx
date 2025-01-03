import { Outlet } from "react-router-dom";
import { HousePlug } from "lucide-react";

function AuthLayout() {
  return (
    <div className="flex min-h-screen w-full">
      <div className="hidden lg:flex items-center justify-center bg-black w-1/2 px-12">
        <div className="max-w-md text-center space-y-6 left-10  text-primary-foreground">
           <div className="flex justify-center">
            <HousePlug className="h-16 w-16"/>
            </div>
          <h1 className="text-4xl font-extrabold tracking-tight">
            Welcome to Shophome
          </h1>
          
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;