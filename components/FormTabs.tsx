"use client";

import { useState } from "react";
import ContactForm from "@/components/ContactForm";
import HireMeForm from "@/components/HireMeForm";

/** Contact page form switcher — two distinct intakes:
 *  "Services" for freelance/project enquiries, "Hire Me" for full-time roles. */
export default function FormTabs() {
  const [tab, setTab] = useState<"services" | "hire">("services");

  return (
    <div className="form-tabs-wrap">
      <div className="form-tabs" role="tablist" aria-label="Enquiry type">
        <button
          role="tab"
          aria-selected={tab === "services"}
          className={`form-tab${tab === "services" ? " active" : ""}`}
          onClick={() => setTab("services")}
        >
          <span className="ft-icon">🛠️</span>
          <span className="ft-text">
            <strong>Project Enquiry</strong>
            <small>Freelance / consulting work</small>
          </span>
        </button>
        <button
          role="tab"
          aria-selected={tab === "hire"}
          className={`form-tab${tab === "hire" ? " active" : ""}`}
          onClick={() => setTab("hire")}
        >
          <span className="ft-icon">💼</span>
          <span className="ft-text">
            <strong>Hire Me</strong>
            <small>Full-time / contract roles</small>
          </span>
        </button>
      </div>

      <div role="tabpanel">
        {tab === "services" ? <ContactForm /> : <HireMeForm />}
      </div>
    </div>
  );
}
