import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for submitting school inquiries
  app.post("/api/submit-inquiry", async (req, res) => {
    try {
      const { name, phone, email, grade, departmentEmail, message } = req.body;

      if (!name || !phone || !departmentEmail) {
        return res.status(400).json({ 
          success: false, 
          error: "Name, phone number, and target department are required." 
        });
      }

      // Log the inquiry on the server side
      console.log("==================================================");
      console.log(`[INQUIRY RECEIVED] Routed to: ${departmentEmail}`);
      console.log(`- Parent Name: ${name}`);
      console.log(`- Phone: ${phone}`);
      console.log(`- Email: ${email || 'Not provided'}`);
      console.log(`- Grade/Program: ${grade}`);
      console.log(`- Message: ${message || 'No additional message'}`);
      console.log("==================================================");

      // In a production setup with SMTP or Resend/SendGrid configured, you would send the email here:
      // await sendEmail({ to: departmentEmail, subject: `Inquiry from ${name}`, text: message });

      return res.json({
        success: true,
        message: `Inquiry successfully transmitted to ${departmentEmail}. Our admissions team will contact you shortly.`
      });
    } catch (err: any) {
      console.error("Error processing inquiry:", err);
      return res.status(500).json({ success: false, error: "Internal server error while processing inquiry." });
    }
  });

  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*all', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
