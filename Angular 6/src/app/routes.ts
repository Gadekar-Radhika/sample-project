import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
// import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuard } from './auth/auth.guard';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminComponent } from './components/admin/admin.component';
// import { ProductDetails } from './components/admin/shared/product-details.model';
import { ProductCURDComponent } from './components/admin/product-curd/product-curd.component';
export const appRoutes: Routes = [
    {
        path: 'signup', component: UserComponent,
        children: [{ path: '', component: SignUpComponent }]
    },
    {
        path: 'login', component: UserComponent,
        children: [{ path: '', component: SignInComponent }]
    },
    // {
    //     path: 'userprofile', component: UserProfileComponent,canActivate:[AuthGuard]
    // },
    {
        path: 'adminDashboard', component: AdminComponent,canActivate:[AuthGuard],
       
    },
    {
        path: 'productDetails' , component: ProductCURDComponent,canActivate:[AuthGuard],
    },
    
    {
        path:'home' , component:NavbarComponent
    },
    {
        path:'', redirectTo:'/home' , pathMatch:'full'
    }
];