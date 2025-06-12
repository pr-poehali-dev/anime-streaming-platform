import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User, LogOut, Settings } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import AuthDialog from "./AuthDialog";
import AdminPanel from "./AdminPanel";

const AuthButtons = () => {
  const { user, logout, isAdmin } = useAuth();

  if (!user) {
    return (
      <AuthDialog>
        <Button
          variant="ghost"
          size="icon"
          className="text-gray-300 hover:text-white"
        >
          <User className="w-5 h-5" />
        </Button>
      </AuthDialog>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="text-gray-300 hover:text-white"
        >
          <User className="w-5 h-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="bg-gray-900 border-gray-800 text-white"
        align="end"
      >
        <div className="px-2 py-1.5 text-sm">
          <div className="font-medium">{user.username}</div>
          {isAdmin && (
            <div className="text-xs text-purple-400">Администратор</div>
          )}
        </div>
        <DropdownMenuSeparator className="bg-gray-800" />
        {isAdmin && (
          <>
            <AdminPanel>
              <DropdownMenuItem className="cursor-pointer hover:bg-gray-800">
                <Settings className="w-4 h-4 mr-2" />
                Админ-панель
              </DropdownMenuItem>
            </AdminPanel>
            <DropdownMenuSeparator className="bg-gray-800" />
          </>
        )}
        <DropdownMenuItem
          onClick={logout}
          className="cursor-pointer hover:bg-gray-800 text-red-400"
        >
          <LogOut className="w-4 h-4 mr-2" />
          Выйти
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AuthButtons;
