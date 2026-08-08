import type { SVGProps } from "react";

export type RentalIconName =
    | "office"
    | "location"
    | "clock"
    | "professional"
    | "check";

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

function OfficeIcon(props: IconProps) {
    return (
        <svg {...baseProps} {...props}>
            <path d="M4 21h16" />
            <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" />
            <path d="M9 7h2" />
            <path d="M13 7h2" />
            <path d="M9 11h2" />
            <path d="M13 11h2" />
            <path d="M9 15h2" />
            <path d="M13 15h2" />
            <path d="M10 21v-3h4v3" />
        </svg>
    );
}

function LocationIcon(props: IconProps) {
    return (
        <svg {...baseProps} {...props}>
            <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
            <circle cx="12" cy="10" r="2.5" />
        </svg>
    );
}

function ClockIcon(props: IconProps) {
    return (
        <svg {...baseProps} {...props}>
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7v5l3 2" />
        </svg>
    );
}

function ProfessionalIcon(props: IconProps) {
    return (
        <svg {...baseProps} {...props}>
            <path d="M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
            <path d="M3 21a6 6 0 0 1 12 0" />
            <path d="M16 8h5" />
            <path d="M18.5 5.5v5" />
        </svg>
    );
}

function CheckIcon(props: IconProps) {
    return (
        <svg {...baseProps} {...props}>
            <path d="m5 12 4 4L19 6" />
        </svg>
    );
}

const RENTAL_ICONS: Record<
    RentalIconName,
    (props: IconProps) => React.JSX.Element
> = {
    office: OfficeIcon,
    location: LocationIcon,
    clock: ClockIcon,
    professional: ProfessionalIcon,
    check: CheckIcon
};

export function RentalIcon({
    name,
    ...props
}: IconProps & { name: RentalIconName }) {
    const Icon = RENTAL_ICONS[name];

    return <Icon {...props} />;
}