import { Metadata } from "next";
import CareersContent from "./careers-content";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join the DartCodes team and help us build the future of digital solutions. View open positions and benefits.",
};

export default function CareersPage() {
  return <CareersContent />;
}
