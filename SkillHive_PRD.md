# Product Requirements Document (PRD)

**Project:** SkillHive
**Team:** Supernova
**Track:** Smart India Hackathon (SIH)
**Version:** 1.0 — Draft for PPT Round 1
**Date:** September 4, 2026

---

## 1. Problem Statement (Summary)

A persistent gap exists between the skills taught in academic institutions and the skills demanded by industry. Students don't know what to learn for their target roles; industries struggle to find job-ready candidates; academicians lack visibility into industry internship and collaboration opportunities. There is no unified platform connecting **students, industries, academicians, and institutions** to close this gap.

---

## 2. Vision & Impact

SkillHive is a centralized Academia–Industry Collaboration Portal that assesses a student's real skills, identifies gaps against what specific companies actually need, and routes them toward the right internships/jobs — not just any job.

**Why this matters (the core insight driving impact):**
A student who knows Python but gets placed at a company that runs on Java has to relearn a stack from scratch. This costs the student time and stress, costs the company training resources, and increases early attrition. By matching students to roles that fit their *actual* skill profile:

- Students get placements aligned to what they already know (or can quickly bridge)
- Companies get job-ready hires and spend less on onboarding/retraining
- Attrition from environment mismatch drops
- Academicians get visibility into what industry actually wants, and can adjust curriculum/FDPs accordingly

This is the **win-win-win** framing for the pitch: Student wins (better fit, less relearning), Industry wins (lower training cost, lower attrition), Institution wins (better placement outcomes, informed curriculum).

---

## 3. Users & Roles (Phased)

| Role | Phase | Priority |
|---|---|---|
| **Student** | MVP (Phase 1) | Primary user |
| **Industry** | MVP (Phase 1) | Primary user |
| **Academician** | Phase 2 (post-internal hackathon) | Secondary |
| **Institution (admin)** | Phase 2 (post-internal hackathon) | Secondary |

All roles are role-based-access from day one architecturally, but only Student + Industry flows are built for the MVP demo.

---

## 4. MVP Scope (Phase 1 — Student + Industry Core Loop)

### 4.1 Student Flow
1. **Sign up / Login** (role: Student)
2. **Skill Profile Creation**
   - Upload resume (parsed) **or** manually fill qualifications & skills
   - Add certificates: certificate name, verifiable link, certificate ID (manual entry, no auto-verification in MVP)
3. **Skill Assessment**
   - System compares student's declared/parsed skills against skill requirements of target roles/companies
   - `Skill Gap = Required Skills (per role/company) − Skills Already Held`
4. **Skill Gap Report**
   - Shows missing skills, ranked by how many target roles need them
5. **Learning Recommendations**
   - For each gap skill, show curated YouTube embeds (MVP) as free learning resources
6. **Internship/Job Discovery**
   - Browse or get recommended internships/jobs based on match score
   - Apply directly; track application status
7. **Digital Portfolio** (basic version)
   - Single page showing skills, certificates (with links/IDs), applied internships

