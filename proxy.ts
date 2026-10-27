import { NextResponse } from "next/server";

// Set to false and redeploy when Claire is ready to reopen the website.
const maintenanceMode = true;

const maintenancePage = `<!doctype html>
<html lang="en-GB">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Website maintenance | Sage House Therapy</title>
    <style>
      * { box-sizing: border-box; }
      body { margin: 0; min-height: 100svh; display: grid; place-items: center; padding: 24px; background: #e7eee8; color: #434343; font-family: Arial, sans-serif; }
      main { width: 100%; max-width: 640px; padding: clamp(32px, 7vw, 64px); text-align: center; background: #fcfbf8; border: 1px solid #b7c8ba; border-radius: 20px; }
      img { display: block; width: 160px; max-width: 65%; height: auto; margin: 0 auto 28px; }
      .brand { color: #53644f; font-size: 14px; letter-spacing: .15em; text-transform: uppercase; }
      h1 { margin: 24px 0; font: normal clamp(32px, 7vw, 44px)/1.15 Georgia, serif; }
      p { margin: 16px 0 0; font-size: 17px; line-height: 1.7; }
    </style>
  </head>
  <body>
    <main>
      <img src="/images/sage-house-logo.png" alt="">
      <div class="brand">Sage House Therapy</div>
      <h1>We’re making a few updates</h1>
      <p>Our website is temporarily unavailable while we make some updates.</p>
      <p>Thank you for your patience and understanding.</p>
    </main>
  </body>
</html>`;

export function proxy() {
  if (!maintenanceMode) return NextResponse.next();

  return new NextResponse(maintenancePage, {
    status: 503,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "no-store, max-age=0",
      "Retry-After": "86400",
    },
  });
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|images/sage-house-logo\\.png$|favicon\\.ico$).*)",
  ],
};
