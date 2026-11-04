
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

type Application = {
  id: number;
  created_at: string;
  full_name: string;
  business_name: string;
  email: string;
  phone: string;
  industry: string | null;
  location: string | null;
  biggest_challenge: string | null;
  application_status: string | null;
};

export default function AdminDashboard() {
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selected, setSelected] = useState<Application | null>(null);

  useEffect(() => {
    let active = true;

    async function loadApplications() {
      try {
        const { data, error: sessionError } =
          await supabase.auth.getSession();

        if (sessionError || !data.session) {
          window.location.replace("/sme-manager/admin/login");
          return;
        }

        const response = await fetch("/api/admin/applications", {
          headers: {
            Authorization: `Bearer ${data.session.access_token}`,
          },
          cache: "no-store",
        });

        if (response.status === 401 || response.status === 403) {
          await supabase.auth.signOut();
          window.location.replace("/sme-manager/admin/login");
          return;
        }

        if (!response.ok) {
          throw new Error("Unable to load applications.");
        }

        const result = await response.json();

        if (active) {
          setApplications(result.applications || []);
        }
      } catch (err) {
        if (active) {
          setError(
            err instanceof Error ? err.message : "Something went wrong."
          );
        }
      } finally {
        if (active) setLoading(false);
      }
    }

    loadApplications();

    return () => {
      active = false;
    };
  }, []);

  async function handleLogout() {
    await supabase.auth.signOut();
    window.location.replace("/sme-manager/admin/login");
  }

  const countStatus = (status: string) =>
    applications.filter(
      (application) =>
        (application.application_status || "Pending Review") === status
    ).length;

  const styles = {
    card: {
      background: "#ffffff",
      borderRadius: "12px",
      padding: "20px",
      boxShadow: "0 3px 12px rgba(0,0,0,0.06)",
    },
  };

  return (
    <main style={{
      minHeight: "100vh",
      background: "#f5f7fb",
      padding: "32px 20px",
      color: "#172554",
    }}>
      <div style={{ maxWidth: "1150px", margin: "0 auto" }}>
        <header style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "16px",
          marginBottom: "30px",
        }}>
          <div>
            <h1>Founding 50 Dashboard</h1>
            <p>Grandeur SME Manager — Pilot Applications</p>
          </div>

          <button onClick={handleLogout}>Sign Out</button>
        </header>

        {loading ? (
          <p>Loading applications...</p>
        ) : error ? (
          <p role="alert" style={{ color: "#b91c1c" }}>{error}</p>
        ) : (
          <>
            <section style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
              gap: "16px",
              marginBottom: "30px",
            }}>
              {[
                ["Total Applications", applications.length],
                ["Pending Review", countStatus("Pending Review")],
                ["Shortlisted", countStatus("Shortlisted")],
                ["Accepted", countStatus("Accepted")],
                ["Waitlisted", countStatus("Waitlisted")],
              ].map(([label, value]) => (
                <div key={label} style={styles.card}>
                  <p>{label}</p>
                  <h2>{value}</h2>
                </div>
              ))}
            </section>

            <section style={styles.card}>
              <h2>Applications</h2>

              {applications.length === 0 ? (
                <p>No applications received yet.</p>
              ) : (
                <div style={{ overflowX: "auto" }}>
                  <table style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    textAlign: "left",
                  }}>
                    <thead>
                      <tr>
                        <th style={{ padding: "12px" }}>Business</th>
                        <th style={{ padding: "12px" }}>Applicant</th>
                        <th style={{ padding: "12px" }}>Industry</th>
                        <th style={{ padding: "12px" }}>Status</th>
                        <th style={{ padding: "12px" }}>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {applications.map((application) => (
                        <tr key={application.id} style={{
                          borderTop: "1px solid #e5e7eb",
                        }}>
                          <td style={{ padding: "12px" }}>
                            {application.business_name}
                          </td>
                          <td style={{ padding: "12px" }}>
                            {application.full_name}
                          </td>
                          <td style={{ padding: "12px" }}>
                            {application.industry || "—"}
                          </td>
                          <td style={{ padding: "12px" }}>
                            {application.application_status || "Pending Review"}
                          </td>
                          <td style={{ padding: "12px" }}>
                            <button onClick={() => setSelected(application)}>
                              View
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>

            {selected && (
              <section style={{
                ...styles.card,
                marginTop: "24px",
              }}>
                <button onClick={() => setSelected(null)}>Close</button>
                <h2>{selected.business_name}</h2>
                <p><strong>Applicant:</strong> {selected.full_name}</p>
                <p><strong>Email:</strong> {selected.email}</p>
                <p><strong>Phone:</strong> {selected.phone}</p>
                <p><strong>Industry:</strong> {selected.industry || "—"}</p>
                <p><strong>Location:</strong> {selected.location || "—"}</p>
                <p>
                  <strong>Biggest Challenge:</strong>{" "}
                  {selected.biggest_challenge || "—"}
                </p>
                <p>
                  <strong>Submitted:</strong>{" "}
                  {new Date(selected.created_at).toLocaleString()}
                </p>
              </section>
            )}
          </>
        )}
      </div>
    </main>
  );
}
