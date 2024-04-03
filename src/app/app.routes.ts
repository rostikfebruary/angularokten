import { Routes } from '@angular/router';
import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";
import {UserPageComponent} from "./pages/user-page/user-page.component";
import {UserDetailsPageComponent} from "./pages/user-details-page/user-details-page.component";
import {PostPageComponent} from "./pages/post-page/post-page.component";
import {userDetailsResolver} from "./services/resolvers/user-details.resolver";


export const routes: Routes = [
  {
    path:'', component:MainLayoutComponent, children:[
      {path:'', redirectTo:'users', pathMatch:'full'},
      {
        path:'users', component:UserPageComponent, children:[
          {path:':id',resolve:{userData:userDetailsResolver}, component:UserDetailsPageComponent}
        ]
      },
      {
        path:'posts', component:PostPageComponent
      }
    ]
  }
];
