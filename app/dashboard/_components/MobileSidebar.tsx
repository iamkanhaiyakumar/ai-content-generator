import { Button } from "@/components/ui/button";
import SideNav from "./SideNav";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className="lg:hidden text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          aria-label="Toggle navigation menu"
        >
          <Menu className="h-6 w-6" aria-hidden="true" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-64 p-0">
        <SideNav />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
