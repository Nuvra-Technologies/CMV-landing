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

function ToothIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M12 4c-2 0-3 1-4.5 1S5 4 5 4c-2 0-3 2-3 4 0 2 1 3 1 5s1 7 3 7c1.5 0 1.5-4 3-4s1.5 4 3 4c2 0 3-5 3-7s1-3 1-5c0-2-1-4-3-4 0 0-1 1-2.5 1S14 4 12 4Z" />
    </svg>
  );
}

function BrainIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 3 3" />
      <path d="M15 4a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-3 3" />
      <path d="M9 4v16M15 4v16" />
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

const SPECIALTY_ICONS: Record<
  SpecialtyIconName,
  (props: IconProps) => React.JSX.Element
> = {
  heart: HeartIcon,
  bone: BoneIcon,
  eye: EyeIcon,
  tooth: ToothIcon,
  brain: BrainIcon,
  stethoscope: StethoscopeIcon,
  baby: BabyIcon,
  pulse: PulseIcon,
};

export function SpecialtyIcon({
  name,
  ...props
}: IconProps & { name: SpecialtyIconName }) {
  const Icon = SPECIALTY_ICONS[name];

  return <Icon {...props} />;
}