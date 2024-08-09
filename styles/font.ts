import { DM_Sans, Didact_Gothic } from "next/font/google";

export const dmSans = DM_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
    variable: "--font-dm-sans",
});

export const didactGothic = Didact_Gothic({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-didact-gothic",
});
