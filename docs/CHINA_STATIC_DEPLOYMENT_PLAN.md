# China Static Deployment Plan

This project is an Astro static portfolio. The long-term deployment target is:

GitHub -> GitHub Actions -> Tencent Cloud COS -> Tencent Cloud CDN -> Custom domain

## Current Status

Done:

- The site is confirmed as static: `astro.config.mjs` uses `output: "static"`.
- Portfolio content has been separated from code.
- Content files now live in `src/site-content/`.
- Images and files remain in `public/assets/`.
- Maintenance instructions exist in `docs/CONTENT_MAINTENANCE.md`.
- `npm run build` passes.

Not done yet:

- Domain purchase / confirmation.
- Tencent Cloud account setup.
- ICP filing.
- COS bucket setup.
- CDN setup.
- GitHub Actions deployment workflow.

## Phase 1: Prepare The Domain

Goal: own a stable domain that can be filed and used in China.

Actions:

1. Choose and buy a domain, preferably through Tencent Cloud or Alibaba Cloud.
2. Complete domain real-name verification.
3. Decide the final site domain, for example:
   - `maki.example.com`
   - `www.example.com`
   - `example.com`

Notes:

- A mainland China deployment requires ICP filing for the domain.
- The current `vercel.app` domain cannot be filed as Maki's own domain.

Estimated time: same day to 2 days.
Estimated cost: usually 50-100 RMB/year.

## Phase 2: ICP Filing

Goal: make the domain legally usable with mainland China hosting/CDN.

Actions:

1. Use Tencent Cloud ICP filing if Tencent Cloud COS/CDN will be used.
2. Submit personal website filing information.
3. Complete face verification and SMS verification.
4. Wait for review.

Estimated time: usually 1-3 weeks; allow up to 20 working days.
Estimated cost: free.

Important:

- Do not point the domain to mainland China services before the filing process is ready.
- After ICP approval, add the ICP number to the site footer.

## Phase 3: Create Tencent Cloud COS Static Hosting

Goal: create the storage location for generated static files.

Actions:

1. Create a COS bucket in a mainland China region.
2. Enable static website hosting if needed.
3. Upload a test build from the local `dist/` folder.
4. Confirm `index.html` and asset paths work.

Estimated time: 1-2 hours.
Estimated cost: very low for this portfolio, usually a few RMB/year for storage.

## Phase 4: Connect CDN And HTTPS

Goal: serve the site quickly to China-based visitors.

Actions:

1. Add the filed custom domain to Tencent Cloud CDN.
2. Use the COS bucket as the origin.
3. Configure HTTPS certificate.
4. Configure caching rules for static assets.
5. Configure CDN cache purge rules for future deployment.
6. Add DNS records for the domain.

Estimated time: 1-3 hours after ICP approval.
Estimated cost:

- CDN 100GB/year traffic package is usually enough for a small portfolio.
- Budget around 20-100 RMB/year for low traffic.

## Phase 5: Add GitHub Actions Auto Deployment

Goal: make updates feel similar to Vercel.

Target workflow:

1. Maki provides new content/images.
2. AI updates files in this repo.
3. Changes are pushed to GitHub.
4. GitHub Actions runs:
   - install dependencies
   - `npm run build`
   - upload `dist/` to Tencent Cloud COS
   - purge CDN cache
5. The live site updates in a few minutes.

Actions:

1. Create a Tencent Cloud API key with minimum required permissions for COS upload and CDN purge.
2. Add GitHub repository secrets:
   - `TENCENT_SECRET_ID`
   - `TENCENT_SECRET_KEY`
   - `COS_BUCKET`
   - `COS_REGION`
   - `CDN_DOMAIN`
3. Add `.github/workflows/deploy-tencent-cos.yml`.
4. Test deployment with a small content change.

Estimated time: 2-4 hours for first setup.
Estimated cost:

- GitHub Actions: usually free for this project scale.
- Tencent Cloud: same COS/CDN costs as above.

## Phase 6: Public Compliance Finishing

Goal: make the public China-hosted site complete.

Actions:

1. Add ICP filing number to site footer.
2. Complete public security filing within the required period after launch.
3. Add public security filing text/icon to footer when approved.
4. Keep Tencent Cloud billing alerts enabled.

Estimated time: varies by review.
Estimated cost: free.

## Recommended Next Step

The next real-world step is to buy or choose the domain and start real-name
verification.

If the domain is already owned, the next step is to decide whether Tencent Cloud
or Alibaba Cloud will be used for ICP filing and static hosting. For this plan,
Tencent Cloud is assumed.

