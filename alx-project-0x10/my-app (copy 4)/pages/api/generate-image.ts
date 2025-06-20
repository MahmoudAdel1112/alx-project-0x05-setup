export const runtime = "edge";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const text = await req.json();
  const url = "https://chatgpt-42.p.rapidapi.com/texttoimage3";
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "x-rapidapi-key": process.env.NEXT_PUBLIC_GPT_API_KEY,
      "x-rapidapi-host": "chatgpt-42.p.rapidapi.com",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text: text,
      width: 512,
      height: 512,
      steps: 1,
    }),
  });
  const result = await response.json();
  return NextResponse.json(result);
}
export default POST;

/**
 * 


try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
 */
