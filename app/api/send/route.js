import { EmailTemplate } from "./../../../components/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(req) {
  const response = await req.json();

  try {
    const { data, error } = await resend.emails.send({
      from: "NeerajRai@resend.dev",
      to: [response.emailToSend],
      subject: response?.userName + " shared a file with you",
      react: EmailTemplate({ response }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
