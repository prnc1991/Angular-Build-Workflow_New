import { Component } from '@angular/core';

interface SkillGroup {
  category: string;
  skills: string[];
}

interface ExperienceItem {
  role: string;
  org: string;
  period: string;
  highlights: string[];
}

interface Certification {
  name: string;
  status: 'Certified' | 'In Progress';
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  template: `
    <div class="dashboard">
      <header class="profile-header">
        <img class="avatar" src="profile.png" alt="Prince Kumar" />
        <div class="profile-info">
          <h1>Prince Kumar</h1>
          <p class="role">IT Infrastructure &amp; Cloud Operations Specialist</p>
          <p class="location">📍 Noida, India · 15+ years in IT Ops</p>
          <div class="tags">
            @for (tag of focusAreas; track tag) {
              <span class="tag">{{ tag }}</span>
            }
          </div>
        </div>
      </header>

      <section class="stats">
        <div class="stat-card">
          <span class="stat-num">15+</span>
          <span class="stat-label">Years Experience</span>
        </div>
        <div class="stat-card">
          <span class="stat-num">1000+</span>
          <span class="stat-label">Hosts Monitored (Zabbix)</span>
        </div>
        <div class="stat-card">
          <span class="stat-num">2</span>
          <span class="stat-label">Certifications</span>
        </div>
        <div class="stat-card">
          <span class="stat-num">1</span>
          <span class="stat-label">Cert In Progress</span>
        </div>
      </section>

      <section class="grid">
        <div class="panel">
          <h2>Experience</h2>
          @for (exp of experience; track exp.role) {
            <div class="exp-item">
              <div class="exp-top">
                <strong>{{ exp.role }}</strong>
                <span class="period">{{ exp.period }}</span>
              </div>
              <p class="org">{{ exp.org }}</p>
              <ul>
                @for (h of exp.highlights; track h) {
                  <li>{{ h }}</li>
                }
              </ul>
            </div>
          }
        </div>

        <div class="panel">
          <h2>Skills</h2>
          @for (group of skillGroups; track group.category) {
            <div class="skill-group">
              <h3>{{ group.category }}</h3>
              <div class="chips">
                @for (s of group.skills; track s) {
                  <span class="chip">{{ s }}</span>
                }
              </div>
            </div>
          }

          <h2>Certifications</h2>
          <div class="certs">
            @for (cert of certifications; track cert.name) {
              <div class="cert-row">
                <span>{{ cert.name }}</span>
                <span class="badge" [class.progress]="cert.status === 'In Progress'">
                  {{ cert.status }}
                </span>
              </div>
            }
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .dashboard { max-width: 900px; margin: 0 auto; padding: 32px 24px 60px; font-family: Arial, sans-serif; color: #1d1d1f; }

    .profile-header { display: flex; align-items: center; gap: 24px; margin-bottom: 32px; flex-wrap: wrap; }
    .avatar { width: 110px; height: 110px; border-radius: 50%; object-fit: cover; border: 3px solid #1976d2; }
    .profile-info h1 { margin: 0 0 4px; font-size: 26px; }
    .role { margin: 0 0 4px; color: #444; font-weight: 600; }
    .location { margin: 0 0 10px; color: #777; font-size: 14px; }
    .tags { display: flex; flex-wrap: wrap; gap: 8px; }
    .tag { background: #e8f0fe; color: #1976d2; padding: 4px 10px; border-radius: 14px; font-size: 12px; font-weight: 600; }

    .stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; margin-bottom: 32px; }
    .stat-card { background: #f7f8fa; border: 1px solid #eee; border-radius: 10px; padding: 16px; text-align: center; }
    .stat-num { display: block; font-size: 22px; font-weight: 700; color: #1976d2; }
    .stat-label { font-size: 12px; color: #666; }

    .grid { display: grid; grid-template-columns: 1.2fr 1fr; gap: 24px; }
    @media (max-width: 720px) { .grid { grid-template-columns: 1fr; } .stats { grid-template-columns: repeat(2, 1fr); } }

    .panel { background: #fff; border: 1px solid #eee; border-radius: 10px; padding: 20px; }
    .panel h2 { font-size: 17px; margin: 0 0 14px; }
    .panel h2:not(:first-child) { margin-top: 24px; }

    .exp-item { margin-bottom: 18px; }
    .exp-top { display: flex; justify-content: space-between; align-items: baseline; flex-wrap: wrap; gap: 6px; }
    .period { font-size: 12px; color: #888; }
    .org { margin: 2px 0 8px; color: #555; font-size: 13.5px; }
    .exp-item ul { margin: 0; padding-left: 18px; color: #444; font-size: 13.5px; line-height: 1.7; }

    .skill-group { margin-bottom: 14px; }
    .skill-group h3 { font-size: 13px; color: #666; margin: 0 0 6px; text-transform: uppercase; letter-spacing: 0.03em; }
    .chips { display: flex; flex-wrap: wrap; gap: 6px; }
    .chip { background: #f0f2f5; padding: 4px 9px; border-radius: 6px; font-size: 12px; }

    .certs { display: flex; flex-direction: column; gap: 8px; }
    .cert-row { display: flex; justify-content: space-between; align-items: center; font-size: 13.5px; }
    .badge { background: #e6f7ed; color: #1e8e4a; padding: 3px 9px; border-radius: 10px; font-size: 11px; font-weight: 600; }
    .badge.progress { background: #fff4e5; color: #b5720a; }
  `]
})
export class DashboardComponent {
  focusAreas = ['Azure Infrastructure', 'VMware', 'Zabbix Monitoring', 'Technical Presales'];

  experience: ExperienceItem[] = [
    {
      role: 'IT Operations Specialist',
      org: 'Brisa-Tech Solutions — NTT DATA Global engagement',
      period: 'Current',
      highlights: [
        'Administer Zabbix monitoring across 1000+ hosts, including a full server migration',
        'Manage VMware vSphere/ESXi/vCenter infrastructure and performance tuning',
        'Own backup operations across Veeam and Acronis',
        'Support Azure Virtual Desktop and Windows Server environments',
      ],
    },
    {
      role: 'IT Infrastructure Roles',
      org: 'Enterprise environments',
      period: '15+ years prior',
      highlights: [
        'Deep operational experience across virtualization and Windows Server administration',
        'Applied PRINCE2 project delivery practices across infrastructure initiatives',
        'Built networking and automation foundations for an Azure-first career direction',
      ],
    },
  ];

  skillGroups: SkillGroup[] = [
    { category: 'Virtualization & Compute', skills: ['VMware vSphere', 'ESXi', 'vCenter', 'Windows Server'] },
    { category: 'Monitoring & Backup', skills: ['Zabbix', 'Veeam', 'Acronis'] },
    { category: 'Cloud & DevOps', skills: ['Azure (conceptual)', 'Azure Virtual Desktop', 'Git', 'Jenkins', 'Terraform'] },
    { category: 'Networking & Delivery', skills: ['CCNA-level Networking', 'PRINCE2'] },
  ];

  certifications: Certification[] = [
    { name: 'CCNA', status: 'Certified' },
    { name: 'PRINCE2 Foundation & Practitioner', status: 'Certified' },
    { name: 'AZ-104 (Microsoft Azure Administrator)', status: 'In Progress' },
  ];
}
