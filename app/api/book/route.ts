import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    // TODO: Connect to email service or database
    console.log('Booking received:', body);
    return NextResponse.json(
      { success: true, message: 'Appointment booked successfully! We will contact you within 24 hours.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Booking error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to book appointment. Please try again.' },
      { status: 500 }
    );
  }
}
