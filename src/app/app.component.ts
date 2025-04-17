import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SubscriptionPlanComponent } from './subscription-plan/subscription-plan.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SubscriptionPlanComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'biznify-subscription-plan';
}
