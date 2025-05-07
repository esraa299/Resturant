import { Routes } from '@angular/router';
import { HeroComponent } from './features/pages/hero/hero.component';
import { AboutComponent } from './features/pages/about/about.component';
import { BookingComponent } from './features/pages/booking/booking.component';
import { ChefsComponent } from './features/pages/chefs/chefs.component';
import { ContactComponent } from './features/pages/contact/contact.component';
import { EventsComponent } from './features/pages/events/events.component';
import { GalleryComponent } from './features/pages/gallery/gallery.component';
import { MenuComponent } from './features/pages/menu/menu.component';
import { StatsComponent } from './features/pages/stats/stats.component';
import { TestimonialsComponent } from './features/pages/testimonials/testimonials.component';
import { WhyusComponent } from './features/pages/whyus/whyus.component';

export const routes: Routes = [
    {
        path:'home',
        component:HeroComponent,
        title:"Mr. Burger | Home"
    },
    {
        path:"about",
        component:AboutComponent,
        title:"Mr. Burger | About"
    },
    {
        path:"booking",
        component:BookingComponent,
        title:"Mr. Burger | Booking"
    },
    {
        path:"chefs",
        component:ChefsComponent,
        title:"Mr. Burger | Chefs"
    },
    {
        path:"contact",
        component:ContactComponent,
        title:"Mr. Burger | contact"
    },
    {
        path:"events",
        component:EventsComponent,
        title:"Mr. Burger | events"
    },
    {
        path:"gallery",
        component:GalleryComponent,
        title:"Mr. Burger | Gallery"
    },
    {
        path:"menu",
        component:MenuComponent,
        title:"Mr. Burger | Menu"
    },
    {
        path:"Stats",
        component:StatsComponent,
        title:"Mr. Burger | Stats"
    },
    {
        path:"testimonials",
        component:TestimonialsComponent,
        title:"Mr. Burger | Testimonials"
    },
    {
        path:"whyus",
        component:WhyusComponent,
        title:"Mr. Burger | WhyUs"
    },
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    },
    {
        path:"**",
        redirectTo:'home',
        pathMatch:'full'
    },
];
