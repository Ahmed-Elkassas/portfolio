import { Download, Mail } from "lucide-react";
import { siGithub } from "simple-icons";
import { BrandIcon } from "@/components/icons/brand-icon";
import { LinkedinIcon } from "@/components/icons/linkedin-icon";
import { SectionHeading } from "@/components/ui/section-heading";
import { contact } from "@/content/contact";
import { site } from "@/content/site";
import { ContactArrow } from "./contact-arrow";

const pillClass =
  "inline-flex h-12 items-center gap-2.5 rounded-full border border-contact-text px-5 font-semibold transition-colors hover:bg-contact-text hover:text-sec-contact";

export function Contact() {
  const { headline } = contact;

  return (
    <section
      id="contact"
      className="section-y bg-sec-contact text-contact-text"
    >
      {/* @container: lets the email size itself from this column's width (cqi). */}
      <div className="@container page-container flex flex-col items-center gap-8 text-center">
        <SectionHeading
          id="contact"
          title={contact.title}
          icon={<Mail />}
          variant="contact"
        />

        <h2 className="text-5xl leading-[1.1] font-bold tracking-[-2px] text-balance lg:text-[88px] lg:leading-[1.05]">
          <span className="block">
            {headline.line1}{" "}
            <span className="text-contact-accent">
              {headline.line1Highlight}
            </span>
          </span>{" "}
          <span className="mt-2 block">
            {headline.line2}{" "}
            <span className="inline-block rounded-[18px] bg-contact-hi-bg px-4.5 text-contact-hi-text">
              {headline.line2Pill}
            </span>
          </span>
        </h2>

        {/* Offset to the right so it points back down at the email. */}
        <ContactArrow className="-my-4 h-auto w-40 translate-x-1/3 sm:w-65" />

        <p className="text-lg">{contact.lead}</p>

        {/* The address measures 15.4em in Space Grotesk 600, so column ÷ 15.8
            always fits one line (~21px on a 375px phone); min() caps it at
            the design's 64px. Underline offset in em (10/64) scales with it. */}
        <a
          href={`mailto:${site.email}`}
          className="font-display text-[min(4rem,calc(100cqi/15.8))] leading-tight font-semibold whitespace-nowrap underline decoration-[3px] underline-offset-[0.16em]"
        >
          {site.email}
        </a>

        <ul className="flex flex-wrap justify-center gap-3">
          <li>
            <a
              href={site.links.linkedin}
              target="_blank"
              rel="noopener"
              className={pillClass}
            >
              <LinkedinIcon size={18} />
              {contact.linkedinLabel}
            </a>
          </li>
          <li>
            <a
              href={site.links.github}
              target="_blank"
              rel="noopener"
              className={pillClass}
            >
              <BrandIcon icon={siGithub} size={18} />
              {contact.githubLabel}
            </a>
          </li>
          <li>
            <a href={site.cvPath} download className={pillClass}>
              <Download aria-hidden="true" className="size-4.5" />
              {contact.cvLabel}
            </a>
          </li>
        </ul>

        <p className="text-sm">{contact.meta}</p>
      </div>
    </section>
  );
}
