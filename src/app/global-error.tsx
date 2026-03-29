"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  console.error("Global error:", error);
  return (
    <html lang="en">
      <body
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0A1628",
          margin: 0,
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        <div style={{ textAlign: "center", padding: "0 1.5rem" }}>
          <p
            style={{
              color: "#C9A84C",
              fontSize: "0.875rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              marginBottom: "1rem",
            }}
          >
            500
          </p>
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: 700,
              color: "#ffffff",
              marginBottom: "1rem",
            }}
          >
            Something Went Wrong.
          </h1>
          <p
            style={{
              color: "rgba(255,255,255,0.6)",
              fontSize: "1.125rem",
              maxWidth: "28rem",
              margin: "0 auto 2.5rem",
            }}
          >
            We are working on it. Please try again in a moment.
          </p>
          <button
            onClick={() => reset()}
            style={{
              backgroundColor: "#D32F3D",
              color: "#ffffff",
              fontWeight: 600,
              padding: "0.875rem 2rem",
              border: "none",
              cursor: "pointer",
              fontSize: "1rem",
            }}
          >
            Try Again
          </button>
        </div>
      </body>
    </html>
  );
}