### 4.2 Industry Flow
1. **Sign up / Registration** → **Admin approval required** before the company can post anything (prevents spam/fake listings)
2. **Post Opportunity**
   - Internship / job / apprenticeship
   - Required skills list (company-specific — e.g., "SDE role, Java + Spring Boot" vs another company's "SDE role, Python + Django")
3. **View Matched Candidates**
   - System shows students ranked by compatibility score
   - Auto-shortlist: students above a configurable score threshold are flagged as "shortlisted" automatically; company can review/override
4. **Application Management**
   - Accept/reject/interview status tracking

### 4.3 Admin (minimal, for approvals only in MVP)
- Approve/reject industry registrations
- Approve/reject opportunity listings (basic spam check)

---

## 5. Matching & Recommendation Algorithm

Being upfront and realistic about this in the pitch builds credibility with judges — showing a growth path is better than overclaiming ML from day one.

### Phase 1 (Internal Hackathon / Prototype) — Rule-Based Weighted Scoring
```
match_score = Σ (weight_i × skill_match_i)   for i in required_skills
```
- Each required skill for a role has a weight (e.g., core skills weighted higher than nice-to-have)
- `skill_match_i` = 1 if student has the skill (or proficiency-scaled 0–1 if self-rated), else 0
- Final score normalized to 0–100%
- Students above a threshold (e.g., 70%) → auto-shortlisted
- Simple, explainable, fast to build in Python — realistic for a 12-hour build with the team's current skill level

### Phase 2 (Finals / Production) — ML-Based Recommendation Engine
- Once real usage data exists (applications, acceptances, outcomes), move to a collaborative-filtering or embedding-based model (e.g., matching student skill vectors to role vectors using cosine similarity, refined over time with feedback signals like acceptance/rejection outcomes)
- This is the credible "next step" to show technical maturity without overpromising for the first prototype

---

## 6. Verification & Trust

- **Certificates:** Student provides certificate name + verifiable link + certificate ID. No automated 3rd-party verification in MVP (manual/visual trust). **Future:** SkillHive issues its own verified course-completion certificates for content delivered on-platform, and integrates with issuer APIs (Coursera, NPTEL, etc.) for auto-verification.
- **Industries/Institutions:** Must register and be approved by SkillHive admin before posting any opportunity — this is the core anti-spam/anti-fake-listing control for MVP.

---

## 7. Data Sources & Integrations

| Need | MVP Approach | Future |
|---|---|---|
| Learning content | YouTube embeds (curated per skill) | Tie-ups with IITs/NITs, industry experts (Google/Amazon employees etc.) for original courses |
| Skill taxonomy | Manually curated per role/company (small seed set for demo) | Expand via structured taxonomy, possibly enriched from job-posting data |
| Certification verification | Manual (link + ID, self-reported) | Issuer API integrations, own certification body |
| Institutional records | Not integrated in MVP | ERP/institutional database integration in Phase 2 |

No existing datasets are available — all seed data (sample students, sample companies, sample skill requirements) will be created manually for the demo.

---

## 8. Non-Functional Requirements

| Aspect | Requirement |
|---|---|
| **Scale** | Prototype scale for PPT (7th) and internal hackathon (11th); production-ready deployment targeted for finals (15th) |
| **Security & Data Protection** | Essential from day one — handling student personal/academic data. Design with India's DPDP Act principles in mind: consent-based data collection, minimal data retention, role-based access control, encrypted storage of sensitive fields (resumes, certificates) |
| **Availability** | Best-effort for prototype; production deployment should target standard uptime practices (managed hosting, basic monitoring) |
| **Non-functional Requirements** | |
| **Scale** | Prototype scale for PPT (7th) and internal hackathon (11th); production-ready deployment targeted for finals (15th) |
| **Security & Data Protection** | Essential from day one — handling student personal/academic data. Design with India's DPDP Act principles in mind: consent-based data collection, minimal data retention, role-based access control, encrypted storage of sensitive fields (resumes, certificates) |
| **Availability** | Best-effort for prototype; production deployment should target standard uptime practices (managed hosting, basic monitoring) |
| **Tech Stack** | See Section 9 for full breakdown |

---

## 9. Tech Stack

| Layer | Choice |
|---|---|
| Frontend | Next.js + Tailwind CSS |
| UI Components | shadcn/ui |
| State Management | Zustand |
| Backend | FastAPI (Python) |
| DB Driver | asyncpg (raw async queries, connection pooling) |
| Database | PostgreSQL |
| Auth | Firebase Auth |
| File Storage | Firebase Storage |
| Matching Engine | Python/NumPy (rule-based) → scikit-learn (ML, future) |
| Hosting (Hackathon rounds) | Vercel (frontend) + Render/Railway (backend + DB) |
| Hosting (Production/Finals) | AWS (EC2/ECS + Docker) |
| Design | Figma |
| Version Control | GitHub |

### Tech Stack Rationale (mapped to team strengths)

| Layer | Choice | Why |
|---|---|---|
| Frontend | Next.js | Shubham has direct experience; fast to build & deploy |
| Backend | Python (FastAPI) | Most of the team (Shubham, Kamal, Sagarika) knows Python |
| DB Driver | asyncpg | Lightweight, async-native pairing with FastAPI; avoids ORM learning curve under time pressure — raw parameterized SQL is a natural fit given the team's SQL/DBMS background (Kamal) |
| Database | PostgreSQL | Kamal & others know SQL/DBMS (MySQL background transfers well); Shubham has PostgreSQL experience; relational model fits skills/roles/matching data well |
| Auth/Storage | Firebase Auth + Firebase Storage | Shubham's existing experience for fast, reliable setup; keeps resume/certificate storage and auth in one ecosystem |
| Design | Figma | Alok leads UI/UX and visual design for PPT + prototype screens |
| Mobile (Phase 2+) | Flutter | Deferred; not needed for MVP web-first approach |

**Suggested rough team split for the 12hr hackathon build:**
- Shubham: architecture, backend core (FastAPI + matching logic), deployment
- Kamal: database schema (PostgreSQL) + raw asyncpg queries, backend support
- Sagarika: backend/data handling support (skill parsing, seed data), testing
- Ansuman & Krishnendu: frontend support (Next.js pages/components), documentation, demo prep
- Alok: UI/UX design in Figma → translated to frontend styling, PPT visuals

**Implementation notes:**
- Since there's no ORM, keep SQL queries organized in a dedicated `db/queries.py`-style module per entity to avoid mess across multiple contributors
- Use `asyncpg.create_pool()` for connection pooling from the start rather than one-off connections, to avoid connection issues during live demos

---

## 10. Roadmap by SIH Milestone

| Date | Milestone | Deliverable |
|---|---|---|
| **Sept 7** | PPT Submission | Problem, solution, architecture diagram, wireframes, tech stack, feasibility, impact — no working code required |
| **Sept 9** | Round 1 Shortlisting | Based on PPT |
| **Sept 11** | Round 2 — Internal 12hr Hackathon | Working prototype: end-to-end demo of **Student signup → skill profile → skill gap → recommended internships → apply**, plus **Industry: register → post opportunity → view ranked candidates**. Rule-based matching only. |
| **Sept 15** | Round 3 — Finals | Production-grade deployment: polished UI, real hosting, expanded features (possibly Academician/Institution views), ML-based matching if time allows, security hardening |

---

## 11. Success Metrics (for pitch narrative)

- Reduction in skill-role mismatch at placement (student placed in a company using tech they actually know)
- Reduction in industry onboarding/training time & cost
- Reduction in early attrition due to environment mismatch
- Increase in students actively closing skill gaps before applying (engagement with learning recommendations)
- Institution-level: improved placement rate, better curriculum alignment via academician visibility into industry demand (Phase 2)

---

## 12. Out of Scope for MVP (explicitly, to avoid scope creep before 7th)

- Academician and Institution dashboards (Phase 2)
- Automated certificate verification / issuer API integration
- ML-based recommendation engine (Phase 1 demo uses rule-based scoring only)
- Real integrations with learning platforms/certification providers (YouTube embeds only for now)
- Mobile app (Flutter) — web-first for MVP
- Analytics/reporting dashboards — deferred to Phase 2

---

## 13. Open Items (to finalize before/soon after PPT)

- Tagline for SkillHive
- Exact skill taxonomy/seed dataset for the demo (which companies/roles to showcase)
- Threshold value for auto-shortlisting
- Specific YouTube content curation list per demo skill gap
- Wireframes/Figma mockups (Alok) — needed for PPT visuals
