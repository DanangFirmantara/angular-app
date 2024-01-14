import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { DetailsComponent } from "./details/details.component";
import { AboutComponent } from "./about/about.component";
import { FillDotsComponent } from "./fill-dots/fill-dots.component";
import { MovementDotComponent } from "./movement-dot/movement-dot.component";
import { MagicButtonsComponent } from "./magic-buttons/magic-buttons.component";


const routeConfig: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home Page'
    },
    {
        path: 'details/:id',
        component: DetailsComponent,
        title: 'Home Details'
    },
    {
        path: 'about',
        component: AboutComponent,
        title: "About"
    },
    {
        path: 'fill-dots',
        component: FillDotsComponent,
        title: "Fill Dots"
    },
    {
        path: 'movement-dot',
        component: MovementDotComponent,
        title: "Movement Dot"
    },
    {
        path: 'magic-buttons',
        component: MagicButtonsComponent,
        title: "Magic Buttons"
    }
]

export default routeConfig;