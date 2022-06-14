import { Component} from "@angular/core";
import { Hero } from "../model/hero";

@Component({
    selector: 'app-hero-form',
    templateUrl: './hero-form.component.html',
    styleUrls: ['./hero-form.component.css']
})

export class HeroFormComponent {
    powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

    model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

    submitted = false;

    onSubmit() { this.submitted = true; }

    // Hero creation method
    newHero() {
        this.model = new Hero(42, '', '', '');
    }

    // Define a function return SkyDog hero
    skyDog(): Hero {
        const skyDog = new Hero(42, 'SkyDog', 'Fetch any object at any distance', 'Leslie Rollover');
        console.log('My hero is called ' + skyDog.name);
        
        return skyDog;
    }
    




}