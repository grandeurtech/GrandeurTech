
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed"
    });
  }

  try {
    const {
      full_name,
      business_name,
      email,
      phone,
      industry,
      location,
      business_age,
      employee_count,
      record_keeping,
      biggest_challenge,
      data_availability,
      pilot_commitment
    } = req.body || {};

    if (
      !full_name?.trim() ||
      !business_name?.trim() ||
      !email?.trim() ||
      !phone?.trim() ||
      pilot_commitment !== true
    ) {
      return res.status(400).json({
        error: "Please complete the required fields and confirm your pilot commitment."
      });
    }

    const supabaseUrl = process.env.SUPABASE_URL;
    const secretKey = process.env.SUPABASE_SECRET_KEY;

    if (!supabaseUrl || !secretKey) {
      return res.status(500).json({
        error: "Server configuration is incomplete."
      });
    }

    const response = await fetch(
      `${supabaseUrl}/rest/v1/pilot_applications`,
      {
        method: "POST",
        headers: {
          apikey: secretKey,
          Authorization: `Bearer ${secretKey}`,
          "Content-Type": "application/json",
          Prefer: "return=minimal"
        },
        body: JSON.stringify({
          full_name,
          business_name,
          email,
          phone,
          industry,
          location,
          business_age,
          employee_count,
          record_keeping,
          biggest_challenge,
          data_availability,
          pilot_commitment
        })
      }
    );

    if (!response.ok) {
  const errorDetails = await response.text();

  console.error(
    "Supabase submission failed:",
    response.status,
    errorDetails
  );

  return res.status(500).json({
    error: "Unable to save your application. Please try again."
  });
}

    return res.status(201).json({
      success: true,
      message: "Your Founding 50 application has been received!"
    });

  } catch (error) {
    console.error("Application submission error:", error);

    return res.status(500).json({
      error: "Something went wrong. Please try again."
    });
  }
}
