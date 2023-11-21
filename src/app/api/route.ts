export async function GET() {
  const data = { "next.js": true };

  return Response.json({ data });
}
