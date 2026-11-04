
export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({
      error: "Method not allowed"
    });
  }

  res.setHeader("Cache-Control", "no-store");

  const supabaseUrl = process.env.SUPABASE_URL;
  const secretKey = process.env.SUPABASE_SECRET_KEY;

  if (!supabaseUrl || !secretKey) {
    return res.status(500).json({
      error: "Server configuration is incomplete."
    });
  }

  // Require a Supabase access token.
  const authorization = req.headers.authorization || "";
  const match = /^Bearer\s+(\S+)$/i.exec(authorization);

  if (!match) {
    return res.status(401).json({
      error: "Authentication required."
    });
  }

  const accessToken = match[1];

  try {
    // Step 1: Verify the access token with Supabase Auth.
    const userResponse = await fetch(
      `${supabaseUrl}/auth/v1/user`,
      {
        headers: {
          apikey: secretKey,
          Authorization: `Bearer ${accessToken}`
        }
      }
    );

    if (!userResponse.ok) {
      return res.status(401).json({
        error: "Invalid or expired session."
      });
    }

    const user = await userResponse.json();

    if (!user.id) {
      return res.status(401).json({
        error: "Unable to verify user."
      });
    }

    // Step 2: Confirm this user is an administrator.
    const adminResponse = await fetch(
      `${supabaseUrl}/rest/v1/admin_users?user_id=eq.${encodeURIComponent(user.id)}&select=user_id`,
      {
        headers: {
          apikey: secretKey,
          Authorization: `Bearer ${secretKey}`
        }
      }
    );

    if (!adminResponse.ok) {
      throw new Error("Administrator verification failed.");
    }

    const admins = await adminResponse.json();

    if (!Array.isArray(admins) || admins.length !== 1) {
      return res.status(403).json({
        error: "Administrator access required."
      });
    }

    // Step 3: Retrieve applications after authorization.
    const applicationsResponse = await fetch(
      `${supabaseUrl}/rest/v1/pilot_applications?select=*&order=created_at.desc&limit=100`,
      {
        headers: {
          apikey: secretKey,
          Authorization: `Bearer ${secretKey}`
        }
      }
    );

    if (!applicationsResponse.ok) {
      throw new Error("Unable to retrieve applications.");
    }

    const applications = await applicationsResponse.json();

    return res.status(200).json({
      success: true,
      applications
    });

  } catch (error) {
    console.error("Admin applications API error:", error);

    return res.status(500).json({
      error: "Unable to load applications. Please try again."
    });
  }
}
