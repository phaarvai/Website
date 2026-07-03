import { Router, type IRouter } from "express";
import { z } from "zod";

const router: IRouter = Router();

const ContactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  organization: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  areaOfInterest: z.string().optional(),
});

router.post("/contact", (req, res) => {
  const result = ContactSchema.safeParse(req.body);

  if (!result.success) {
    res.status(400).json({
      success: false,
      errors: result.error.issues.map((i) => i.message),
    });
    return;
  }

  req.log.info({ contact: { name: result.data.name, email: result.data.email, organization: result.data.organization, areaOfInterest: result.data.areaOfInterest } }, "Contact form submission received");

  res.status(200).json({
    success: true,
    message: "Thank you for reaching out. A member of our team will be in contact shortly.",
  });
});

export default router;
