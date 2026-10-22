# Phone viewing + PC editing (Version 2)

## Already built
- `?view=1` hides editing actions and makes the phone a view-only dashboard.
- Optional Supabase cloud sync refreshes the phone every 20 seconds while open.
- Only a signed-in owner email can save changes; database row-level security enforces it.
- If cloud is not configured, the app still works locally on your PC.

## One-time cloud setup (requires your own accounts)
1. Create a free Supabase project at https://supabase.com/ . In Authentication > Users, create your admin user with an email and password. Disable public sign-ups if desired.
2. In Supabase SQL Editor, paste `supabase-setup.sql`, replace `REPLACE_WITH_YOUR_ADMIN_EMAIL` with that exact email, and run it.
3. In Project Settings > API, copy the Project URL and **publishable / anon** key into `cloud-config.js`. NEVER put a service-role or secret key in the website.
4. Host the entire folder on an HTTPS static host such as Netlify Drop (https://app.netlify.com/drop). If you change the website, upload the new folder again.
5. On PC open the hosted URL, click ADMIN SIGN IN, sign in, and make an edit. This creates the cloud record. If you have existing local data, use Export JSON first, then Import JSON in the hosted page after sign-in to upload it.
6. On Samsung Chrome, open the hosted website address with `?view=1` at the end. Three dots > Add to Home screen. This view has no edit controls and cannot write to the cloud without owner authentication.

## Important
- Viewer data is PUBLIC to anyone who has the site address (and possibly anyone who discovers it). This is not a private-access solution. Do not publish sensitive information. For private viewer accounts, an additional login/permissions feature is needed.
- Phone viewing is intended for an unsigned-in browser. Do not sign into the owner account on the phone.
- A locally opened `file:///` version cannot sync until cloud-config.js is filled and you are online; a hosted HTTPS website is recommended.
- The app does not automatically read PS5 save files. You manually enter game data.
- Sync is an optional feature and is NOT enabled until you set up the cloud project and hosting. It is not yet deployed.
- The first cloud save must be made by the signed-in admin; there is no prepopulated cloud record.
- Export a JSON backup regularly. This is an early implementation and has not been end-to-end tested against a live Supabase project.
