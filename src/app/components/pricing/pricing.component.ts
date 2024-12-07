import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [NavbarComponent],
  template: `
    <app-navbar [isLoggedIn]="false"></app-navbar>
    <div class="pricing-container">
      <h1>Choose Your Plan</h1>
      <div class="pricing-cards">
        <div class="pricing-card">
          <h2>Free Plan</h2>
          <div class="price">25 Tokens</div>
          <ul>
            <li>Basic Task Access</li>
            <li>Community Support</li>
            <li>Basic Analytics</li>
          </ul>
          <button class="free-btn">Get Started</button>
        </div>
        
        <div class="pricing-card popular">
          <div class="popular-badge">Most Popular</div>
          <h2>Premium Plan</h2>
          <div class="price">50 Tokens</div>
          <p class="subtitle">25 Free + 25 Paid</p>
          <ul>
            <li>All Free Features</li>
            <li>Priority Support</li>
            <li>Advanced Analytics</li>
            <li>Custom Badge</li>
          </ul>
          <button class="subscribe-btn">Subscribe Now</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .pricing-container {
      padding: 100px 2rem 2rem;
      min-height: 100vh;
      background: #f8fafc;
      text-align: center;
    }
    h1 {
      margin-bottom: 3rem;
      color: #1e293b;
    }
    .pricing-cards {
      display: flex;
      justify-content: center;
      gap: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }
    .pricing-card {
      background: white;
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      width: 300px;
      position: relative;
    }
    .popular {
      transform: scale(1.05);
      border: 2px solid #6366f1;
    }
    .popular-badge {
      position: absolute;
      top: -12px;
      left: 50%;
      transform: translateX(-50%);
      background: #6366f1;
      color: white;
      padding: 0.5rem 1rem;
      border-radius: 20px;
      font-size: 0.875rem;
    }
    .price {
      font-size: 2rem;
      font-weight: bold;
      margin: 1rem 0;
      color: #1e293b;
    }
    .subtitle {
      color: #64748b;
      margin-bottom: 1rem;
    }
    ul {
      list-style: none;
      margin: 1.5rem 0;
      text-align: left;
    }
    li {
      margin-bottom: 0.5rem;
      padding-left: 1.5rem;
      position: relative;
    }
    li:before {
      content: "✓";
      position: absolute;
      left: 0;
      color: #6366f1;
    }
    button {
      width: 100%;
      padding: 0.75rem;
      border: none;
      border-radius: 4px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    .free-btn {
      background: #e2e8f0;
      color: #1e293b;
    }
    .free-btn:hover {
      background: #cbd5e1;
    }
    .subscribe-btn {
      background: #6366f1;
      color: white;
    }
    .subscribe-btn:hover {
      background: #4f46e5;
    }
  `]
})
export class PricingComponent {}