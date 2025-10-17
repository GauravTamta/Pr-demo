// app/api/users/route.js
// import {NextResponse} from 'next/server';

export async function GET() {
  const users = [
    { id: 1, name: "Aisha" },
    { id: 2, name: "Ravi" },
    { id: 3, name: "Sara" },
     { id: 3, name: "Sara" },
  ];

  // Return as JSON
  return Response.json(users);
}
