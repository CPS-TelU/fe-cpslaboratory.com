"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import FlipCard from "@/components/ui/FlipCard";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

interface Assistant {
  id: string;
  image: string;
  kode: string;
  name: string;
  major: string;
  role: string;
  division: string;
  instagram?: string;
  linkedin?: string;
  github?: string;
}

export const AssistCardResearch: React.FC = () => {
  const [assistants, setAssistants] = useState<Assistant[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const ALLASSISTANT_API_URL = `${API_BASE_URL}/assistants`;

  useEffect(() => {
    const fetchAssistants = async () => {
      try {
        const response = await axios.get(ALLASSISTANT_API_URL, {
          headers: {
            Accept: "application/json",
          },
        });

        if (response.status !== 200) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = response.data;

        if (data) {
          const fetchedAssistants = data.map((item: any) => ({
            id: item.id,
            image: item.image || "/default-image.jpg",
            kode: item.kode,
            name: item.name || "No Name",
            major: item.major || "Unknown Major",
            role: item.role || "Unknown Role",
            division: item.divisi || "Unknown Division",
            instagram: item.instagram || "",
            linkedin: item.linkedin || "",
            github: item.github || "",
          }));

          setAssistants(fetchedAssistants);
          console.log(data);
          setLoading(false);
        } else {
          setError("No data found");
          setLoading(false);
        }
      } catch (err) {
        if (err instanceof Error) {
          setError(`Error fetching assistants from API: ${err.message}`);
        } else {
          setError("An unknown error occurred.");
        }
        setLoading(false);
      }
    };

    fetchAssistants();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    
    <div className="flex gap-4">
      {assistants.map((assistant,index) => (
        <FlipCard
          key={`${assistant.id}-${index}`}
          image={assistant.image}
          kode={assistant.kode}
          name={assistant.name}
          university="Telkom University" // Static data
          major={assistant.major}
          rotate="y" // Assuming all cards rotate in the y-axis
          role={assistant.role}
          instagram="https://www.instagram.com/hoka.csa/"
          linkedIn=""
          gitHub="https://github.com/hokacristian"
          className="" division={assistant.division}        />
      ))}
    </div>
  );
};