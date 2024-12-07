// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterModule } from '@angular/router';
// import { NavbarComponent } from '../navbar/navbar.component';

// @Component({
//   selector: 'app-client',
//   standalone: true,
//   imports: [CommonModule, RouterModule, NavbarComponent],
//   template: `
//     <app-navbar [isLoggedIn]="true"></app-navbar>
//     <div class="client-container">
//       <div class="stats-header">
//         <div class="stat-card">
//           <h3>Total Posts</h3>
//           <p class="stat-value">24</p>
//           <p class="stat-change positive">+3 this week</p>
//         </div>
//         <div class="stat-card">
//           <h3>Active Tasks</h3>
//           <p class="stat-value">12</p>
//           <p class="stat-change">Currently in progress</p>
//         </div>
//         <div class="stat-card">
//           <h3>Completed Tasks</h3>
//           <p class="stat-value">156</p>
//           <p class="stat-change positive">92% success rate</p>
//         </div>
//       </div>

//       <div class="content-section">
//         <div class="section-header">
//           <h2>Your Posts</h2>
//           <button class="new-post-btn" routerLink="/posts/new">Create New Post</button>
//         </div>

//         <div class="posts-table">
//           <table>
//             <thead>
//               <tr>
//                 <th>Task Name</th>
//                 <th>Category</th>
//                 <th>Points</th>
//                 <th>Submissions</th>
//                 <th>Status</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr *ngFor="let i of [1,2,3,4,5]">
//                 <td>Task {{i}}</td>
//                 <td>
//                   <span class="category-tag">Frontend</span>
//                 </td>
//                 <td>50</td>
//                 <td>12</td>
//                 <td>
//                   <span class="status-tag active">Active</span>
//                 </td>
//                 <td>
//                   <button class="action-btn edit">Edit</button>
//                   <button class="action-btn delete">Delete</button>
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   `,
//   styles: [`
//     .client-container {
//       padding: 2rem;
//       min-height: calc(100vh - 64px);
//       background: #f8fafc;
//     }

//     .stats-header {
//       display: grid;
//       grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
//       gap: 1.5rem;
//       margin-bottom: 2rem;
//     }

//     .stat-card {
//       background: white;
//       padding: 1.5rem;
//       border-radius: 8px;
//       box-shadow: 0 2px 4px rgba(0,0,0,0.1);
//     }

//     .stat-value {
//       font-size: 2rem;
//       font-weight: bold;
//       color: #1e293b;
//       margin: 0.5rem 0;
//     }

//     .stat-change {
//       font-size: 0.875rem;
//       color: #64748b;
//     }

//     .stat-change.positive {
//       color: #10b981;
//     }

//     .content-section {
//       background: white;
//       padding: 1.5rem;
//       border-radius: 8px;
//       box-shadow: 0 2px 4px rgba(0,0,0,0.1);
//     }

//     .section-header {
//       display: flex;
//       justify-content: space-between;
//       align-items: center;
//       margin-bottom: 2rem;
//     }

//     .new-post-btn {
//       padding: 0.75rem 1.5rem;
//       background: #6366f1;
//       color: white;
//       border: none;
//       border-radius: 4px;
//       cursor: pointer;
//     }

//     .posts-table {
//       overflow-x: auto;
//     }

//     table {
//       width: 100%;
//       border-collapse: collapse;
//     }

//     th, td {
//       padding: 1rem;
//       text-align: left;
//       border-bottom: 1px solid #e2e8f0;
//     }

//     th {
//       background: #f8fafc;
//       color: #64748b;
//       font-weight: 500;
//     }

//     .category-tag {
//       background: #e2e8f0;
//       padding: 0.25rem 0.75rem;
//       border-radius: 9999px;
//       font-size: 0.875rem;
//     }

//     .status-tag {
//       padding: 0.25rem 0.75rem;
//       border-radius: 9999px;
//       font-size: 0.875rem;
//     }

//     .status-tag.active {
//       background: #dcfce7;
//       color: #10b981;
//     }

//     .action-btn {
//       padding: 0.5rem 1rem;
//       border: none;
//       border-radius: 4px;
//       cursor: pointer;
//       margin-right: 0.5rem;
//     }

//     .action-btn.edit {
//       background: #6366f1;
//       color: white;
//     }

//     .action-btn.delete {
//       background: #ef4444;
//       color: white;
//     }
//   `]
// })
// export class ClientComponent {}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent],
  templateUrl: "./client.html",
  styleUrls: ["./client.css"],
})
export class ClientComponent {
  // Example static data
  totalPosts = 24;
  activeTasks = 12;
  completedTasks = 156;
  successRate = 92;
  newPostsThisWeek = 3;

  // Example task data
  tasks = [
    { id: 1, name: 'Task 1', category: 'Frontend', points: 50, submissions: 12, status: 'Active' },
    { id: 2, name: 'Task 2', category: 'Backend', points: 30, submissions: 8, status: 'Completed' },
    { id: 3, name: 'Task 3', category: 'Design', points: 40, submissions: 15, status: 'Active' },
    { id: 4, name: 'Task 4', category: 'Frontend', points: 20, submissions: 5, status: 'Pending' },
    { id: 5, name: 'Task 5', category: 'Backend', points: 60, submissions: 10, status: 'Active' },
  ];

  // Event handlers for Edit and Delete actions
  editPost(id: number) {
    // Navigate to the post edit page or handle edit logic
    console.log(`Editing post with id: ${id}`);
  }

  deletePost(id: number) {
    // Confirm and delete the post
    const index = this.tasks.findIndex(task => task.id === id);
    if (index > -1) {
      this.tasks.splice(index, 1);
      console.log(`Deleted post with id: ${id}`);
    }
  }
}
