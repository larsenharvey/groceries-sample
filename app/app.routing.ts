import { AuthGuard } from "./auth-guard.service";
import { GroceriesComponent } from "./groceries/groceries.component";
import { MenuComponent } from "./shared/menu/menu.component";



export const authProviders = [
  AuthGuard
];

export const AppRoutes = [
  { path: "", redirectTo: "/groceries", pathMatch: "full" },
];


export const AppComponents: any = [
    GroceriesComponent,
    MenuComponent
];
