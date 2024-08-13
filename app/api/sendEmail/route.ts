import { Resend } from "resend";
import { NextResponse } from "next/server";
import React from 'react';
import contactFormEmail from "@/app/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    
        const { email, message, name, phone } = await request.json();

        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'cpslaboratory@365.telkomuniversity.ac.id',
            subject: 'Message From Cytizen ',
            reply_to: email,
            react: React.createElement(contactFormEmail, {
                name: name,
                email: email,
                phone: phone,
                message: message,
                
            }),
        });

        return NextResponse.json({
            status: 'OK',
        });
   
}