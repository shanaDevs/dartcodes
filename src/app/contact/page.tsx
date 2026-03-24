import { Metadata } from "next";
import ContactContent from "./contact-content";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with DartCodes for your digital transformation needs. We are ready to bring your vision to life.",
};

export default function ContactPage() {
  return <ContactContent />;
}
