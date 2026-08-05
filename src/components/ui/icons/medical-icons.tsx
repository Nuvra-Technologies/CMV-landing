import type { SVGProps } from "react";

import type { SpecialtyIconName } from "@/constants/specialties";

type IconProps = SVGProps<SVGSVGElement>;

const baseProps: IconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

function HeartIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M19 14c1.5-1.5 3-3.2 3-5.5A4.5 4.5 0 0 0 13.5 6 4.5 4.5 0 0 0 5 8.5c0 2.3 1.5 4 3 5.5l6 6z" />
    </svg>
  );
}

function BoneIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M17 10c1-1.2 1-3-.2-4.2a2.8 2.8 0 0 0-4-.1L7 11.5a2.8 2.8 0 0 0-.1 4c1.2 1.2 3 1.2 4.2.2L17 10Z" />
      <circle cx="5.5" cy="18.5" r="2.2" />
      <circle cx="18.5" cy="5.5" r="2.2" />
    </svg>
  );
}

function EyeIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function BrainIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M9 5a3 3 0 0 0-3 3v.4A2.8 2.8 0 0 0 4 11a3 3 0 0 0 2 2.8V15a3 3 0 0 0 3 3" />
      <path d="M15 5a3 3 0 0 1 3 3v.4A2.8 2.8 0 0 1 20 11a3 3 0 0 1-2 2.8V15a3 3 0 0 1-3 3" />

      <path d="M9 5c1.5.5 2 1.6 2 3v8" />
      <path d="M15 5c-1.5.5-2 1.6-2 3v8" />

      <path d="M8 9h2" />
      <path d="M14 9h2" />
      <path d="M8 13h3" />
      <path d="M13 13h3" />
    </svg>
  );
}

function StethoscopeIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M5 4v6a4 4 0 0 0 8 0V4" />
      <path d="M9 16a4 4 0 0 0 8 0v-2" />
      <circle cx="19" cy="10" r="2" />
      <path d="M5 4h0M9 4h0" />
    </svg>
  );
}

function BabyIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <circle cx="12" cy="8" r="4" />
      <path d="M8 9c-1 3 .5 5 4 5s5-2 4-5" />
      <path d="M9 18c0 1.5 1.3 2 3 2s3-.5 3-2" />
    </svg>
  );
}

function PulseIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M3 12h4l2-7 4 14 2-7h6" />
    </svg>
  );
}

function LungsIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M12 3v7" />
      <path d="M12 10c-1.2-2.2-2.8-4-4.8-4-2.2 0-3.7 2.2-3.7 5 0 4 2.2 7 5.5 7 2.2 0 3-1.8 3-4V10Z" />
      <path d="M12 10c1.2-2.2 2.8-4 4.8-4 2.2 0 3.7 2.2 3.7 5 0 4-2.2 7-5.5 7-2.2 0-3-1.8-3-4V10Z" />
    </svg>
  );
}

function AppleIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M12 7c-2-2-6-.5-6 4 0 4 2.5 8 6 8s6-4 6-8c0-4.5-4-6-6-4Z" />
      <path d="M12 7V4" />
      <path d="M12 4c1.5 0 2.5.5 3 2" />
    </svg>
  );
}

function GlandIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <circle cx="12" cy="8" r="2" />
      <circle cx="8" cy="14" r="2" />
      <circle cx="16" cy="14" r="2" />
      <path d="M12 10v2" />
      <path d="M10 13l1-1" />
      <path d="M14 13l-1-1" />
    </svg>
  );
}

function FootIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="m15 10.42 4.8-5.07" />
      <path d="M19 18h3" />
      <path d="M9.5 22 21.414 9.415A2 2 0 0 0 21.2 6.4l-5.61-4.208A1 1 0 0 0 14 3v2a2 2 0 0 1-1.394 1.906L8.677 8.053A1 1 0 0 0 8 9c-.155 6.393-2.082 9-4 9a2 2 0 0 0 0 4h14" />
    </svg>
  );

}

function HandIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M8 11V6" />
      <path d="M11 10V4" />
      <path d="M14 10V5" />
      <path d="M17 12V7" />
      <path d="M8 11c0 5 2 8 6 8s6-3 6-7v-1" />
    </svg>
  );
}

function SpeechIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M5 7a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v4a4 4 0 0 1-4 4H11l-4 4v-4H9a4 4 0 0 1-4-4Z" />
    </svg>
  );
}

function VeinsIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M12 4v16" />
      <path d="M12 7c-2 1-3 3-3 5" />
      <path d="M12 10c2 1 3 3 3 5" />
      <path d="M12 14c-1 .5-2 1.5-2 3" />
    </svg>
  );
}

const SPECIALTY_ICONS: Record<
  SpecialtyIconName,
  (props: IconProps) => React.JSX.Element
> = {
  heart: HeartIcon,
  bone: BoneIcon,
  eye: EyeIcon,
  brain: BrainIcon,
  stethoscope: StethoscopeIcon,
  baby: BabyIcon,
  pulse: PulseIcon,
  lungs: LungsIcon,
  apple: AppleIcon,
  gland: GlandIcon,
  foot: FootIcon,
  hand: HandIcon,
  speech: SpeechIcon,
  veins: VeinsIcon
};

export function SpecialtyIcon({
  name,
  ...props
}: IconProps & { name: SpecialtyIconName }) {
  const Icon = SPECIALTY_ICONS[name];

  return <Icon {...props} />;
}