import { MetadataRoute } from "next";
const BUILD_DATE = process.env.BUILD_DATE_ISO || new Date().toISOString().split("T")[0];
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://nevadarealestatemarket.com";
  const pages = [
    // Core
    "", "/about", "/contact", "/privacy-policy", "/blog",
    // Henderson
    "/henderson",
    "/henderson/lake-las-vegas", "/henderson/macdonald-ranch",
    "/henderson/green-valley-ranch", "/henderson/seven-hills",
    "/henderson/anthem", "/henderson/inspirada",
    // Summerlin
    "/summerlin",
    "/summerlin/the-ridges", "/summerlin/the-summit",
    "/summerlin/red-rock-country-club", "/summerlin/stonebridge",
    "/sum