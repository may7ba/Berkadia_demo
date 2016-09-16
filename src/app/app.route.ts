import { IntroductionComponent } from "./introduction/introduction.component";
import { CardGameComponent } from "./card-game/card-game.component";
import { JokesComponent } from "./jokes/jokes.component";
import { MovieComponent } from "./movie/movie.component";
import { Routes } from "@angular/router";

export const appRoutes: Routes = [
    { path: 'movie', component: MovieComponent },
    { path: 'aboutme', component: IntroductionComponent },
    { path: 'card-game', component: CardGameComponent },
    { path: 'joke', component: JokesComponent },
    { path: '**', component: IntroductionComponent }
];